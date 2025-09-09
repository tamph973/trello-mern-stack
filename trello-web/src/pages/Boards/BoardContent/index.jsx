import Box from '@mui/material/Box'

const BoardContent = () => {
	return (
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
	)
}

export default BoardContent
