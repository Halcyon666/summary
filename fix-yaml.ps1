# Fix Front Matter YAML errors by quoting descriptions
$docs = "d:\summary\docs"

function Fix-FrontMatter {
    param($filePath)
    
    $content = Get-Content $filePath -Raw -Encoding UTF8
    if (!$content) { return $false }
    
    # Check if has front matter
    if ($content -notmatch '^---[\s\S]*?---') {
        return $false
    }
    
    # Extract front matter
    if ($content -match '^---([\s\S]*?)---(.*)') {
        $frontMatter = $matches[1]
        $body = $matches[2]
        
        # Fix description line - add quotes if not already quoted
        $frontMatter = $frontMatter -replace 'description:\s*([^"\n][^\n]*)', 'description: "$1"'
        
        # Fix title and sidebar_label too
        $frontMatter = $frontMatter -replace 'title:\s*([^"\n][^\n]*)', 'title: "$1"'
        $frontMatter = $frontMatter -replace 'sidebar_label:\s*([^"\n][^\n]*)', 'sidebar_label: "$1"'
        
        # Reconstruct file
        $newContent = "---" + $frontMatter + "---" + $body
        
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
        return $true
    }
    
    return $false
}

Write-Host "`nFixing Front Matter YAML errors...`n"

$files = Get-ChildItem -Path $docs -Recurse -Include *.md,*.mdx
$fixed = 0

foreach ($file in $files) {
    try {
        if (Fix-FrontMatter $file.FullName) {
            Write-Host "Fixed: $($file.Name)"
            $fixed++
        }
    }
    catch {
        Write-Host "Error: $($file.Name) - $_" -ForegroundColor Red
    }
}

Write-Host "`nFixed $fixed files.`n"
