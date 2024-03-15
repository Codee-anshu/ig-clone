import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'

const PostImage = () => {
  return (
    <>

      <View style={{ height: 500 }}>
        <Image
          source={require('../../Assets/userAV/anime-boy-pfp.jpg')}
          style={{ width: 'auto', height: 500, resizeMode: 'cover' }}
        />
      </View>

    </>
  )
}

export default PostImage

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
    //    height:'50%'
  }
})