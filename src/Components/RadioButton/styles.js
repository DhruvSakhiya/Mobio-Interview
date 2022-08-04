import { StyleSheet } from 'react-native'
import { H } from '../../Theme'
import colors from '../../Theme/colors'

export default StyleSheet.create({
    outerCircle: {
        height: H(20),
        width: H(20),
        borderRadius: H(12),
        borderWidth: 1,
        borderColor: colors.denim,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle: {
        height: H(10),
        width: H(10),
        borderRadius: H(5),
        backgroundColor: colors.denim,
    }
})