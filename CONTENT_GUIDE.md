# DroneFocal Content Management Guide

## 📁 File Structure

```
src/content/
├── reviews/           # Drone review articles
├── tutorials/         # Tutorial articles
├── guides/           # Buying guide articles
├── news/             # News articles
└── templates/        # Article templates
```

## 📝 Adding New Articles

### 1. Create Article File
- Navigate to the appropriate category folder
- Create a new `.md` file with the slug as filename
- Example: `dji-mavic-3-pro-review.md`

### 2. Use Template
- Copy from `templates/review-template.md`
- Fill in all required frontmatter fields
- Write content using Markdown syntax

### 3. Required Frontmatter Fields

#### For Reviews:
```yaml
---
title: "Article Title"
slug: "article-slug"
excerpt: "Brief description"
image: "image-url"
rating: 4.5
price: "$999"
category: "Professional"
brand: "DJI"
date: "2024-01-15"
readTime: "10 min read"
pros: ["advantage1", "advantage2"]
cons: ["disadvantage1", "disadvantage2"]
tags: ["tag1", "tag2"]
author: "DroneFocal Team"
featured: false
---
```

#### For Other Articles:
```yaml
---
title: "Article Title"
slug: "article-slug"
excerpt: "Brief description"
image: "image-url"
date: "2024-01-15"
readTime: "10 min read"
category: "Tutorial"
tags: ["tag1", "tag2"]
author: "DroneFocal Team"
featured: false
---
```

## 🎨 Content Guidelines

### Writing Style
- **Professional but accessible**: Write for both beginners and experts
- **SEO-friendly**: Use relevant keywords naturally
- **Structured**: Use clear headings and sections
- **Engaging**: Include personal insights and experiences

### Article Structure
1. **Introduction**: Hook the reader
2. **Main Content**: Detailed analysis
3. **Pros and Cons**: Clear comparison
4. **Conclusion**: Summary and recommendation

### Image Guidelines
- **High quality**: Use high-resolution images
- **Relevant**: Images should relate to content
- **Optimized**: Use WebP format when possible
- **Alt text**: Always include descriptive alt text

## 🔧 Technical Details

### Slug Generation
- Use lowercase letters and hyphens
- No spaces or special characters
- Example: `dji-mavic-3-pro-review`

### Date Format
- Always use YYYY-MM-DD format
- Example: `2024-01-15`

### Tags
- Use lowercase, hyphenated tags
- Be consistent with existing tags
- Examples: `professional`, `dji`, `camera`, `beginner`

### Categories
- **Reviews**: `Professional`, `Beginner`, `Consumer`
- **Tutorials**: `Photography`, `Videography`, `Flying`, `Editing`
- **Guides**: `Buying`, `Comparison`, `Accessories`
- **News**: `Industry`, `Technology`, `Regulations`

## 📊 SEO Optimization

### Title Tags
- Include target keywords
- Keep under 60 characters
- Be descriptive and compelling

### Meta Descriptions
- Write compelling descriptions
- Include call-to-action
- Keep under 160 characters

### Headings
- Use H1 for main title
- Use H2 for major sections
- Use H3 for subsections
- Include keywords naturally

### Internal Linking
- Link to related articles
- Use descriptive anchor text
- Link to relevant pages

## 🚀 Publishing Process

1. **Write Article**: Create content in Markdown
2. **Review Content**: Check for accuracy and style
3. **Test Locally**: Verify on development server
4. **Deploy**: Push to production
5. **Monitor**: Track performance and engagement

## 📈 Performance Tracking

### Key Metrics
- **Page Views**: Track article popularity
- **Time on Page**: Measure engagement
- **Bounce Rate**: Assess content quality
- **Conversion Rate**: Track goal completions

### Analytics Setup
- Google Analytics integration
- Search Console monitoring
- Social media tracking
- User feedback collection

## 🔄 Content Updates

### Regular Maintenance
- Update outdated information
- Refresh images and links
- Add new insights and data
- Improve SEO performance

### Version Control
- Use Git for content versioning
- Track changes and updates
- Maintain content history
- Collaborate effectively

## 📞 Support

For questions about content management:
- Check this guide first
- Review existing articles for examples
- Contact the development team
- Use the issue tracker for bugs

---

**Last Updated**: January 2024
**Version**: 1.0
