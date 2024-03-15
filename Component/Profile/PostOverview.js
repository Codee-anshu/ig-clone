import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostOverview = ({imageUrl, caption}) => {
  // console.log(imageUrl)
  return (
    <Pressable style={{flex:1/3, justifyContent:'center', alignItems:'center'}}>
      <Image source={{uri:'https://preview.redd.it/me-watching-a-random-drawing-i-made-get-turned-into-a-meme-v0-xib15dbut7tb1.png?width=640&crop=smart&auto=webp&s=218dbe01ffa9c145aa5fef90aec31a21b97ffbbe'}} style={{width:100,}}/>
    </Pressable>
  )
}

export default PostOverview

const styles = StyleSheet.create({})