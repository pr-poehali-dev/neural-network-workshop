import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
						opacity: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
						opacity: '1'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
						opacity: '1'
					},
					to: {
						height: '0',
						opacity: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(255, 106, 0, 0.5)' },
					'50%': { boxShadow: '0 0 40px rgba(255, 106, 0, 0.8)' }
				},
				'arrow-down': {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'50%': { transform: 'translateY(20px)', opacity: '0.5' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'skull-appear': {
					'0%': { opacity: '0', transform: 'scale(0) rotate(-180deg)' },
					'50%': { opacity: '1', transform: 'scale(1.2) rotate(0deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
				},
				'slide-up-fade': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 153, 0.3), 0 0 40px rgba(0, 255, 153, 0.1)' },
					'50%': { boxShadow: '0 0 30px rgba(0, 255, 153, 0.5), 0 0 60px rgba(0, 255, 153, 0.2)' }
				},
				'logo-bounce': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'arrow-down': 'arrow-down 2s ease-in-out infinite',
				'skull-appear': 'skull-appear 0.8s ease-out forwards',
				'slide-up-fade': 'slide-up-fade 0.8s ease-out forwards',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'logo-bounce': 'logo-bounce 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;