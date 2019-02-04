import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'

class StartButton extends Component {
	// Renders button for Start game or restart game
	renderButton = () => {
		switch (this.props.gameRunning) {
			case true:
				return (
					<Button
						onPress={this.handleGameStart}
						title="Restart Game"
						color="#7ECA61"
					/>
				)
			case false:
				return (
					<Button
						onPress={this.props.gameInit}
						title="Start New Game"
						color="#7ECA61"
					/>
				)
			default:
				return <View />
		}
	}

	// User clicks Start game or Restart game
	handleGameStart = () => {
		if (this.props.gameRunning) {
			Alert.alert(
				'Tic-Tac-Toe',
				'Do you want to restart the game ?',
				[
					{
						text: 'Cancel',
						onPress: () => console.log('cancel'),
						style: 'cancel'
					},
					{ text: 'OK', onPress: () => this.props.gameInit() }
				],
				{ cancelable: true }
			)
		}
	}
	render() {
		return <View style={{ width: '90%' }}>{this.renderButton()}</View>
	}
}

const styles = {
	chooseIcon: {
		marginBottom: 15,
		marginTop: 15
	}
}

export default StartButton
