import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { colors } from '../../Constants/Color/Color'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'
import IconButton from '../Buttons/IconButton'

const ChatPage = ({ route, navigation }) => {
    const name = route.params.chatName

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 5, left: -10 }}>
                        <Image source={require('../../Assets/userAV/anime-boy-pfp.jpg')} style={{ width: 35, height: 35, borderRadius: 20 }} />
                        <View>
                            <Text style={{ color: colors.primary.black, fontWeight: '500' }}>{name}</Text>
                            <Text>Active 2m ago</Text>
                        </View>
                    </View>
                </>
            ),
            headerRight: () => (
                <IconButton type={'Ionicons'} name={'videocam-outline'} size={28} color={colors.primary.black} />
            )

        })
    }, [])


    return (
        <View style={{ flex:1, justifyContent:'flex-end'}}>
            <View style={{flex:1, padding:10}}>
                <ChatBody/>
            </View>

            <View>
                <ChatFooter />
            </View>
        </View>
    )
}

export default ChatPage

const styles = StyleSheet.create({})