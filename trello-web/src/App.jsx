import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'

function ModeSelect() {
	const { mode, setMode } = useColorScheme()

	const handleChange = (event) => {
		const selectedMode = event.target.value
		setMode(selectedMode)
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
			<InputLabel id='label-dark-light-mode' label='Mode'>
				Mode
			</InputLabel>
			<Select
				labelId='label-dark-light-mode'
				id='select-dark-light-mode'
				value={mode ?? 'system'}
				label='Mode'
				onChange={handleChange}>
				<MenuItem value='light'>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LightModeIcon fontSize='small' />
						Light
					</Box>
				</MenuItem>
				<MenuItem value='dark'>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<DarkModeOutlinedIcon fontSize='small' />
						Dark
					</Box>
				</MenuItem>
				<MenuItem value='system'>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<SettingsBrightnessIcon fontSize='small' />
						System
					</Box>
				</MenuItem>
			</Select>
		</FormControl>
	)
}

function App() {
	return (
		<Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
			<Box
				sx={{
					width: '100%',
					height: (theme) => theme.trelloCustom.appBarHeight,
					backgroundColor: 'primary.light',
					display: 'flex',
					alignItems: 'center'
				}}>
				<ModeSelect />
			</Box>
			<Box
				sx={{
					width: '100%',
					height: (theme) => theme.trelloCustom.boardBarHeight,
					backgroundColor: 'primary.light',
					display: 'flex',
					alignItems: 'center'
				}}>
				Board Bar
			</Box>
			<Box
				sx={{
					width: '100%',
					height: (theme) =>
						`calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
					display: 'flex',
					backgroundColor: 'primary.main'
				}}>
				Board Content
			</Box>
		</Container>
	)
}

export default App
