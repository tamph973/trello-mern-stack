import { createTheme } from '@mui/material/styles'
import { red, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
	trelloCustom: {
		'appBarHeight': '48px',
		'boardBarHeight': '58px'
	},
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: red[500]
				}
			}
		},
		light: {
			palette: {
				primary: {
					main: teal.A400
				}
			}
		}
	}
})

export default theme
