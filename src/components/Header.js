import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>Tic-Tac-Toe</Text>
		</View>
	)
}

styles = {
	header: {
		width: '100%',
		backgroundColor: '#7ECA61',
		elevation: 2
	},
	headerText: {
		fontSize: 25,
		color: '#ffffff',
		padding: 10
	}
}
export default Header
