import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

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
					main: red[500]
				}
			}
		},
		light: {
			palette: {
				primary: {
					main: '#007AC0'
				}
			}
		}
	}
})

export default theme
