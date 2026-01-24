# Add Front Matter to all markdown files
# This script adds sidebar_label, sidebar_position, and description if missing

$docs = "d:\summary\docs"

# Function to generate emoji based on file path
function Get-Emoji {
    param($path)
    
    if ($path -match '\\Java\\') { return '☕' }
    elseif ($path -match '\\React\\') { return '⚛️' }
    elseif ($path -match '\\Vue\\') { return '🎭' }
    elseif ($path -match '\\Database\\') { return '🗄️' }
    elseif ($path -match '\\Docker\\') { return '🐳' }
    elseif ($path -match '\\Kubernetes\\') { return '☸️' }
    elseif ($path -match '\\Python\\') { return '🐍' }
    elseif ($path -match '\\Algorithm\\') { return '🧮' }
    elseif ($path -match '\\Middleware\\') { return '🔌' }
    elseif ($path -match '\\Hadoop\\') { return '🐘' }
    elseif ($path -match '\\Spring\\') { return '🌱' }
    elseif ($path -match '\\Linux\\') { return '🐧' }
    elseif ($path -match '\\CSS\\|\\Styling\\') { return '🎨' }
    elseif ($path -match '\\Tools\\') { return '🔧' }
    elseif ($path -match '\\Interview\\') { return '💼' }
    elseif ($path -match '\\Problems\\|problem') { return '🐛' }
    elseif ($path -match '\\Concurrent\\|\\JVM\\') { return '⚡' }
    elseif ($path -match '\\DesignPattern\\') { return '🎯' }
    else { return '📝' }
}

# Function to generate title from filename
function Get-Title {
    param($filename)
    
    # Remove extension
    $name = [System.IO.Path]::GetFileNameWithoutExtension($filename)
    
    # Convert kebab/snake case to Title Case
    $name = $name -replace '[-_]', ' '
    $name = (Get-Culture).TextInfo.ToTitleCase($name.ToLower())
    
    return $name
}

# Function to check if file has front matter
function Has-FrontMatter {
    param($content)
    
    return $content -match '^---\r?\n'
}

# Function to add or update front matter
function Add-FrontMatter {
    param($filePath)
    
    $content = Get-Content $filePath -Raw -Encoding UTF8
    $filename = Split-Path $filePath -Leaf
    $emoji = Get-Emoji $filePath
    $title = Get-Title $filename
    
    # Check if already has complete front matter
    if ($content -match '---[\s\S]*sidebar_label:[\s\S]*sidebar_position:[\s\S]*description:[\s\S]*---') {
        Write-Host "✓ Already complete: $filename" -ForegroundColor Green
        return
    }
    
    # Generate description (use first H1 or H2 if available, or generic)
    $description = "Documentation for $title"
    if ($content -match '##?\s+(.+)') {
        $firstHeading = $matches[1].Trim()
        if ($firstHeading.Length -lt 100) {
            $description = $firstHeading
        }
    }
    
    # Get position from directory listing (alphabetical)
    $dir = Split-Path $filePath
    $files = Get-ChildItem $dir -Filter *.md* | Sort-Object Name
    $position = [array]::IndexOf($files.Name, $filename) + 1
    
    $frontMatter = @"
---
title: $title
sidebar_label: $emoji $title
sidebar_position: $position
description: $description
---

"@
    
    # Remove existing front matter if present
    if ($content -match '^---\r?\n') {
        $content = $content -replace '^---[\s\S]*?---\r?\n', ''
    }
    
    # Add new front matter
    $newContent = $frontMatter + $content.TrimStart()
    
    Set-Content -Path $filePath -Value $newContent -Encoding UTF8 -NoNewline
    Write-Host "✅ Updated: $filename" -ForegroundColor Cyan
}

# Process all markdown files
Write-Host "`n🚀 Adding Front Matter to all files...`n" -ForegroundColor Yellow

$files = Get-ChildItem -Path $docs -Recurse -Include *.md,*.mdx
$total = $files.Count
$current = 0

foreach ($file in $files) {
    $current++
    Write-Progress -Activity "Processing files" -Status "$current of $total" -PercentComplete (($current / $total) * 100)
    
    try {
        Add-FrontMatter $file.FullName
    }
    catch {
        Write-Host "❌ Error processing $($file.Name): $_" -ForegroundColor Red
    }
}

Write-Host "`n✅ Front Matter added to all files!`n" -ForegroundColor Green
