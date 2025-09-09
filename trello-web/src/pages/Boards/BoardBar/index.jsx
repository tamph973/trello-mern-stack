import Box from '@mui/material/Box'

const BoardBar = () => {
	return (
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
	)
}

export default BoardBar
