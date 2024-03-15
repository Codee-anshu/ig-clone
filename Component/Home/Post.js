import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostHeader from '../Post/PostHeader'
import PostImage from '../Post/PostImage'
import PostFooter from '../Post/PostFooter'

const Post = ({post}) => {

  return (
    <View>
      <PostHeader userName={post.userName} imageUrl={post.userImage} />
      <PostImage />
      <PostFooter
        likes={post.likes}
        userName={post.userName}
        caption={post.caption}
        comments={post.comments}
      />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})