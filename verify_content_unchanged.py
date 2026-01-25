#!/usr/bin/env python3
"""
Content Integrity Verification Script

Verifies that document body content was not modified during Front Matter refactoring.
Compares MD5 hashes of content excluding Front Matter.
"""

import re
import hashlib
from pathlib import Path
from typing import Dict


class ContentVerifier:
    def __init__(self, root_dir: str):
        self.root_dir = Path(root_dir)
        self.mismatches = []
    
    def get_body_content(self, filepath: Path) -> str:
        """Extract body content (excluding Front Matter) from MDX file"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove Front Matter
            fm_pattern = r'^---\s*\n.*?\n---\s*\n'
            body = re.sub(fm_pattern, '', content, count=1, flags=re.DOTALL)
            
            return body
        except Exception as e:
            return ""
    
    def compute_hash(self, content: str) -> str:
        """Compute MD5 hash of content"""
        return hashlib.md5(content.encode('utf-8')).hexdigest()
    
    def verify_backups(self) -> bool:
        """Verify that body content matches between .bak and .mdx files"""
        docs_dir = self.root_dir / "docs"
        backup_files = list(docs_dir.rglob("*.mdx.bak"))
        
        if not backup_files:
            print("No backup files found. Skipping content integrity check.")
            return True
        
        print(f"Verifying content integrity for {len(backup_files)} files...\n")
        
        for backup_path in backup_files:
            original_path = backup_path.with_suffix('')  # Remove .bak extension
            
            if not original_path.exists():
                continue
            
            # Get body content from both files
            backup_body = self.get_body_content(backup_path)
            current_body = self.get_body_content(original_path)
            
            # Compare hashes
            backup_hash = self.compute_hash(backup_body)
            current_hash = self.compute_hash(current_body)
            
            if backup_hash != current_hash:
                rel_path = str(original_path.relative_to(self.root_dir))
                print(f"❌ Content mismatch: {rel_path}")
                self.mismatches.append(rel_path)
        
        print(f"\n{'='*60}")
        print(f"Content Integrity Verification Complete")
        print(f"{'='*60}")
        print(f"Files verified: {len(backup_files)}")
        print(f"Content mismatches: {len(self.mismatches)}")
        
        if self.mismatches:
            print(f"\nFiles with content changes:")
            for filepath in self.mismatches:
                print(f"  - {filepath}")
        
        return len(self.mismatches) == 0


if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Verify content integrity after refactoring")
    parser.add_argument("--root", default="d:\\summary", help="Root directory of the project")
    
    args = parser.parse_args()
    
    verifier = ContentVerifier(args.root)
    success = verifier.verify_backups()
    
    exit(0 if success else 1)
