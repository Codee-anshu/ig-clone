import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import IconButton from '../Buttons/IconButton'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../Constants/Color/Color'
import { PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Header = () => {
    const navigation = useNavigation();
    const [pickedImage, setPickedImage] = useState()

    async function openCamera() {
        const cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;

        try {
            const granted = await PermissionsAndroid.request(cameraPermission);

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const options = {
                    mediaType: 'photo',
                    saveToPhotos: true
                };

                const result = await launchCamera(options);
                console.log(results);

                // Continue with the rest of your code...
            } else {
                console.log('Camera permission denied');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }




    const messegeHandler = () => {
        navigation.navigate('messege')
    }
    return (
        <View style={styles.headerContainer}>
            <IconButton
                type={'SimpleLineIcons'}
                name={'camera'}
                size={26}
                color={colors.secondary.icon}
                onPress={openCamera}
            />

            <View>
                <Image source={require('../../Assets/logo/instagram-header-logo.png')} style={styles.headerLogo} />
            </View>

            <View style={styles.headerIconContainer}>
                <IconButton
                    type={'Ionicons'}
                    name={'chatbox-ellipses-outline'}
                    size={28}
                    color={colors.secondary.icon}
                    onPress={messegeHandler}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 10,
        // borderWidth:1
    },
    headerLogo: {
        width: 140,
        height: 40
    },
    headerIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})