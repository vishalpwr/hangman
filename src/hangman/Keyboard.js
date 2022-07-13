import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../common/colors'

const Key = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress(text)} style={[styles.keyContainer, { backgroundColor: disabled ? '#99a' : colors.key }]}>
      <Text style={styles.key}>{text}</Text>
    </TouchableOpacity>
  )
}

const Keyboard = ({ onPress, correctLetters, wrongLetters }) => {
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return (
    <View style={styles.container}>
      {keys.split('').map((_, index) => {
        const disable = correctLetters.includes(_) || wrongLetters.includes(_)
        return (
          <Key key={index} text={_} onPress={onPress} disabled={disable} />)
      })}
    </View>
  )
}

export default Keyboard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  keyContainer: {
    width: 30,
    height: 38,
    backgroundColor: colors.key,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  key: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})