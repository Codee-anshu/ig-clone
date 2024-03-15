import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../Constants/Color/Color';

const CustomBottomTab = ({ children, onPress }) => {
    return <TouchableOpacity
    onPress={onPress}
        style={{
            bottom: 25,
            backgroundColor: colors.primary.pink,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            width: 55,
            height: 55,
            elevation: 20,
            shadowColor: colors.primary.pink,
            shadowOpacity: 0.25,
            shadowOffset: {
                width: 0,
                height: 10
            },
            shadowRadius: 3.5
        }}
    >
        <View>{children}</View>
    </TouchableOpacity>
}

export default CustomBottomTab

const styles = StyleSheet.create({})