#!/usr/bin/env python3
"""
MDX Front Matter Refactoring Script

This script refactors Front Matter in MDX files according to .rules1 specifications.
It safely modifies only the Front Matter section while preserving document body content.

Features:
- Creates backups before modification
- Validates YAML syntax
- Generates missing fields (id, tags, description)
- Creates detailed report of changes
- Supports dry-run mode for preview
"""

import os
import re
import yaml
import json
import shutil
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional, Tuple
import hashlib


class FrontMatterRefactor:
    def __init__(self, root_dir: str, dry_run: bool = False):
        self.root_dir = Path(root_dir)
        self.dry_run = dry_run
        self.report = {
            "timestamp": datetime.now().isoformat(),
            "total_files": 0,
            "modified_files": 0,
            "skipped_files": 0,
            "errors": [],
            "changes": []
        }
        
        # Tag mappings based on directory structure
        self.directory_tags = {
            "Frontend/React": ["frontend", "react", "javascript"],
            "Frontend/Vue": ["frontend", "vue", "javascript"],
            "Frontend/Styling": ["frontend", "css", "styling"],
            "Frontend/Tools": ["frontend", "tooling", "development"],
            "Frontend/jQuery": ["frontend", "jquery", "javascript"],
            "Frontend/Cases": ["frontend", "case-study"],
            "ai-bigdata/AI": ["ai", "machine-learning"],
            "ai-bigdata/BigData": ["big-data", "distributed-systems"],
            "background/Algorithm": ["algorithm", "data-structures", "computer-science"],
            "background/Database": ["database", "sql"],
            "background/Java/Concurrent-JVM": ["java", "concurrency", "jvm"],
            "background/Java/DesignPatterns": ["java", "design-patterns"],
            "background/Java/JavaBase": ["java", "fundamentals"],
            "background/Java/Spring": ["java", "spring", "framework"],
            "background/Java/Problems": ["java", "troubleshooting"],
            "background/Middleware": ["middleware", "infrastructure"],
            "background/Python": ["python", "scripting"],
            "devops/Docker": ["devops", "docker", "containerization"],
            "devops/Kubernetes": ["devops", "kubernetes", "orchestration"],
            "devops/Linux": ["devops", "linux", "shell"],
            "tools/Development": ["tools", "development"],
            "tools/NonDevelopment": ["tools", "productivity"],
            "misc/Books": ["books", "learning"],
            "misc/Links": ["resources", "links"],
            "misc/Others": ["miscellaneous"],
        }
    
    def generate_id(self, filepath: Path) -> str:
        """Generate kebab-case id from filename"""
        filename = filepath.stem
        # Convert to lowercase and replace spaces/underscores with hyphens
        id_value = re.sub(r'[_\s]+', '-', filename.lower())
        # Remove special characters except hyphens
        id_value = re.sub(r'[^a-z0-9-]', '', id_value)
        return id_value
    
    def infer_tags(self, filepath: Path, content: str) -> List[str]:
        """Infer tags based on directory structure and content"""
        # Get relative path from docs directory
        try:
            rel_path = filepath.relative_to(self.root_dir / "docs")
            path_parts = list(rel_path.parts[:-1])  # Exclude filename
        except ValueError:
            path_parts = []
        
        tags = set()
        
        # Add tags based on directory structure
        for dir_pattern, dir_tags in self.directory_tags.items():
            if any(part in str(rel_path) for part in dir_pattern.split("/")):
                tags.update(dir_tags[:3])  # Limit to 3 tags per pattern
                break
        
        # Ensure we have 2-5 tags
        if len(tags) < 2:
            # Add generic tags based on first directory
            if path_parts:
                tags.add(path_parts[0].lower())
        
        return sorted(list(tags))[:5]
    
    def generate_description(self, title: str, filepath: Path, content: str) -> str:
        """Generate meaningful description from title and content"""
        # Extract first paragraph or first few lines after title
        lines = content.split('\n')
        
        # Skip Front Matter and empty lines
        in_frontmatter = False
        first_paragraph = []
        
        for line in lines:
            if line.strip() == '---':
                in_frontmatter = not in_frontmatter
                continue
            if in_frontmatter:
                continue
            if line.strip() and not line.startswith('#'):
                first_paragraph.append(line.strip())
                if len(' '.join(first_paragraph)) > 100:
                    break
        
        if first_paragraph:
            desc = ' '.join(first_paragraph)[:150]
            # Clean up markdown syntax
            desc = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', desc)
            desc = re.sub(r'[*_`]', '', desc)
            return desc
        
        # Fallback: use title-based description
        return f"Documentation about {title.lower()}"
    
    def parse_mdx_file(self, filepath: Path) -> Tuple[Optional[Dict], str]:
        """Parse MDX file and extract Front Matter and body content"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Match Front Matter (between --- markers)
            fm_pattern = r'^---\s*\n(.*?)\n---\s*\n(.*)$'
            match = re.match(fm_pattern, content, re.DOTALL)
            
            if match:
                fm_yaml = match.group(1)
                body = match.group(2)
                
                try:
                    frontmatter = yaml.safe_load(fm_yaml) or {}
                except yaml.YAMLError as e:
                    self.report["errors"].append({
                        "file": str(filepath),
                        "error": f"YAML parsing error: {str(e)}"
                    })
                    return None, content
                
                return frontmatter, body
            else:
                # No Front Matter found
                return {}, content
        
        except Exception as e:
            self.report["errors"].append({
                "file": str(filepath),
                "error": f"File reading error: {str(e)}"
            })
            return None, ""
    
    def refactor_frontmatter(self, filepath: Path, frontmatter: Dict, body: str) -> Dict:
        """Apply refactoring rules to Front Matter"""
        new_fm = {}
        changes = []
        
        # 1. Generate/keep id
        if 'id' not in frontmatter or not frontmatter['id']:
            new_fm['id'] = self.generate_id(filepath)
            changes.append(f"Added id: {new_fm['id']}")
        else:
            new_fm['id'] = frontmatter['id']
        
        # 2. Keep or infer title
        if 'title' in frontmatter:
            new_fm['title'] = frontmatter['title']
        else:
            # Try to extract from first heading
            match = re.search(r'^#\s+(.+)$', body, re.MULTILINE)
            if match:
                new_fm['title'] = match.group(1)
                changes.append(f"Inferred title from heading: {new_fm['title']}")
            else:
                # Use filename as fallback
                new_fm['title'] = filepath.stem.replace('-', ' ').replace('_', ' ').title()
                changes.append(f"Generated title from filename: {new_fm['title']}")
        
        # 3. sidebar_label should match title (remove emoji)
        clean_title = re.sub(r'[^\w\s-]', '', new_fm['title']).strip()
        if frontmatter.get('sidebar_label') != clean_title:
            new_fm['sidebar_label'] = clean_title
            changes.append(f"Updated sidebar_label to match title (removed emoji)")
        else:
            new_fm['sidebar_label'] = clean_title
        
        # 4. sidebar_position - default to 10 unless already set with specific value
        new_fm['sidebar_position'] = frontmatter.get('sidebar_position', 10)
        
        # 5. description - keep or generate
        if 'description' in frontmatter and frontmatter['description']:
            new_fm['description'] = frontmatter['description']
        else:
            new_fm['description'] = self.generate_description(new_fm['title'], filepath, body)
            changes.append(f"Generated description")
        
        # 6. tags - infer from directory and content
        if 'tags' not in frontmatter or not frontmatter['tags']:
            new_fm['tags'] = self.infer_tags(filepath, body)
            changes.append(f"Inferred tags: {', '.join(new_fm['tags'])}")
        else:
            new_fm['tags'] = frontmatter['tags']
        
        # 7. last_update
        new_fm['last_update'] = {
            'date': '2026-01-25',
            'author': 'halcyon666'
        }
        if frontmatter.get('last_update') != new_fm['last_update']:
            changes.append(f"Updated last_update date and author")
        
        return new_fm, changes
    
    def write_mdx_file(self, filepath: Path, frontmatter: Dict, body: str) -> bool:
        """Write refactored Front Matter and body back to file"""
        try:
            # Create backup first
            if not self.dry_run:
                backup_path = filepath.with_suffix(filepath.suffix + '.bak')
                shutil.copy2(filepath, backup_path)
            
            # Serialize Front Matter to YAML
            fm_yaml = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True, sort_keys=False)
            
            # Construct new file content
            new_content = f"---\n{fm_yaml}---\n{body}"
            
            if not self.dry_run:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
            
            return True
        
        except Exception as e:
            self.report["errors"].append({
                "file": str(filepath),
                "error": f"File writing error: {str(e)}"
            })
            return False
    
    def process_file(self, filepath: Path) -> bool:
        """Process a single MDX file"""
        self.report["total_files"] += 1
        
        # Parse file
        frontmatter, body = self.parse_mdx_file(filepath)
        
        if frontmatter is None:
            self.report["skipped_files"] += 1
            return False
        
        # Refactor Front Matter
        new_frontmatter, changes = self.refactor_frontmatter(filepath, frontmatter, body)
        
        # Write back
        if changes:
            success = self.write_mdx_file(filepath, new_frontmatter, body)
            if success:
                self.report["modified_files"] += 1
                self.report["changes"].append({
                    "file": str(filepath.relative_to(self.root_dir)),
                    "changes": changes
                })
                return True
        else:
            self.report["skipped_files"] += 1
        
        return False
    
    def process_all_files(self):
        """Process all MDX files in the docs directory"""
        docs_dir = self.root_dir / "docs"
        mdx_files = list(docs_dir.rglob("*.mdx"))
        
        print(f"{'[DRY RUN] ' if self.dry_run else ''}Processing {len(mdx_files)} MDX files...")
        
        for filepath in mdx_files:
            print(f"  Processing: {filepath.relative_to(self.root_dir)}")
            self.process_file(filepath)
        
        # Generate report
        report_path = self.root_dir / "refactor_report.json"
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(self.report, f, indent=2, ensure_ascii=False)
        
        print(f"\n{'='*60}")
        print(f"Refactoring {'[DRY RUN] ' if self.dry_run else ''}Complete!")
        print(f"{'='*60}")
        print(f"Total files processed: {self.report['total_files']}")
        print(f"Files modified: {self.report['modified_files']}")
        print(f"Files skipped: {self.report['skipped_files']}")
        print(f"Errors: {len(self.report['errors'])}")
        print(f"\nDetailed report saved to: {report_path}")
        
        if self.report['errors']:
            print(f"\nErrors encountered:")
            for error in self.report['errors']:
                print(f"  - {error['file']}: {error['error']}")


if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Refactor MDX Front Matter")
    parser.add_argument("--root", default="d:\\summary", help="Root directory of the project")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without modifying files")
    
    args = parser.parse_args()
    
    refactor = FrontMatterRefactor(args.root, dry_run=args.dry_run)
    refactor.process_all_files()
