import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

const Profiles = () => {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<>
			<Tooltip title='Account settings'>
				<IconButton
					onClick={handleClick}
					size='small'
					sx={{ padding: 0 }}
					aria-controls={open ? 'basic-menu-profiles' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}>
					<Avatar
						src='https://cdn-icons-png.flaticon.com/512/6858/6858504.png'
						alt='avatar'
						sx={{ width: 30, height: 30 }}
					/>
				</IconButton>
			</Tooltip>
			<Menu
				id='basic-menu-profiles'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					list: {
						'aria-labelledby': 'basic-button-profiles'
					}
				}}>
				<MenuItem onClick={handleClose}>
					<Avatar sx={{ width: 20, height: 20, mr: 2 }} />
					Profile
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Avatar sx={{ width: 20, height: 20, mr: 2 }} /> My account
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<PersonAdd fontSize='small' />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize='small' />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	)
}

export default Profiles
