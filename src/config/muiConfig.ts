import { createTheme, ThemeOptions } from '@mui/material';

const sharedThemeOptions: ThemeOptions = {
  typography: {
    fontFamily:
      '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600
    },
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 }
  },
  shape: {
    borderRadius: 12
  },
  zIndex: { snackbar: 100000 }
};

export const lightTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#6366F1', // Modern Indigo
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#06B6D4', // Cyan
      light: '#22D3EE',
      dark: '#0891B2'
    },
    background: {
      default: '#F8FAFC', // Slate 50
      paper: '#FFFFFF',
      hover: '#F1F5F9',   // Slate 100
      lightSecondary: '#EEF2FF',
      darkSecondary: '#4F46E5'
    },
    text: {
      primary: '#0F172A', // Slate 900
      secondary: '#64748B' // Slate 500
    },
    divider: 'rgba(226, 232, 240, 0.8)'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)'
          }
        },
        contained: {
          color: '#ffffff',
          backgroundColor: '#6366F1',
          '&:hover': {
            backgroundColor: '#4F46E5'
          }
        },
        outlined: {
          borderColor: '#E2E8F0',
          '&:hover': {
            borderColor: '#6366F1',
            backgroundColor: '#EEF2FF'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 10px 25px -5px rgba(0,0,0,0.04)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 30px -5px rgba(99, 102, 241, 0.12)',
            borderColor: 'rgba(99, 102, 241, 0.3)'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#818CF8', // Bright Indigo for dark mode
      light: '#A5B4FC',
      dark: '#6366F1',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#22D3EE',
      light: '#67E8F9',
      dark: '#06B6D4'
    },
    background: {
      default: '#0B0F19', // Deep OLED/Slate Dark
      paper: '#111827',   // Dark Gray 900
      hover: '#1F2937',   // Dark Gray 800
      lightSecondary: '#1E1B4B',
      darkSecondary: '#312E81'
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8'
    },
    divider: 'rgba(31, 41, 55, 0.8)'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(129, 140, 248, 0.3)'
          }
        },
        contained: {
          color: '#ffffff',
          backgroundColor: '#6366F1',
          '&:hover': {
            backgroundColor: '#4F46E5'
          }
        },
        outlined: {
          borderColor: '#374151',
          '&:hover': {
            borderColor: '#818CF8',
            backgroundColor: 'rgba(129, 140, 248, 0.08)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 30px -5px rgba(129, 140, 248, 0.2)',
            borderColor: 'rgba(129, 140, 248, 0.4)'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12
        }
      }
    }
  }
});
