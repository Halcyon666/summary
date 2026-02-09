# Translate Skill

## Description
Translate Chinese documentation to English and handle website internationalization (i18n) issues for Docusaurus sites.

## Capabilities
- Translate Chinese Markdown/MDX documents to English
- Handle Docusaurus i18n file structure
- Translate frontmatter metadata (title, sidebar_label, description)
- Fix encoding and character set issues
- Batch process multiple documents
- Maintain document structure and formatting
- Handle technical terminology correctly

## Usage

### Basic Translation
```
Use the translate skill to translate docs/path/to/file.mdx to English
```

### Batch Translation
```
Use the translate skill to translate all files in docs/background/Algorithm/ to English
```

### Fix i18n Issues
```
Use the translate skill to check and fix i18n issues in the English version
```

## Instructions

### 1. Document Translation Workflow

When translating a document:

1. **Read the source file**
   - Identify the file path (e.g., `docs/background/Algorithm/bubble-sort.mdx`)
   - Read the entire content including frontmatter and body

2. **Analyze the content**
   - Extract frontmatter fields: `title`, `sidebar_label`, `description`
   - Identify technical terms that should not be translated
   - Note code blocks, links, and special formatting

3. **Translate frontmatter**
   - Translate `title` to English (keep concise and clear)
   - Translate `sidebar_label` (usually same as title)
   - Translate `description` (keep it brief, 1-2 sentences)
   - Keep other fields unchanged: `id`, `tags`, `sidebar_position`, etc.

4. **Translate document body** (optional, based on user request)
   - Translate headings and paragraphs
   - Keep code blocks unchanged
   - Keep URLs and links unchanged
   - Preserve Markdown/MDX syntax
   - Keep technical terms in English or add Chinese in parentheses

5. **Create i18n file**
   - Target path: `i18n/en/docusaurus-plugin-content-docs/current/[relative-path]`
   - Example: `docs/background/Algorithm/bubble-sort.mdx` → `i18n/en/docusaurus-plugin-content-docs/current/background/Algorithm/bubble-sort.mdx`

6. **Verify the translation**
   - Check file is created in correct location
   - Verify frontmatter is valid YAML
   - Ensure no broken Markdown syntax

### 2. Translation Guidelines

#### Technical Terms
Keep these in English:
- Programming languages: Java, Python, JavaScript, etc.
- Frameworks: Spring, React, Vue, etc.
- Technical concepts: API, REST, HTTP, JSON, etc.
- Tools: Git, Docker, Kubernetes, etc.
- Algorithms: KMP, DFS, BFS, etc.

#### Common Translations
```
算法 → Algorithm
排序 → Sort
数据结构 → Data Structure
面试 → Interview
问题 → Problem/Issue
教程 → Tutorial
指南 → Guide
快速开始 → Quick Start
配置 → Configuration
部署 → Deployment
```

#### Title Translation Rules
- Keep it concise (2-5 words)
- Use title case (capitalize major words)
- Be descriptive and clear
- Example: "冒泡排序算法详解" → "Bubble Sort Algorithm"

### 3. Batch Translation

For batch translation:

1. **Find all files to translate**
   ```bash
   find docs/[directory] -name "*.mdx" -o -name "*.md"
   ```

2. **Check existing translations**
   ```bash
   find i18n/en/docusaurus-plugin-content-docs/current/[directory] -name "*.mdx" -o -name "*.md"
   ```

3. **Identify missing translations**
   - Compare source and target directories
   - List files that need translation

4. **Create translation script**
   - Use Node.js with `gray-matter` for frontmatter parsing
   - Process files in batch
   - Generate translation mapping

5. **Execute translation**
   - Run the script
   - Verify all files are created
   - Check for errors

### 4. Fix i18n Issues

When fixing i18n issues:

1. **Identify the problem**
   - Chinese text in English version
   - Missing translations
   - Incorrect file paths
   - Encoding issues

2. **Check common locations**
   - Sidebar labels: Check `_category_.json` files
   - Document titles: Check MDX frontmatter
   - Navigation: Check `docusaurus.config.ts`
   - Blog: Check `i18n/en/docusaurus-plugin-content-blog/`

3. **Verify file structure**
   ```
   i18n/
   └── en/
       ├── code.json
       ├── docusaurus-plugin-content-blog/
       │   ├── options.json
       │   └── [blog-posts].mdx
       ├── docusaurus-plugin-content-docs/
       │   ├── current.json
       │   └── current/
       │       ├── [category]/_category_.json
       │       └── [documents].mdx
       └── docusaurus-theme-classic/
           ├── footer.json
           └── navbar.json
   ```

4. **Run Docusaurus i18n commands**
   ```bash
   pnpm docusaurus write-translations --locale en
   ```

