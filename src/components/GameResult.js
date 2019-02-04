import React from 'react'
import { View, Text } from 'react-native'

const GameResult = ({ gameWinner, gameRunning, currentPlayer }) => (
	<View style={styles.winnerTextContainer}>
		<Text style={styles.winnerText}>
			{gameWinner
				? gameWinner
				: gameRunning && currentPlayer === 1
					? 'Player 1 Turn'
					: gameRunning && currentPlayer === -1
						? 'Player 2 turn'
						: ''}
		</Text>
	</View>
)

const styles = {
	winnerTextContainer: {
		marginBottom: 15,
		marginTop: 15
	},
	winnerText: {
		fontSize: 20
	}
}

export default GameResult
