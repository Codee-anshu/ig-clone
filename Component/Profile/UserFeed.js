import { Animated, Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { colors } from '../../Constants/Color/Color'
import UserPosts from './UserPosts'

const UserFeed = ({ posts }) => {
    const [value, setValue] = useState({
        xTabOne: 0,
        xTabTwo: 0,
    })
    const [isActive, setIsActive] = useState(false)
    const translateX = useRef(new Animated.Value(0)).current
    const { width } = Dimensions.get('window')

    // console.log(value.xTabOne)


    const startAnimation = (type) => {
        Animated.spring(translateX, {
            toValue: type,
            useNativeDriver: true,
        }).start()
    }

    // const resetAnimation = (type) => {
    //     Animated.spring(translateX, {
    //         toValue: type,
    //         useNativeDriver: true
    //     }).start()
    // }

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>

                <Pressable
                    style={[styles.button,]}
                    onPress={() => {
                        startAnimation(0)
                        setIsActive(!isActive)
                    }}
                    onLayout={(event) => {

                        console.log("Layout event:", event.nativeEvent.layout.x);
                        setValue({ xTabOne: event.nativeEvent.layout.x })
                    }
                    }
                >
                    <Text style={[styles.buttonText]}>Post</Text>
                </Pressable>


                <Animated.View style={[styles.animatedView, {
                    transform: [{
                        translateX
                    }]
                }]} >
                    <Text style={[styles.buttonText, { color: colors.primary.white }]}>{isActive ? 'Tag' : 'Post'}</Text>
                </Animated.View>


                <Pressable style={[styles.button]}
                    onPress={() => {
                        startAnimation(value.xTabTwo - 56)
                        setIsActive(!isActive)
                    }}
                    onLayout={event => setValue({
                        xTabTwo: event.nativeEvent
                            .layout.x
                    })}
                >
                    <Text style={[styles.buttonText]}>Tag</Text>
                </Pressable>
            </View>


            <View style={{ flexDirection: 'row' }}>
                <Animated.View style={[{
                    width: width,
                    justifyContent: 'center',
                }, {
                    transform: [{
                        translateX
                    }]
                }]}>
                    <UserPosts posts={posts} />
                </Animated.View>


                <Animated.View style={[{
                    width: width,
                    justifyContent: 'center',
                }, {
                    transform: [{
                        translateX
                    }]
                }]} >
                    <Text>Tag</Text>
                </Animated.View>
            </View>
        </View>
    )
}

export default UserFeed

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: colors.secondary.grey,

    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '800',
        color: colors.primary.darkgrey,
        zIndex: 99
    },
    animatedView: {
        backgroundColor: colors.primary.pink,
        width: 120,
        borderRadius: 20,
        position: 'absolute',
        paddingVertical: 10,
        zIndex: 99,
        elevation: 10
    }
})