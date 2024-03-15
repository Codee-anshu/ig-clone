import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { colors } from '../../Constants/Color/Color'
import IconButton from '../Buttons/IconButton'


const ListOption = ({option}) => {
    return (
        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: colors.primary.black }}>{option}</Text>
            <IconButton
                type={"Ionicons"}
                name={'chevron-forward'}
                size={26}
                color={colors.primary.black}
            />
        </Pressable>
    )
}

const SettingsView = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Settings'
        })
    }, [])
    return (
        <View>
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10, borderBottomWidth: 0.5, borderBottomColor: colors.primary.grey, paddingBottom: 5 }}>
                    <IconButton type={"Feather"} name={'user'} size={26} color={colors.primary.black} />
                    <Text style={{ fontSize: 20, fontWeight: 500, color: colors.primary.black }}>Account</Text>
                </View>
                <ListOption option={'Your Account'}/>
                <ListOption option={'Change Password'}/>
                <ListOption option={'Profile Visibility'}/>
                <ListOption option={'Social Permission'}/>
            </View>
        </View>
    )
}

export default SettingsView

const styles = StyleSheet.create({})