# Batch rename all files to remove numeric prefixes
# This script renames files like "01-filename.mdx" to "filename.mdx"

$docs = "d:\summary\docs"

# Function to remove numeric prefix from filename
function Remove-NumericPrefix {
    param($path)
    
    $dir = Split-Path $path
    $filename = Split-Path $path -Leaf
    
    # Match pattern: starts with digits followed by hyphen
    if ($filename -match '^(\d+)[-\s]+(.+)$') {
        $newName = $matches[2]
        $newPath = Join-Path $dir $newName
        
        Write-Host "Renaming: $filename -> $newName"
        Rename-Item -Path $path -NewName $newName -ErrorAction SilentlyContinue
    }
}

# Get all .md and .mdx files recursively
Get-ChildItem -Path $docs -Recurse -Include *.md,*.mdx | ForEach-Object {
    Remove-NumericPrefix $_.FullName
}

Write-Host "`nRenaming complete!"
