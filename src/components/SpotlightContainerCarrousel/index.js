import React from 'react'
import { FlatList } from 'react-native'

import SpotlightContainer from '../SpotlightContainer'

const SpotlightContainerCarrousel = ({ data }) => {
    return (
        <FlatList
            style={{ width: "80%" }}
            horizontal
            data={data}
            renderItem={({ item }) => <SpotlightContainer uri={item.uri} />}
        />
    )
}

export default SpotlightContainerCarrousel
