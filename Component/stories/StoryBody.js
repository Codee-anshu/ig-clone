import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const StoryBody = () => {
  return (
    <View style={{flex:1}}>
      <Image source={require('../../Assets/userAV/sivapfp.jpeg')} style={{width: width}}/>
    </View>
  )
}

export default StoryBody

const styles = StyleSheet.create({})