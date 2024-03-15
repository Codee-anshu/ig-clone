import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../Constants/Color/Color'
import IconButton from '../Buttons/IconButton'


const Details = ({ userName, userHandle, bio, posts, follower, following }) => {
    return (
        <View>
            <View style={styles.upperCircle}></View>

            <Text style={{ fontSize: 24, fontWeight: '800', color: colors.primary.white, letterSpacing: 2, textTransform: 'capitalize', textAlign: 'center', marginVertical: 20 }}>{userName}</Text>

            <View style={styles.profileImageContainer} >
                <Image source={require('../../Assets/userAV/sivapfp.jpeg')} style={styles.profileImage} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ paddingHorizontal: 5, textDecorationLine: 'underline', color: colors.primary.black }}>{`@ ${userHandle}`}</Text>
                <Text style={{ marginTop: 20, color: colors.primary.grey }}>{bio}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 30 }}>
                <View style={styles.numberContainer}>
                    <Text style={styles.numbers}>{posts.length}</Text>
                    <Text>Posts</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numbers}>{follower}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={[styles.numberContainer, { borderRightWidth: 0 }]}>
                    <Text style={styles.numbers}>{following}</Text>
                    <Text>Followings</Text>
                </View>
            </View>
            <ButtonComponent />
        </View>
    )
}



const ButtonComponent = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', gap: 5, paddingHorizontal: 10 }}>
                <TouchableOpacity style={[styles.buttonContainer, { flex: 2 }]}>
                    <Text style={{ color: colors.primary.black }}>Edit Profile</Text>
                </TouchableOpacity>
                <Pressable style={[styles.buttonContainer]}>
                    <IconButton type={'AntDesign'} name={'sharealt'} size={24} color={colors.primary.black} />
                </Pressable>
            </View>
        </>
    )
}

export default Details

const styles = StyleSheet.create({
    upperCircle: {
        width: '100%',
        height: 170,
        borderBottomRightRadius: 170,
        borderBottomLeftRadius: 170,
        backgroundColor: colors.primary.pink,
        position: 'absolute'
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    profileImage: {
        width: 156,
        height: 156,
        borderRadius: 77,
        borderWidth: 2,
        borderColor: colors.primary.white,
        shadowOffset: {
            width: 1,
            height: 5
        },
        shadowColor: 'black'
    },
    numberContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 1,
        borderRightWidth: 2,
        borderColor: colors.primary.grey
    },
    numbers: {
        fontSize: 24,
        color: colors.primary.black
    },
    buttonContainer: {
        backgroundColor: colors.secondary.grey,
        opacity: 0.50,
        padding: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    }
})