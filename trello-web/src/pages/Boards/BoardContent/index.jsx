import Box from '@mui/material/Box'

const BoardContent = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: (theme) =>
					`calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
				display: 'flex',
				bgcolor: (theme) =>
					theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
			}}>
			Board Content
		</Box>
	)
}

export default BoardContent
