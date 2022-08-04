import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ItemContainer = (props) => {
  return (
    <View style={[styles.itemContainer, props.styles]}>
      {props.children}
    </View>
  )
}

export default ItemContainer