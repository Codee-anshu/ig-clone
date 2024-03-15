import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Stories from '../Home/Stories'
import IconButton from '../Buttons/IconButton'
import { colors } from '../../Constants/Color/Color'

const PostHeader = ({ userName, imageUrl }) => {
    // console.log(imageUrl)
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
                <View style={{width:35, borderRadius:50, margin:10}}>
                    <Image source={require('../../Assets/userAV/sivapfp.jpeg')} style={styles.avtarImage}  />
                </View>
                <Text style={{color:colors.primary.black}}>{userName}</Text>
            </View>
            <IconButton type={'Ionicons'}  name={'ellipsis-vertical'} size={18} color={'#000000'} />
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        // borderWidth: 1
    },
    avtarImage:{
        width:35,
        height:35,
        // borderWidth:1,
        borderRadius:50
    }

})
export default PostHeader