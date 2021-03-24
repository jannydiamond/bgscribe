const COLORS = {
  primary: {
    main: '#419a5f',
    light: '#7FC998',
    dark: '#2b673f',
  },
  secondary: {
    main: '#dd8e00',
    light: '#ffbf4d',
    dark: '#935f00',
  },
  danger: {
    main: '#ff674d',
    light: '#FFAEA0',
    dark: '#dd2000',
  },
  text: {
    main: '#b0b0b0',
    light: '#ffffff',
    dark: '#333333',
    hint: '#dadada',
    highlight: '#419a5f',
  },
  gray: {
    main: '#dadada',
    light: '#efefef',
    dark: '#999999',
  },
}

const mainTheme = {
  colors: COLORS,
  snackbar: {
    default: {
      bg: '#ffffff',
      color: COLORS.gray.main,
    },
    success: {
      bg: COLORS.primary.light,
      color: '#ffffff',
    },
    error: {
      bg: COLORS.danger.light,
      color: 'ffffff',
    },
  },
  achievement: {
    level: {
      regular: {
        locked: '#aaeaff',
        unlocked: '#00485A',
        lockedGradient:
          'linear-gradient(180deg, #21ABCD 0%, #0286A7 49%, #00485A 51%, #0286A7 100%)',
        unlockedGradient:
          'linear-gradient(180deg, #21ABCD 0%, #0286A7 49%, #00485A 51%, #0286A7 100%)',
      },
      bronze: {
        locked: '#eed4bb',
        unlocked: '#804000',
        lockedGradient:
          'linear-gradient(210deg, #CD7F32 0%, #A75B10 49%, #804000 51%, #A75B10 100%)',
        unlockedGradient:
          'linear-gradient(210deg, #CD7F32 0%, #A75B10 49%, #804000 51%, #A75B10 100%)',
      },
      silver: {
        locked: '#eaeaea',
        unlocked: '#70706F',
        lockedGradient:
          'linear-gradient(210deg, #C0C0C0 0%, #A1A2A3 49%, #70706F 51%, #A1A2A3 100%)',
        unlockedGradient:
          'linear-gradient(210deg, #C0C0C0 0%, #A1A2A3 49%, #70706F 51%, #A1A2A3 100%)',
      },
      gold: {
        locked: '#dc8',
        unlocked: '#a95',
        lockedGradient:
          'linear-gradient(210deg, #fea 0%, #dc8 49%, #a95 51%, #dc8 100%)',
        unlockedGradient:
          'linear-gradient(210deg, #fea 0%, #dc8 49%, #a95 51%, #dc8 100%)',
      },
      emerald: {
        locked: '#c5edd2',
        unlocked: '#1A4C39',
        lockedGradient:
          'linear-gradient(210deg, #50c878 0%, #319B72 49%, #1A4C39 51%, #319B72 100%)',
        unlockedGradient:
          'linear-gradient(210deg, #50c878 0%, #319B72 49%, #1A4C39 51%, #319B72 100%)',
      },
    },
  },
  button: {
    primary: {
      color: COLORS.text.light,
      background: COLORS.primary.main,
      borderColor: COLORS.primary.main,
      hover: {
        color: COLORS.text.light,
        background: COLORS.primary.dark,
        borderColor: COLORS.primary.dark,
      },
      disabled: {
        color: COLORS.gray.dark,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
    },
    secondary: {
      color: COLORS.text.light,
      background: COLORS.secondary.main,
      borderColor: COLORS.secondary.main,
      hover: {
        color: COLORS.text.light,
        background: COLORS.secondary.dark,
        borderColor: COLORS.secondary.dark,
      },
      disabled: {
        color: COLORS.gray.dark,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
    },
    danger: {
      color: COLORS.text.light,
      background: COLORS.danger.main,
      borderColor: COLORS.danger.main,
      hover: {
        color: COLORS.text.light,
        background: COLORS.danger.dark,
        borderColor: COLORS.danger.dark,
      },
      disabled: {
        color: COLORS.gray.dark,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
    },
    ghostPrimary: {
      color: COLORS.primary.main,
      background: 'transparent',
      borderColor: 'transparent',
      hover: {
        color: COLORS.primary.main,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
      disabled: {
        color: COLORS.gray.dark,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
    },
    ghostSecondary: {
      color: COLORS.secondary.main,
      background: 'transparent',
      borderColor: 'transparent',
      hover: {
        color: COLORS.secondary.main,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
      disabled: {
        color: COLORS.gray.dark,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
    },
    outlinePrimary: {
      color: COLORS.primary.main,
      background: 'transparent',
      borderColor: COLORS.primary.main,
      hover: {
        color: COLORS.text.light,
        background: COLORS.primary.main,
        borderColor: COLORS.primary.main,
      },
      disabled: {
        color: COLORS.gray.dark,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
    },
    outlineSecondary: {
      color: COLORS.secondary.main,
      background: 'transparent',
      borderColor: COLORS.secondary.main,
      hover: {
        color: COLORS.text.light,
        background: COLORS.secondary.main,
        borderColor: COLORS.secondary.main,
      },
      disabled: {
        color: COLORS.gray.dark,
        background: COLORS.gray.light,
        borderColor: COLORS.gray.light,
      },
    },
  },
}

export default mainTheme
