import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../../Constants/Color/Color'
import IconButton from '../Buttons/IconButton'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const StoryHeader = ({userName}) => {
    const navigation = useNavigation();
    function closeStory (){
        navigation.goBack()
    }
    return (
        <View style={{position:'absolute', zIndex:9, width:width}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', paddingHorizontal:5 }}>
                <View style={{flexDirection:'row',gap: 10, padding: 5,alignItems:'center'}}>
                    <Image source={require('../../Assets/userAV/anime-boy-pfp.jpg')} style={{ width: 35, height: 35, borderRadius: 20 }} />
                    <Text style={{ color: colors.primary.white, fontWeight: '800' }}>{userName}</Text>
                </View>
                <IconButton type={'Feather'} name={'x'} size={28} color={colors.primary.white} onPress={closeStory} />
            </View>
        </View>
    )
}

export default StoryHeader

const styles = StyleSheet.create({})