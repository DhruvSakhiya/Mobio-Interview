import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container';
import styles from './styles'
import ProductItem from '../../Components/ProductItem';
import Header from '../../Components/Header'
import ItemSeparatorComponent from '../../Components/ItemSeparator'
import ProductData from '../../Fixtures/Products.json'
const HomeScreen = () => {

    const [products, setProducts] = useState(ProductData);
    const [colors, setColors] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let colorArray = [];
            products.forEach((ele, index) => {
                colorArray.push(...ele.colors)
            })
            const newColors = [...new Set(colorArray)];
            setColors(newColors)
        }
    }, [products])

    return (
        <Container>
            <View style={[styles.container]}>
                <Header />
                <View style={styles.bodyContainer}>
                    <FlatList
                        data={products}
                        ItemSeparatorComponent={() => <ItemSeparatorComponent />}
                        renderItem={({ item }) => <ProductItem colors={colors} item={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Container>
    )
}

export default HomeScreen
