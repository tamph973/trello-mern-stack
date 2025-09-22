import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import TrelloIcon from '~/assets/trello.svg?react'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import Profiles from './Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const AppBar = () => {
	const [searchValue, setSearchValue] = useState('')
	return (
		<Box
			sx={{
				width: '100%',
				paddingX: 2,
				height: (theme) => theme.trelloCustom.appBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 2,
				overflowX: 'auto',
				bgcolor: (theme) =>
					theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
			}}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<AppsIcon sx={{ color: 'white' }} />
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
					<SvgIcon
						component={TrelloIcon}
						inheritViewBox
						sx={{ color: 'white' }}
					/>
					<Typography
						variant='span'
						sx={{
							color: 'white',
							fontWeight: 'bold',
							fontSize: '1.2rem'
						}}>
						Trello
					</Typography>
				</Box>
				<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
					<Workspaces />
					<Recent />
					<Starred />
					<Templates />
					<Button
						sx={{
							color: 'white',
							border: 'none',
							'&:hover': {
								border: 'none'
							}
						}}
						variant='outlined'
						startIcon={<LibraryAddIcon />}>
						Create
					</Button>
				</Box>
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon sx={{ color: 'white' }} />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position='end'>
								<CloseIcon
									fontSize='small'
									sx={{
										color: 'white',
										cursor: 'pointer',
										display: searchValue ? 'block' : 'none'
									}}
									onClick={() => setSearchValue('')}
								/>
							</InputAdornment>
						)
					}}
					sx={{
						minWidth: '120px',
						maxWidth: '180px',
						'& label': {
							color: 'white'
						},
						'& input': {
							color: 'white'
						},
						'& label.Mui-focused': {
							color: 'white'
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: 'white'
							},
							'&:hover fieldset': {
								borderColor: 'white'
							},
							'&.Mui-focused fieldset': {
								borderColor: 'white'
							}
						}
					}}
					id='outlined-search'
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					label='Search....'
					type='text'
					size='small'
				/>
				<ModeSelect />
				<Tooltip title='Notifications'>
					<Badge
						color='warning'
						variant='dot'
						sx={{ cursor: 'pointer' }}>
						<NotificationsNoneIcon sx={{ color: 'white' }} />
					</Badge>
				</Tooltip>
				<Tooltip title='Help' sx={{ cursor: 'pointer' }}>
					<HelpOutlineIcon sx={{ color: 'white' }} />
				</Tooltip>
				<Profiles />
			</Box>
		</Box>
	)
}

export default AppBar
