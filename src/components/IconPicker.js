import React from 'react'
import { View, Text, Image, Picker } from 'react-native'
import imgData from '../imgData.js'

const IconPicker = ({
	selectedValue,
	handlePickerChange,
	player1Image,
	player2Image
}) => {
	return (
		<View style={styles.container}>
			<View>
				<Text>Player 1 </Text>
				<Image source={player1Image} style={styles.playerImage} />
			</View>
			<View
				style={{
					marginBottom: 20
				}}>
				<View>
					<Text style={styles.chooseIcon}>Player 1 Choose your Icon</Text>
				</View>
				<View style={styles.pickerContainer}>
					<Picker
						selectedValue={selectedValue}
						onValueChange={item => handlePickerChange(item)}>
						{imgData.map(item => (
							<Picker.Item
								label={item.label}
								value={item.label}
								key={item.label}
							/>
						))}
					</Picker>
				</View>
			</View>

			<View>
				<Text>Player 2 </Text>
				<Image source={player2Image} style={styles.playerImage} />
			</View>
		</View>
	)
}

const styles = {
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 5
	},
	pickerContainer: {
		color: '#1a1b1c',
		backgroundColor: '#CEE9C4',
		borderRadius: 5
	},
	playerImage: {
		width: 50,
		height: 50,
		borderRadius: 50
	},
	chooseIcon: {
		marginBottom: 15,
		marginTop: 15
	}
}

export default IconPicker
