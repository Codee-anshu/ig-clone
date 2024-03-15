import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../Constants/Color/Color';
import IconButton from '../Buttons/IconButton';

const ChatFooter = () => {
    const [message, setMessage] = useState('')
    const [hideIcon, setHideIcon] = useState(true)

    const inputHandler = (value) => {
        setMessage(value)
        if(value=== ''){
            setHideIcon(true)
        }else{
            setHideIcon(false)
        }
        
    }



    return (
        <>
            <View style={{ flexDirection: 'row', gap: 10, margin: 10, alignItems: 'flex-end' }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Type your message..'
                        style={styles.inputField}
                        multiline
                        value={message}
                        onChangeText={inputHandler}

                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, flexDirection: 'row', gap: 10 }}>

                        <IconButton type={'SimpleLineIcons'} name={'emotsmile'} size={24} color={colors.primary.black} />
                        {
            hideIcon &&
                            <IconButton type={'Ionicons'} name={'image-outline'} size={26} color={colors.primary.black} />
                        }


                    </View>
                </View>
                <Pressable style={{ backgroundColor: colors.primary.pink, padding: 12, borderRadius: 30 }}>
                    <IconButton type={'Ionicons'} name={'send-outline'} color={colors.primary.white} size={26} />
                </Pressable>

            </View>

        </>
    )
}

export default ChatFooter

const styles = StyleSheet.create({
    inputField: {
        flex: 1,
        maxHeight: 150,
        backgroundColor: colors.primary.white,
        borderRadius: 25,

    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 25,
        alignItems: 'flex-end'
    }
})