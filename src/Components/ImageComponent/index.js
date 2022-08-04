import React from 'react'
import FastImage from 'react-native-fast-image'
import { H } from '../../Theme'

const FastImageComponent = ({ height = 80, width = 80, borderRadius = 40, url, ...props }) => {
    return (
        <FastImage style={{ height: H(height), width: H(width), borderRadius: H(borderRadius) }} source={{ uri: url, priority: 'high' }} {...props} />
    )
}

export default FastImageComponent