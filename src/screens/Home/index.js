import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Chip } from 'react-native-paper';

import Container from '../../components/Container'
import Searchbar from '../../components/Searchbar'
import SpotlightContainer from '../../components/SpotlightContainer'

const data = [
    { id: 1, uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80" },
    { id: 2, uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80" },
    { id: 3, uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80" },
    { id: 4, uri: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80" },
]

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Container padding={20}>
            <Searchbar
                value={searchQuery}
                onChange={onChangeSearch}
            />
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <SpotlightContainer uri={item.uri} />}
            />
        </Container>
    )
}

export default Home
