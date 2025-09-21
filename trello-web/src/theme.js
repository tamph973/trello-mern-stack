import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
	trelloCustom: {
		appBarHeight: '58px',
		boardBarHeight: '60px'
	},
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: '#0079bf',
					light: '#0098d1',
					dark: '#005a8b'
				},
				secondary: {
					main: '#ff6b6b',
					light: '#ff8e8e',
					dark: '#e55555'
				}
			}
		},
		light: {
			palette: {
				primary: {
					main: '#0079bf',
					light: '#0098d1',
					dark: '#005a8b'
				},
				secondary: {
					main: '#ff6b6b',
					light: '#ff8e8e',
					dark: '#e55555'
				}
			}
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					'*::-webkit-scrollbar': {
						width: '8px',
						height: '8px'
					},

					'*::-webkit-scrollbar-thumb': {
						backgroundColor: '#bdc3c7',
						borderRadius: '8px'
					},
					'*::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#0097e6'
					}
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none'
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => {
					return {
						color: theme.palette.primary.main,
						fontSize: '0.875rem'
					}
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => {
					return {
						color: theme.palette.primary.main,
						fontSize: '0.875rem',
						'.MuiOutlinedInput-notchedOutline': {
							borderColor: theme.palette.primary.light
						},
						'&:hover': {
							'.MuiOutlinedInput-notchedOutline': {
								borderColor: theme.palette.primary.main
							}
						},
						'&.Mui-focused': {
							'.MuiOutlinedInput-notchedOutline': {
								borderWidth: '1.75px'
							}
						}
					}
				}
			}
		}
	}
})

export default theme
