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
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
