# Backplane - Professional Corporate Website

A completely rebuilt, production-ready static website featuring ultra-clean corporate design, dark theme, and professional enterprise-grade styling.

## 🚀 Quick Start

### Local Development
1. **Download the project files:**
   ```bash
   # All files are ready to use - no build process required
   - index.html          # Main HTML file
   - style.css           # Complete CSS stylesheet  
   - scripts.js          # Vanilla JavaScript enhancements
   - assets/logo.svg     # SVG logo
   - README.md          # This file
   ```

2. **Open in browser:**
   ```bash
   # Simply open index.html in any modern web browser
   open index.html
   # or
   python -m http.server 8000  # For local server
   # Then visit http://localhost:8000
   ```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)
1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Backplane website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/backplane-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root folder
   - Click Save

3. **Access your site:**
   ```
   https://YOUR_USERNAME.github.io/backplane-website
   ```

### Option 2: Netlify Drag & Drop
1. **Visit [netlify.com](https://netlify.com)**
2. **Drag and drop the entire project folder** onto the deployment area
3. **Get instant live URL** - No configuration needed!

### Option 3: Netlify Git Integration
1. **Connect your GitHub repository** to Netlify
2. **Build settings:**
   - Build command: (leave empty)
   - Publish directory: (leave empty)
3. **Deploy automatically** on every git push

### Option 4: Vercel
1. **Visit [vercel.com](https://vercel.com)**
2. **Import from GitHub** or drag & drop
3. **Deploy instantly** - Zero configuration

### Option 5: Traditional Web Hosting
1. **Upload all files** to your web hosting provider's public_html or www folder
2. **Access via your domain** - Files work on any standard web server

## 📁 Project Structure

```
backplane-website/
├── index.html          # Main HTML page
├── style.css           # Complete CSS stylesheet
├── scripts.js          # JavaScript enhancements
├── assets/
│   └── logo.svg        # SVG logo
├── README.md           # This documentation
└── todo.md             # Development checklist
```

## ✨ Features

### Design
- **Professional Corporate Style** - Ultra-clean, minimal design matching enterprise standards
- **Dark Theme** - Primary black (#000) with subtle white accents
- **Premium Typography** - Clear hierarchy with system font fallbacks
- **Responsive Design** - Mobile-first approach, works on all devices
- **SVG Logo** - Crisp, scalable vector graphics

### Technical
- **Pure Static** - No frameworks, build tools, or dependencies
- **Semantic HTML5** - Proper document structure and accessibility
- **Modern CSS** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - Subtle enhancements, mobile navigation, smooth scrolling
- **Performance Optimized** - Lightweight, fast loading
- **Accessibility Ready** - ARIA labels, keyboard navigation, screen reader friendly

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🛠 Customization

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray-800: #1a1a1a;
    /* ... more colors */
}
```

### Content
Edit the HTML content in `index.html`:
- Hero section title and description
- Solutions/features cards
- Contact information
- Footer links

### Styling
All styling is contained in `style.css`:
- Component-based CSS organization
- Mobile-responsive breakpoints
- Smooth animations with reduced-motion support
- Professional corporate aesthetic

## 📱 Mobile Support

The website is fully responsive with:
- **Mobile-first CSS** approach
- **Collapsible navigation** menu
- **Touch-friendly** button sizes (44px minimum)
- **Optimized typography** scaling
- **Grid layout** adaptation

## ♿ Accessibility

Built with accessibility in mind:
- **Semantic HTML5** elements
- **ARIA labels** and descriptions
- **Keyboard navigation** support
- **High contrast** dark theme
- **Screen reader** friendly
- **Focus indicators** for interactive elements
- **Reduced motion** respect

## 🎨 Performance

Optimized for speed:
- **Minimal dependencies** - No external libraries
- **Optimized images** - SVG graphics for scalability
- **Efficient CSS** - Modern properties, no bloat
- **Lazy loading** - Images load as needed
- **Smooth animations** - Hardware accelerated

## 🔧 JavaScript Features

Enhancements provided by `scripts.js`:
- **Mobile navigation** toggle
- **Smooth scrolling** for anchor links
- **Scroll animations** (respects reduced-motion)
- **Image lazy loading** support
- **Performance monitoring** (console warnings)
- **Error handling** for robust UX

## 📄 License

This project is provided as-is for educational and commercial use.

## 🤝 Contributing

Feel free to customize and improve:
1. Fork the repository
2. Make your changes
3. Test across different browsers
4. Submit improvements

## 📞 Support

For questions or issues:
- Check browser console for any JavaScript errors
- Ensure all files are in the same directory
- Verify file paths are correct
- Test in different browsers

---

**Built with modern web standards for professional enterprise use.**
