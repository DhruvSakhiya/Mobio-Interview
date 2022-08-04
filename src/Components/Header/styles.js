import { StyleSheet } from 'react-native'
import { H, W } from '../../Theme'
import colors from '../../Theme/colors'

export default StyleSheet.create({
    container: {
        paddingVertical: H(20),
        backgroundColor: colors.lightPeriwinkle,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: W(20),
        fontWeight: '800',
        color: colors.denim
    }
})