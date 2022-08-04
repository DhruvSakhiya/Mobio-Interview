import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Header = ({ title = 'Products' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header