import React, { Component } from 'react'
import { View, Text } from 'react-native'

const GameScore = ({ resetScore, score }) => (
	<View
		style={{
			marginBottom: 15
		}}>
		<Text>{`The score is ${score[0]} - ${score[1]}`}</Text>
		<Text
			style={{
				backgroundColor: '#e02131',
				color: '#ffffff',
				borderRadius: 5,
				textAlign: 'center'
			}}
			onPress={resetScore}>
			Reset Score
		</Text>
	</View>
)

export default GameScore
