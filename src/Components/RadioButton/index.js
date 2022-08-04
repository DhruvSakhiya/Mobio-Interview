import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../Theme/colors'
import styles from './styles'

const RadioButton = (props) => {
  return (
    <View style={[styles.outerCircle, props.style]}>
      {
        props.selected ?
          <View style={styles.innerCircle} />
          : null
      }
    </View>
  )
}

export default RadioButton