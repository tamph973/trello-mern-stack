import React from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'

const AppBar = () => {
	return (
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
	)
}

export default AppBar
