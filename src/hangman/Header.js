import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hangman</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
})