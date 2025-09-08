import { createTheme } from '@mui/material/styles'
import { red, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
	cssVariables: {
		colorSchemeSelector: 'class'
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
					main: teal[500]
				}
			}
		}
	}
})

export default theme
