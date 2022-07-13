import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer } from 'react'
import colors from '../common/colors'

const WordBox = ({ wordData }) => {
  const [hint, toggleHint] = useReducer(s => !s, false);

  const startingLetter = wordData.answer[0];
  return (
    <View style={styles.container}>
      <Text>Opposite word of</Text>
      <Text style={styles.word}>{wordData.word}</Text>
      <View style={styles.hintContainer}>
        <TouchableOpacity onPress={toggleHint}>
          <Text>{'Hint'}</Text>
        </TouchableOpacity>
      </View>
      {hint && (
        <View>
          <Text>{`Starting letter is ${startingLetter}`}</Text>
        </View>
      )}
    </View>
  )
}

export default WordBox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.wordBox,
    padding: 10,
    borderRadius: 10,
  },
  word: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
    textTransform: 'capitalize',
  },
  hintContainer: {
    alignSelf: 'flex-end'
  },
})