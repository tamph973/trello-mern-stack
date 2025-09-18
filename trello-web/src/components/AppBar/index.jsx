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

const AppBar = () => {
	return (
		<Box
			px={2}
			sx={{
				width: '100%',
				height: (theme) => theme.trelloCustom.appBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between'
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

				<Workspaces />
				<Recent />
				<Starred />
				<Templates />

				<Button variant='outlined'>Create</Button>
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<TextField
					id='outlined-search'
					label='Search....'
					type='search'
					size='small'
				/>
				<ModeSelect />
				<Tooltip title='Notifications'>
					<Badge
						color='primary'
						variant='dot'
						sx={{ cursor: 'pointer' }}>
						<NotificationsNoneIcon />
					</Badge>
				</Tooltip>
				<Tooltip title='Help' sx={{ cursor: 'pointer' }}>
					<HelpOutlineIcon />
				</Tooltip>
				<Profiles />
			</Box>
		</Box>
	)
}

export default AppBar
