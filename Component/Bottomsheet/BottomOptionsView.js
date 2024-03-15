import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../Buttons/IconButton'
import { colors } from '../../Constants/Color/Color'
import { useNavigation } from '@react-navigation/native'

const BottomOptionsView = () => {
    const navigation = useNavigation()

    function navigateHandler(){
        navigation.navigate('settings')
        
    }
    return (
        <View style={styles.container}>

            {/* setting button */}
            <Pressable style={[styles.listViewContainer, { justifyContent: 'space-between' }]} onPress={navigateHandler}>
                <View style={styles.listRightView}>
                    <IconButton
                        type={"Ionicons"}
                        name={'settings-outline'}
                        size={28}
                        color={colors.primary.black}
                    />
                    <Text style={styles.listText}>Settings</Text>
                </View>
                <IconButton
                    type={"Ionicons"}
                    name={'chevron-forward'}
                    size={28}
                    color={colors.primary.black}
                />
            </Pressable>

            <Pressable style={styles.listViewContainer}>
                <IconButton type={"Ionicons"} name={'star-outline'} size={28} color={colors.primary.black} />
                <Text style={styles.listText}>Starred</Text>
            </Pressable>
            <Pressable style={styles.listViewContainer}>
                <IconButton type={"Feather"} name={'clock'} size={28} color={colors.primary.black} />
                <Text style={styles.listText}>Activity</Text>
            </Pressable>
            <Pressable style={styles.listViewContainer}>
                <IconButton type={"Feather"} name={'shield'} size={28} color={colors.primary.black} />
                <Text style={styles.listText}>Security & Privacy</Text>
            </Pressable>
            <Pressable style={styles.listViewContainer}>
                <IconButton type={"Ionicons"} name={'information-circle-outline'} size={30} color={colors.primary.black} />
                <Text style={styles.listText}>Information</Text>
            </Pressable>
            <Pressable style={styles.listViewContainer}>
                <IconButton type={"Feather"} name={'log-out'} size={28} color={colors.primary.red} />
                <Text style={[styles.listText, { color: colors.primary.red }]}>Log out</Text>
            </Pressable>

        </View>
    )
}

export default BottomOptionsView

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    listViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 12
    },
    listRightView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    listText: {
        fontSize: 17,
        color: colors.primary.black,
        // backgroundColor: 'yellow'
    }
})