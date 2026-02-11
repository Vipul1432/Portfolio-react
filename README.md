# Vipul Kumar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth scrolling navigation, dark/light theme toggle, and an AI-powered chatbot using Google's Gemini API.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, Vite, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Navigation**: Scroll-based navigation with active section highlighting
- **AI Chatbot**: Integrated Gemini AI chatbot for portfolio assistance
- **Typing Animation**: Dynamic typing effect for role titles
- **Premium UI/UX**: Beautiful animations and transitions
- **Component-Based**: Modular and maintainable code structure

## 📋 Sections

- **Home**: Introduction with typing animation and social links
- **About**: Personal information, stats, and core competencies
- **Skills**: Categorized technical skills with proficiency levels
- **Experience**: Work history with detailed responsibilities
- **Education**: Academic background and achievements
- **Projects**: Showcase of personal and professional projects
- **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: Google Generative AI (Gemini)
- **Routing**: React Router DOM

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vipul1432/Portfolio.git
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

   Add your Gemini API key to `.env`:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

   Get your API key from: [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── assets/
│       ├── images/
│       └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── hooks/
│   │   ├── useScrollSnap.js
│   │   ├── useTheme.js
│   │   └── useTypingEffect.js
│   ├── services/
│   │   └── geminiService.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal information
- Skills and proficiency levels
- Work experience
- Education history
- Projects
- Social media links

### Change Theme Colors

Modify `tailwind.config.js` to customize:
- Brand colors
- Light/dark mode colors
- Animations
- Shadows

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections from the navigation.

## 🤖 AI Chatbot Configuration

The chatbot uses Google's Gemini API. To enable it:

1. Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add the key to your `.env` file:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. The chatbot will automatically initialize when the app loads

**Note**: Keep your API key secure and never commit it to version control.

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Add environment variables in Netlify dashboard

### Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vipul Kumar**

- GitHub: [@Vipul1432](https://github.com/Vipul1432)
- LinkedIn: [vipul-kumar-tech](https://linkedin.com/in/vipul-kumar-tech)
- Email: vipulupadhyay563@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- AI powered by [Google Gemini](https://ai.google.dev/)

---

Made with ❤️ by Vipul Kumar
