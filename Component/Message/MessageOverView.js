import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../Constants/Color/Color'
import { useNavigation } from '@react-navigation/native'

const MessageOverView = ({ name, imageUrl }) => {
    const navigation = useNavigation();

    const  pressHandle =()=>{
        navigation.navigate('chat', {
            chatName:name
        })
    }
    return (
        <Pressable 
        onPress={pressHandle}
        style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 0.5, gap: 10, borderColor:colors.primary.black }}>
            <Image source={require('../../Assets/userAV/anime-boy-pfp.jpg')} style={{ width: 60, height: 60, borderRadius: 30 }} />
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', flex:1}}>
                <View>
                    <Text style={{ color: colors.primary.black, fontWeight: '500' }}>{name}</Text>
                    <Text>Message goes here...</Text>
                </View>
                <Text>10min</Text>
            </View>
        </Pressable>
    )
}

export default MessageOverView

const styles = StyleSheet.create({})
