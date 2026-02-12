/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'system-ui', 'sans-serif'],
            },
            colors: {
                brand: {
                    accent: '#007BFF',
                    'accent-hover': '#0056b3',
                    success: '#10b981',
                    warning: '#f59e0b',
                    error: '#ef4444',
                },
                light: {
                    bg: '#ffffff',
                    surface: '#f8fafc',
                    card: '#ffffff',
                    primary: '#1e293b',
                    secondary: '#64748b',
                    muted: '#94a3b8',
                    border: '#e2e8f0',
                    'accent-bg': '#eff6ff',
                },
                dark: {
                    bg: '#0f172a',
                    surface: '#1e293b',
                    card: '#334155',
                    primary: '#f1f5f9',
                    secondary: '#cbd5e1',
                    muted: '#94a3b8',
                    border: '#475569',
                    'accent-bg': '#1e3a8a',
                }
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 123, 255, 0.3)',
                'glow-lg': '0 10px 40px rgba(0, 123, 255, 0.4)',
                'glow-xl': '0 20px 60px rgba(0, 123, 255, 0.5)',
                'inner-glow': 'inset 0 0 20px rgba(0, 123, 255, 0.2)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
            backdropBlur: {
                xs: '2px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-shine': 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'spin-slow': 'spin 8s linear infinite',
                'gradient': 'gradient 8s ease infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'slide-in-up': 'slideInUp 0.6s ease-out',
                'slide-in-down': 'slideInDown 0.6s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'rotate-in': 'rotateIn 0.8s ease-out',
                'blob': 'blob 7s infinite',
                'tilt': 'tilt 10s infinite linear',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': {
                        backgroundSize: '200% 200%',
                        backgroundPosition: 'left center',
                    },
                    '50%': {
                        backgroundSize: '200% 200%',
                        backgroundPosition: 'right center',
                    },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInDown: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.8)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                rotateIn: {
                    '0%': { transform: 'rotate(-180deg) scale(0.5)', opacity: '0' },
                    '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                tilt: {
                    '0%, 50%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(1deg)' },
                    '75%': { transform: 'rotate(-1deg)' },
                },
            },
        },
    },
    plugins: [],
}
