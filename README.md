# 🎨 Juhi Kothari - AI/ML Portfolio Website

> A modern, responsive portfolio website showcasing AI/ML projects, skills, and experience with an elegant dark/light theme toggle.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 Overview

This portfolio website is designed to showcase my journey as an AI/ML Engineering student. Built with modern web technologies, it features a clean, professional design inspired by contemporary portfolio trends while maintaining accessibility and performance standards.

### Key Highlights

- **CGPA**: 9.28/10.00
- **5+ Projects** in AI/ML, Computer Vision, and IoT
- **5 Certifications** from Infosys Springboard
- **Interactive UI** with smooth animations and transitions

## ✨ Features

### Core Features

- 🎨 **Dark/Light Mode Toggle** - Smooth theme switching with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Fast loading times and smooth animations
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and semantic HTML
- 🎯 **SEO Friendly** - Optimized meta tags and structured data

### Interactive Elements

- 🌙 **Theme Persistence** - Remembers your preferred theme across sessions
- 📊 **Animated Stats Counter** - Numbers count up when scrolled into view
- 🎨 **Ripple Effects** - Material Design-inspired click animations
- 🔝 **Scroll to Top** - Smooth scroll button appears after scrolling
- 💫 **Scroll Animations** - Sections fade in as you scroll down
- 🖱️ **Smooth Scrolling** - Navigation links smoothly scroll to sections

### Sections

1. **Hero Section** - Eye-catching introduction with CTA
2. **About** - Professional summary with key statistics
3. **Education** - Timeline of academic achievements
4. **Projects** - Detailed project cards with technologies used
5. **Skills** - Categorized technical skills
6. **Certifications** - Professional certifications and awards
7. **Contact** - Interactive contact cards with hover effects

## 📁 Project Structure

```
juhi-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   └── script.js          # Theme toggle, animations, and interactions
├── images/
│   └── profile.jpeg       # Profile photo (add your own)
├── docs/
│   └── CONTRIBUTING.md    # Contribution guidelines (optional)
└── README.md              # Project documentation
```

### File Descriptions

| File | Purpose | Lines of Code |
|------|---------|---------------|
| `index.html` | Main structure and content | ~400 |
| `css/style.css` | Styling, animations, and responsive design | ~800 |
| `js/script.js` | Interactive features and theme toggle | ~250 |

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox for layouts
  - CSS Variables for theming
  - CSS Animations & Transitions
  - Media Queries for responsiveness
- **Vanilla JavaScript** - No frameworks, pure ES6+ features:
  - DOM Manipulation
  - Event Handling
  - LocalStorage API
  - Intersection Observer API

### Design Principles

- **Mobile-First** approach
- **BEM** methodology for CSS class naming
- **Accessibility** best practices
- **Performance** optimization

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML/CSS/JS

### Steps

1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/Juhikothari/portfolio.git
   cd portfolio
   ```

2. **Add Your Profile Image**:
   - Place your profile photo in `images/` folder
   - Name it `profile.jpeg` or update the path in `index.html`

3. **Open in Browser**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

4. **View the Website**:
   - Navigate to `http://localhost:8000`

## 💻 Usage

### For End Users

1. **Theme Toggle**: Click the sun/moon icon (top-right) to switch themes
2. **Navigation**: Click "View My Work" to jump to projects section
3. **Scroll to Top**: Click the ↑ button (bottom-right) when it appears
4. **Contact**: Click any contact card to open email/phone/social links

### For Developers

#### Customizing Content

**Update Personal Information** (`index.html`):
```html
<!-- Change name, title, and description -->
<h1>Your Name</h1>
<p class="subtitle">Your Title</p>
```

**Modify Colors** (`css/style.css`):
```css
:root {
    --primary-pink: #ff6b9d;      /* Change primary color */
    --primary-orange: #ff8a5b;    /* Change accent color */
    --dark-bg: #0a0a0f;           /* Change dark background */
}
```

**Add/Remove Sections**:
- Copy any `<section class="section">` block
- Update section number and content
- Animations will work automatically

## 🎨 Customization Guide

### Changing Theme Colors

Edit the CSS variables in `css/style.css`:

```css
/* Dark Mode Colors */
:root {
    --primary-pink: #your-color;
    --primary-orange: #your-color;
    --dark-bg: #your-color;
}

/* Light Mode Colors */
body.light-mode {
    --dark-bg: #your-color;
    --dark-card: #your-color;
}
```

### Adding New Projects

1. Copy a project card in `index.html`
2. Update the content:
   ```html
   <div class="project-card">
       <div class="project-icon">🚀</div>
       <h3>Your Project Name</h3>
       <p class="project-description">Description...</p>
   </div>
   ```

### Modifying Animations

Adjust timing and effects in `css/style.css`:

```css
.card:hover {
    transform: translateY(-8px);  /* Change hover lift */
    transition: all 0.3s ease;    /* Change duration */
}
```

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |

**Note**: Internet Explorer is not supported.

## ⚡ Performance

### Optimization Techniques

- ✅ Minimal external dependencies (zero libraries)
- ✅ Optimized CSS with no unused styles
- ✅ Lazy loading for animations
- ✅ Efficient JavaScript with event delegation
- ✅ LocalStorage for theme persistence
- ✅ CSS animations instead of JavaScript when possible

### Lighthouse Score Goals

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 100

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Juhi Kothari**

- 📧 Email: [juhikthr@gmail.com](mailto:juhikthr@gmail.com)
- 📱 Phone: +91 6363669794
- 🐙 GitHub: [@Juhikothari](https://github.com/Juhikothari)
- 💼 LinkedIn: [Juhi Kothari](https://www.linkedin.com/in/juhi-kothari-b92236261/)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

[View Live Demo](#) | [Report Bug](https://github.com/Juhikothari/portfolio/issues) | [Request Feature](https://github.com/Juhikothari/portfolio/issues)

</div>
