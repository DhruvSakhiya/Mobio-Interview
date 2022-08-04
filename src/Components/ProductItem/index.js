import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemContainer from '../ItemContainer'
import FastImageComponent from '../ImageComponent'
import RadioButton from '../RadioButton'
import styles from './styles'

const ProductItem = ({ item, colors }) => {
    return (
        <View>
            <ItemContainer>
                <View style={[styles.rowCenter]}>
                    <FastImageComponent borderRadius={50} height={100} width={100} url={item.picture} />
                    <View style={styles.bodyContainer}>
                        <Text style={styles.productTitle}>{item.productName}</Text>
                        <Text style={[styles.marginTop10, styles.rowDataText]}><Text style={styles.rowHeaderText}>Price:</Text> {item.price}</Text>
                        <Text style={[styles.marginTop10, styles.rowDataText]}><Text style={styles.rowHeaderText}>Brands:</Text> {item.brands.map((ele) => ele.name).join(', ')}</Text>
                    </View>
                </View>
                <View style={styles.marginTop10}>
                    <Text style={styles.rowHeaderText}>Colors</Text>
                    <View style={[styles.rowCenter, styles.marginTop10]}>
                        {colors.map((ele, index) => {
                            return (
                                <View key={index} style={[styles.rowCenter, styles.marginRight10]}>
                                    <RadioButton selected={item.colors.includes(ele)} />
                                    <View style={styles.marginLeft5}>
                                        <Text style={styles.rowDataText}>{ele}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ItemContainer>
        </View>
    )
}

export default ProductItem
