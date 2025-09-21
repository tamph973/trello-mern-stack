import React from 'react'
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

const AppBar = () => {
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
				overflowX: 'auto'
			}}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<AppsIcon sx={{ color: 'primary.main' }} />
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
					<SvgIcon
						component={TrelloIcon}
						inheritViewBox
						sx={{ color: 'primary.main' }}
					/>
					<Typography
						variant='span'
						sx={{
							color: 'primary.main',
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
					<Button variant='outlined' startIcon={<LibraryAddIcon />}>
						Create
					</Button>
				</Box>
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<TextField
					sx={{ minWidth: '120px' }}
					id='outlined-search'
					label='Search....'
					type='search'
					size='small'
				/>
				<ModeSelect />
				<Tooltip title='Notifications'>
					<Badge
						color='error'
						variant='dot'
						sx={{ cursor: 'pointer' }}>
						<NotificationsNoneIcon sx={{ color: 'primary.main' }} />
					</Badge>
				</Tooltip>
				<Tooltip title='Help' sx={{ cursor: 'pointer' }}>
					<HelpOutlineIcon sx={{ color: 'primary.main' }} />
				</Tooltip>
				<Profiles />
			</Box>
		</Box>
	)
}

export default AppBar
