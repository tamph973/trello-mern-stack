import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

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
	const { mode, setMode } = useColorScheme()
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

	console.log('prefersDarkMode :>> ', prefersDarkMode)
	console.log('prefersLightMode :>> ', prefersLightMode)

	return (
		<>
			<hr />
			<ModeSelect />
			<hr />
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: 'background.default',
					color: 'text.primary',
					borderRadius: 1,
					p: 3,
					minHeight: '56px'
				}}>
				<FormControl>
					<FormLabel id='demo-theme-toggle'>Theme</FormLabel>
					<RadioGroup
						aria-labelledby='demo-theme-toggle'
						name='theme-toggle'
						row
						value={mode ?? ''}
						onChange={(event) => setMode(event.target.value)}>
						<FormControlLabel
							value='system'
							control={<Radio />}
							label='System'
						/>
						<FormControlLabel
							value='light'
							control={<Radio />}
							label='Light'
						/>
						<FormControlLabel
							value='dark'
							control={<Radio />}
							label='Dark'
						/>
					</RadioGroup>
				</FormControl>
			</Box>
			<hr />
			<div>Pham Minh Tam</div>

			<Typography variant='body2' color='text.secondary'>
				Hello World
			</Typography>

			<Button variant='text'>Text</Button>
			<Button variant='contained'>Contained</Button>
			<Button variant='outlined'>Outlined</Button>
			<AccessAlarmIcon />
			<ThreeDRotation />

			<HomeIcon />
			<HomeIcon color='primary' />
			<HomeIcon color='secondary' />
			<HomeIcon color='success' />
			<HomeIcon color='action' />
			<HomeIcon color='disabled' />
			<HomeIcon sx={{ color: pink[500] }} />
		</>
	)
}

export default App
