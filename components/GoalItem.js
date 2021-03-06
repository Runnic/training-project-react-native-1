import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
    <TouchableOpacity onPress={ props.onDelete }>
        <View style={ styles.listItem } >
            <Text>{ props.goalText }</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8   
      }
})

export default GoalItem