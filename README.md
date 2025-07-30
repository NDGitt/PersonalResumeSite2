# Haas - Personal Resume Website

A creative, single-page personal resume website built with React, TypeScript, and Tailwind CSS. Features smooth scrolling, animations, and responsive design.

## 🌟 Features

- **Modern Design**: Creative and colorful theme with gradient backgrounds
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS-based animations with scroll-triggered effects
- **Interactive Navigation**: Fixed navigation with smooth scrolling to sections
- **Professional Sections**: 
  - Hero section with logo and introduction
  - About section with skills progress bars
  - Experience timeline with professional history
  - Education section with degrees and certifications
  - Contact form with social media links

## 🚀 Live Demo

Visit the live website: [https://yourusername.github.io/repository-name](https://yourusername.github.io/repository-name)

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express server (for development)
├── .github/workflows/     # GitHub Actions for deployment
└── README.md
```

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Build Tool**: Vite
- **Animations**: CSS animations with Intersection Observer
- **Deployment**: GitHub Pages

## 📦 Installation & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## 🚀 Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Method 1: Automatic Deployment (Recommended)

1. **Create a new repository on GitHub**
2. **Push your code to the repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal resume website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically build and deploy your site

### Method 2: Manual Build and Deploy

1. **Build the static site:**
   ```bash
   npx vite build
   ```

2. **The built files will be in `dist/public/`**
3. **Upload the contents of `dist/public/` to your GitHub Pages repository**

## 🎨 Customization

To customize the website for your own use:

1. **Update Personal Information:**
   - Edit `client/src/pages/home.tsx`
   - Replace the experiences, education, and skills arrays with your own data
   - Update contact information and social media links

2. **Replace Logo:**
   - Add your logo to `attached_assets/`
   - Update the import path in `home.tsx`

3. **Modify Colors:**
   - Edit `client/src/index.css`
   - Adjust the CSS custom properties in the `:root` section

4. **Update Content:**
   - Modify the hero section text
   - Update the about section description
   - Replace experience and education details

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own resume website!

## 📞 Contact

- **Email**: haas[at]creative-pro.com
- **Website**: www.haas-portfolio.com
- **Location**: San Francisco, CA

---

**Built with ❤️ using React and Tailwind CSS**