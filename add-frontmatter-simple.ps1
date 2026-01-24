# Add Front Matter to all markdown files - Simple version
# This script adds sidebar_label, sidebar_position, and description if missing

$docs = "d:\summary\docs"

# Function to generate title from filename
function Get-Title {
    param($filename)
    
    $name = [System.IO.Path]::GetFileNameWithoutExtension($filename)
    $name = $name -replace '[-_]', ' '
    $textInfo = (Get-Culture).TextInfo
    return $textInfo.ToTitleCase($name.ToLower())
}

# Function to add or update front matter
function Add-FrontMatter {
    param($filePath)
    
    $content = Get-Content $filePath -Raw -Encoding UTF8
    if (!$content) { return }
    
    $filename = Split-Path $filePath -Leaf
    $title = Get-Title $filename
    
    # Check if already has sidebar_position
    if ($content -match 'sidebar_position:') {
        return $false
    }
    
    # Generate description from first heading
    $description = "Documentation for $title"
    if ($content -match '##?\s+(.+)') {
        $firstHeading = $matches[1].Trim()
        if ($firstHeading.Length -lt 100 -and $firstHeading.Length -gt 0) {
            $description = $firstHeading
        }
    }
    
    # Get position
    $dir = Split-Path $filePath
    $files = @(Get-ChildItem $dir -Filter *.md*) | Sort-Object Name
    $position = 1
    for ($i = 0; $i -lt $files.Count; $i++) {
        if ($files[$i].Name -eq $filename) {
            $position = $i + 1
            break
        }
    }
    
    $frontMatter = "---`ntitle: $title`nsidebar_label: $title`nsidebar_position: $position`ndescription: $description`n---`n`n"
    
    # Remove existing incomplete front matter
    if ($content -match '^---[\s\S]*?---\s*') {
        $content = $content -replace '^---[\s\S]*?---\s*', ''
    }
    
    # Add new front matter
    $newContent = $frontMatter + $content.TrimStart()
    
    [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
    return $true
}

# Process all markdown files
Write-Host "`nAdding Front Matter to all files...`n"

$files = Get-ChildItem -Path $docs -Recurse -Include *.md,*.mdx
$updated = 0

foreach ($file in $files) {
    try {
        $result = Add-FrontMatter $file.FullName
        if ($result) {
            Write-Host "Updated: $($file.Name)"
            $updated++
        }
    }
    catch {
        Write-Host "Error: $($file.Name) - $_"
    }
}

Write-Host "`nCompleted! Updated $updated files.`n"
