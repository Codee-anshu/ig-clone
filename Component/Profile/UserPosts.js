import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostOverview from './PostOverview'

const UserPosts = ({ posts }) => {

    function renderPost(itemdata) {
        const item = itemdata.item
        return <PostOverview caption={item.caption} imageUrl={item.imageUrl}/>
    }
    return (
        <View>
            <FlatList scrollEnabled={false}
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderPost}
                numColumns={3}
            />
        </View>
    )
}

export default UserPosts

const styles = StyleSheet.create({})