5. **Clear cache and rebuild**
   ```bash
   pnpm clear && pnpm build
   ```

6. **Verify the fix**
   - Check build output for Chinese characters
   - Inspect generated HTML files
   - Test in browser

### 5. Automated Translation Script Template

```javascript
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Translation mapping
const translations = {
  '冒泡排序': 'Bubble Sort',
  '快速排序': 'Quick Sort',
  // Add more translations...
};

function translateDocument(sourcePath, targetPath) {
  // Read source file
  const content = fs.readFileSync(sourcePath, 'utf8');
  const { data, content: body } = matter(content);
  
  // Translate frontmatter
  const translatedData = { ...data };
  if (data.title && translations[data.title]) {
    translatedData.title = translations[data.title];
  }
  if (data.sidebar_label && translations[data.sidebar_label]) {
    translatedData.sidebar_label = translations[data.sidebar_label];
  }
  
  // Generate new file
  const newContent = matter.stringify(body, translatedData);
  
  // Create target directory
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(targetPath, newContent, 'utf8');
  console.log(`✓ Translated: ${sourcePath} → ${targetPath}`);
}

// Usage
const docsDir = 'docs/background/Algorithm';
const i18nDir = 'i18n/en/docusaurus-plugin-content-docs/current/background/Algorithm';

// Process all files
fs.readdirSync(docsDir)
  .filter(file => file.endsWith('.mdx'))
  .forEach(file => {
    const sourcePath = path.join(docsDir, file);
    const targetPath = path.join(i18nDir, file);
    translateDocument(sourcePath, targetPath);
  });
```

### 6. Quality Checklist

Before completing translation:

- [ ] All frontmatter fields are translated
- [ ] File is in correct i18n directory
- [ ] YAML frontmatter is valid
- [ ] Markdown syntax is preserved
- [ ] Code blocks are unchanged
- [ ] Links and URLs are working
- [ ] Technical terms are handled correctly
- [ ] File encoding is UTF-8
- [ ] Build succeeds without errors
- [ ] English version displays correctly

### 7. Common Issues and Solutions

**Issue: Chinese text still appears in English version**
- Solution: Check if MDX file exists in i18n directory, not just JSON file

**Issue: Sidebar shows Chinese labels**
- Solution: Translate `sidebar_label` in frontmatter, not just `title`

**Issue: Build fails after translation**
- Solution: Check YAML frontmatter syntax, ensure proper indentation

**Issue: Links broken after translation**
- Solution: Keep `id` field unchanged, only translate display text

**Issue: Special characters cause encoding problems**
- Solution: Ensure all files are UTF-8 encoded, check for BOM

### 8. Testing Translation

After translation:

1. **Build the site**
   ```bash
   pnpm build
   ```

2. **Check for Chinese characters**
   ```bash
   grep -r "[\u4e00-\u9fa5]" build/en/ --include="*.html" | head -20
   ```

3. **Serve locally**
   ```bash
   pnpm serve
   ```

4. **Manual verification**
   - Navigate to English version (`/en/`)
   - Check sidebar labels
   - Check page titles
   - Check breadcrumbs
   - Check category pages

## Examples

### Example 1: Translate Single Document

**Input:**
```
Translate docs/background/Algorithm/bubble-sort.mdx to English
```

**Process:**
1. Read `docs/background/Algorithm/bubble-sort.mdx`
2. Extract frontmatter: `title: 冒泡排序`
3. Translate: `title: Bubble Sort`
4. Create `i18n/en/docusaurus-plugin-content-docs/current/background/Algorithm/bubble-sort.mdx`
5. Verify translation

### Example 2: Batch Translate Directory

**Input:**
```
Translate all algorithm documents to English
```

**Process:**
1. Find all files in `docs/background/Algorithm/`
2. Check existing translations in `i18n/en/.../Algorithm/`
3. Identify 13 missing translations
4. Create translation script with mapping
5. Execute batch translation
6. Verify all files created

### Example 3: Fix i18n Issue

**Input:**
```
Fix Chinese text appearing in English sidebar
```

**Process:**
1. Identify issue: MDX files missing in i18n directory
2. Check which files need translation
3. Create missing MDX files with translated frontmatter
4. Clear cache and rebuild
5. Verify sidebar shows English text

## Notes

- Always preserve the original document structure
- Keep code examples unchanged
- Maintain consistent terminology across translations
- Test thoroughly after batch translations
- Use automated scripts for large-scale translations
- Keep translation mapping for future reference

## Related Files

- `scripts/generate-i18n-mdx-translations.js` - Automated translation script
- `docusaurus.config.ts` - i18n configuration
- `i18n/en/` - English translation directory

## Dependencies

- `gray-matter` - Parse frontmatter
- `fs` - File system operations
- `path` - Path manipulation
