import React, { Component } from 'react'
import { View, Text, Alert, Button, Image } from 'react-native'

import Header from './components/Header'
import Board from './components/Board'
import IconPicker from './components/IconPicker'

class Game extends Component {
	state = {
		gameState: [[2, 2, 2], [2, 2, 2], [2, 2, 2]],
		gameRunning: false,
		currentPlayer: 1,
		playerImagePicked: 'StandardX',
		player1Image: require('./img/playerX.png'),
		player2Image: require('./img/playerO.png'),
		gameWinner: null
	}

	//********************** Game initialization **********************
	gameInit = () => {
		this.setState({
			gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
			gameRunning: true,
			currentPlayer: 1,
			gameWinner: ''
		})
	}

	// Renders button for Start game or restart game
	renderButton = () => {
		switch (this.state.gameRunning) {
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
						onPress={this.gameInit}
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
		if (this.state.gameRunning) {
			Alert.alert(
				'Tic-Tac-Toe',
				'Do you want to restart the game ?',
				[
					{
						text: 'Cancel',
						onPress: () => console.log('cancel'),
						style: 'cancel'
					},
					{ text: 'OK', onPress: () => this.gameInit() }
				],
				{ cancelable: true }
			)
		}
	}

	//renders icon to corresponding player
	renderIcon = (row, col) => {
		let val = this.state.gameState[row][col]
		switch (val) {
			case 1:
				return (
					<Image
						source={this.state.player1Image}
						style={{
							flex: 1,
							alignSelf: 'stretch',
							width: undefined,
							height: undefined
						}}
						resizeMode="cover"
					/>
				)
			case -1:
				return (
					<Image
						source={this.state.player2Image}
						style={{
							flex: 1,
							alignSelf: 'stretch',
							width: undefined,
							height: undefined
						}}
						resizeMode="cover"
					/>
				)
			case 2:
				return <Text />
			default:
				return <View />
		}
	}

	// handles Player Move.. when player clicks on a tile
	onUserSelect = (row, col) => {
		let v = this.state.gameState[row][col]
		if (v !== 0) {
			return
		}
		let currentPlayer = this.state.currentPlayer
		if (this.state.gameRunning) {
			// Set the correct tile
			let arr = this.state.gameState
			arr[row][col] = currentPlayer
			this.setState({ gameState: arr })

			//switch to the other player
			let nextPlayer = currentPlayer == 1 ? -1 : 1
			this.setState({ currentPlayer: nextPlayer })

			// Checking if theres a winner and if the game is filled up
			let winner = this.getWinner()
			let gamePush = this.checkGamePush()

			if (winner == 1) {
				this.setState({
					gameWinner: 'Player 1 is the Winner !',
					gameRunning: false
				})
			} else if (winner == -1) {
				this.setState({
					gameWinner: 'Player 2 is the Winner !',
					gameRunning: false
				})
			} else if (gamePush) {
				this.setState({ gameWinner: 'Tie Game', gameRunning: false })
			}
		}
	}

	//**********************Handles User selecting game icon from dropdown **********************
	handlePickerChange = item => {
		switch (item) {
			case 'StandardX':
				this.setState({
					player1Image: require('./img/playerX.png'),
					player2Image: require('./img/playerO.png'),
					playerImagePicked: item
				})
				break
			case 'Cat':
				this.setState({
					player1Image: require('./img/meanCat.jpg'),
					player2Image: require('./img/sillyBird.jpg'),
					playerImagePicked: item
				})
				break
			case 'Dog':
				this.setState({
					player1Image: require('./img/meanDog.jpg'),
					player2Image: require('./img/sillyCat.jpg'),
					playerImagePicked: item
				})
				break
			case 'Lion':
				this.setState({
					player1Image: require('./img/lion.jpg'),
					player2Image: require('./img/hyena.jpg'),
					playerImagePicked: item
				})
				break
			case 'HoneyBadger':
				this.setState({
					player1Image: require('./img/honeybadger.jpg'),
					player2Image: require('./img/snake.jpg'),
					playerImagePicked: item
				})
				break
			case 'Ferrari':
				this.setState({
					player1Image: require('./img/ferrari.jpg'),
					player2Image: require('./img/geometro.jpg'),
					playerImagePicked: item
				})
				break
			case 'Trump':
				this.setState({
					player1Image: require('./img/trump.jpg'),
					player2Image: require('./img/hilary.jpg'),
					playerImagePicked: item
				})
				break
		}
	}

	//**********************  Check game for winner/tie **********************
	checkGamePush = () => {
		let gameEnded = true
		// if any of the boxes are = 0, that means the game is not filled
		// by default the inital value is set to true, and if any squares are 0,
		// it will switch it to false.
		for (let index in this.state.gameState) {
			for (let num of this.state.gameState[index]) {
				if (num == 0) {
					gameEnded = false
				}
			}
		}
		return gameEnded
	}

	getWinner = () => {
		const numberOfTiles = 3
		let arr = this.state.gameState
		let sum

		//check rows
		for (let i = 0; i < numberOfTiles; i++) {
			sum = arr[i][0] + arr[i][1] + arr[i][2]
			if (sum == 3) {
				return 1
			} else if (sum == -3) {
				return -1
			}
		}

		//check columns
		for (let i = 0; i < numberOfTiles; i++) {
			sum = arr[0][i] + arr[1][i] + arr[2][i]
			if (sum == 3) {
				return 1
			} else if (sum == -3) {
				return -1
			}
		}

		// check diagnal
		sum = arr[0][0] + arr[1][1] + arr[2][2]
		if (sum == 3) {
			return 1
		} else if (sum == -3) {
			return -1
		}

		sum = arr[2][0] + arr[1][1] + arr[0][2]
		if (sum == 3) {
			return 1
		} else if (sum == -3) {
			return -1
		}
		// no winners yet
		return 0
	}

	render() {
		return (
			<View style={styles.container}>
				<Header />
				<View>
					<Text style={styles.chooseIcon}>Player 1 Choose your Icon</Text>
				</View>

				<IconPicker
					selectedValue={this.state.playerImagePicked}
					onValueChange={this.handlePickerChange}
				/>

				<Board
					onUserSelect={this.onUserSelect}
					renderIcon={this.renderIcon}
					gameRunning={this.state.gameRunning}
				/>

				<View style={styles.winnerTextContainer}>
					<Text style={styles.winnerText}>
						{this.state.gameWinner
							? this.state.gameWinner
							: this.state.gameRunning && this.state.currentPlayer === 1
								? 'Player 1 Turn'
								: this.state.gameRunning && this.state.currentPlayer === -1
									? 'Player 2 turn'
									: ''}
					</Text>
				</View>

				<View style={{ width: '90%' }}>{this.renderButton()}</View>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	chooseIcon: {
		marginBottom: 15,
		marginTop: 15
	},
	winnerTextContainer: {
		marginBottom: 15,
		marginTop: 15
	},
	winnerText: {
		fontSize: 20
	}
}

export default Game
