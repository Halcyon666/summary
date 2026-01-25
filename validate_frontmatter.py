#!/usr/bin/env python3
"""
MDX Front Matter Validation Script

Validates that all MDX files have correct Front Matter structure
according to .rules1 requirements.
"""

import yaml
import re
from pathlib import Path
from typing import Dict, List, Tuple
from datetime import datetime


class FrontMatterValidator:
    def __init__(self, root_dir: str):
        self.root_dir = Path(root_dir)
        self.required_fields = ['id', 'title', 'sidebar_label', 'sidebar_position', 'description', 'tags', 'last_update']
        self.errors = []
        self.warnings = []
        self.total_files = 0
        self.valid_files = 0
    
    def validate_file(self, filepath: Path) -> Tuple[bool, List[str], List[str]]:
        """Validate a single MDX file's Front Matter"""
        file_errors = []
        file_warnings = []
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract Front Matter
            fm_pattern = r'^---\s*\n(.*?)\n---\s*\n'
            match = re.match(fm_pattern, content, re.DOTALL)
            
            if not match:
                file_errors.append("No Front Matter found")
                return False, file_errors, file_warnings
            
            fm_yaml = match.group(1)
            
            try:
                frontmatter = yaml.safe_load(fm_yaml)
            except yaml.YAMLError as e:
                file_errors.append(f"Invalid YAML syntax: {str(e)}")
                return False, file_errors, file_warnings
            
            if not isinstance(frontmatter, dict):
                file_errors.append("Front Matter is not a valid dictionary")
                return False, file_errors, file_warnings
            
            # Check required fields
            for field in self.required_fields:
                if field not in frontmatter:
                    file_errors.append(f"Missing required field: {field}")
                elif not frontmatter[field]:
                    file_errors.append(f"Empty required field: {field}")
            
            # Validate specific fields
            if 'id' in frontmatter:
                # Check kebab-case format
                if not re.match(r'^[a-z0-9-]+$', str(frontmatter['id'])):
                    file_warnings.append(f"id should be in kebab-case: {frontmatter['id']}")
            
            if 'sidebar_label' in frontmatter and 'title' in frontmatter:
                # Check for emoji in sidebar_label
                if re.search(r'[^\w\s-]', frontmatter['sidebar_label']):
                    file_warnings.append("sidebar_label contains special characters/emoji")
            
            if 'tags' in frontmatter:
                if not isinstance(frontmatter['tags'], list):
                    file_errors.append("tags should be a list")
                elif len(frontmatter['tags']) < 2 or len(frontmatter['tags']) > 5:
                    file_warnings.append(f"tags should have 2-5 items, found {len(frontmatter['tags'])}")
            
            if 'last_update' in frontmatter:
                if not isinstance(frontmatter['last_update'], dict):
                    file_errors.append("last_update should be a dictionary")
                else:
                    if 'date' not in frontmatter['last_update']:
                        file_errors.append("last_update missing 'date' field")
                    else:
                        # Validate date format
                        date_str = str(frontmatter['last_update']['date'])
                        if not re.match(r'^\d{4}-\d{2}-\d{2}$', date_str):
                            file_errors.append(f"last_update.date should be YYYY-MM-DD format: {date_str}")
                    
                    if 'author' not in frontmatter['last_update']:
                        file_errors.append("last_update missing 'author' field")
                    elif frontmatter['last_update']['author'] != 'halcyon666':
                        file_warnings.append(f"last_update.author should be 'halcyon666', found: {frontmatter['last_update']['author']}")
            
            return len(file_errors) == 0, file_errors, file_warnings
        
        except Exception as e:
            file_errors.append(f"Error reading file: {str(e)}")
            return False, file_errors, file_warnings
    
    def validate_all_files(self) -> bool:
        """Validate all MDX files"""
        docs_dir = self.root_dir / "docs"
        mdx_files = list(docs_dir.rglob("*.mdx"))
        
        print(f"Validating {len(mdx_files)} MDX files...\n")
        
        for filepath in mdx_files:
            self.total_files += 1
            is_valid, file_errors, file_warnings = self.validate_file(filepath)
            
            rel_path = str(filepath.relative_to(self.root_dir))
            
            if is_valid:
                self.valid_files += 1
                if file_warnings:
                    print(f"⚠️  {rel_path}")
                    for warning in file_warnings:
                        print(f"    WARNING: {warning}")
                    self.warnings.append({"file": rel_path, "warnings": file_warnings})
            else:
                print(f"❌ {rel_path}")
                for error in file_errors:
                    print(f"    ERROR: {error}")
                for warning in file_warnings:
                    print(f"    WARNING: {warning}")
                self.errors.append({"file": rel_path, "errors": file_errors, "warnings": file_warnings})
        
        print(f"\n{'='*60}")
        print(f"Validation Complete")
        print(f"{'='*60}")
        print(f"Total files: {self.total_files}")
        print(f"Valid files: {self.valid_files}")
        print(f"Files with errors: {len(self.errors)}")
        print(f"Files with warnings: {len(self.warnings)}")
        
        return len(self.errors) == 0


if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Validate MDX Front Matter")
    parser.add_argument("--root", default="d:\\summary", help="Root directory of the project")
    
    args = parser.parse_args()
    
    validator = FrontMatterValidator(args.root)
    success = validator.validate_all_files()
    
    exit(0 if success else 1)
