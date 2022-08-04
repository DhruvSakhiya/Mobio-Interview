import { StyleSheet } from 'react-native'
import { H, W } from '../../Theme'
import colors from '../../Theme/colors'

export default StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bodyContainer: {
        flex: 1,
        marginLeft: W(20)
    },
    productTitle: {
        fontSize: W(16),
        fontWeight: '700',
        color: colors.denim
    },
    marginTop10: {
        marginTop: H(10)
    },
    rowHeaderText: {
        fontWeight: 'bold',
        fontSize: W(16),
        color: colors.denim
    },
    rowDataText: {
        fontSize: W(14),
        color: colors.denim
    },
    marginRight10: {
        marginRight: W(10)
    },
    marginLeft5: {
        marginLeft: W(5)
    }
})