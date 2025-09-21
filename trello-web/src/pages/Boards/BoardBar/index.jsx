import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_CHIP_STYLES = {
	color: 'primary.main',
	bgcolor: 'white',
	borderRadius: '4px',
	paddingX: '4px',
	'& .MuiSvgIcon-root': {
		color: 'primary.main'
	},
	'&:hover': {
		bgcolor: '#aae0ff'
	}
}

const BoardBar = () => {
	return (
		<Box
			sx={{
				width: '100%',
				paddingX: 2,
				height: (theme) => theme.trelloCustom.boardBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 2,
				overflowX: 'auto',
				borderTop: '1px solid #0079bf'
			}}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Chip
					sx={MENU_CHIP_STYLES}
					label='Trello MERN Board'
					icon={<DashboardIcon />}
					clickable
				/>
				<Chip
					sx={MENU_CHIP_STYLES}
					label='Pulic/Private Workspace'
					icon={<VpnLockIcon />}
					clickable
				/>
				<Chip
					sx={MENU_CHIP_STYLES}
					label='Add to Google Drive'
					icon={<AddToDriveIcon />}
					clickable
				/>
				<Chip
					sx={MENU_CHIP_STYLES}
					label='Automation'
					icon={<BoltIcon />}
					clickable
				/>
				<Chip
					sx={MENU_CHIP_STYLES}
					label='Filter'
					icon={<FilterListIcon />}
					clickable
				/>
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Button variant='outlined' startIcon={<PersonAddIcon />}>Invite</Button>
				<AvatarGroup
					max={5}
					sx={{ '& .MuiAvatar-root': { width: 34, height: 34 } }}>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/512/6858/6858504.png'
						/>
					</Tooltip>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png'
						/>
					</Tooltip>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/128/6997/6997662.png'
						/>
					</Tooltip>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
						/>
					</Tooltip>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/128/4140/4140048.png'
						/>
					</Tooltip>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/128/11498/11498793.png'
						/>
					</Tooltip>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/128/4140/4140039.png'
						/>
					</Tooltip>
					<Tooltip title='Tooltip'>
						<Avatar
							alt='Remy Sharp'
							src='https://cdn-icons-png.flaticon.com/128/4140/4140060.png'
						/>
					</Tooltip>
				</AvatarGroup>
			</Box>
		</Box>
	)
}

export default BoardBar
