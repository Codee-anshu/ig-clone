import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../Constants/Color/Color'
import { useNavigation } from '@react-navigation/native'

const Stories = ({ width, height, flexDirection, userName }) => {
const navigation = useNavigation();

const openStory= ()=>{
    navigation.navigate('story', {
        name:userName
    })
}

    return (
            <Pressable 
            onPress={openStory}
            style={[styles.storiesContainer]}>
                <View
                    style={[styles.container, { width: width ? width + 5 : 91, height: height ? height + 5 : 91 }]}
                >

                    <Image
                        source={require('../../Assets/userAV/anime-boy-pfp.jpg')}
                        style={[styles.avtarImage, { width: width ? width : 85, height: height ? height : 85 }]}
                    />

                </View>
                <Text style={{ textAlign: 'center' , color: colors.primary.black}}>{userName.length > 20 ? userName.slice(0, 10)+"..." :userName}</Text>
            </Pressable>
    )
}

export default Stories

const styles = StyleSheet.create({
    storiesContainer:{
        alignItems: 'center',
    },
    container: {
        margin: 5,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.primary.pink,

    },
    avtarImage: {
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.primary.white
    }
})