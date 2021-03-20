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
        unlocked: '#00BFFF',
      },
      bronze: {
        locked: '#eed4bb',
        unlocked: '#cd7f32',
      },
      silver: {
        locked: '#eaeaea',
        unlocked: '#c0c0c0',
      },
      gold: {
        locked: '#fff2aa',
        unlocked: '#ffd700',
      },
      emerald: {
        locked: '#c5edd2',
        unlocked: '#50c878',
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
