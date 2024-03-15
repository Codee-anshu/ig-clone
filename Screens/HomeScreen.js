import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Component/Home/Header'
import Stories from '../Component/Home/Stories'
import Post from '../Component/Home/Post'
import { colors } from '../Constants/Color/Color'
import { post } from '../data/post/post'

const HomeScreen = () => {
  return (
    <View>
      <ScrollView style={styles.homeContainer}>
        <Header />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            post.map((post, index) => {
              return (
                <Stories userName={post.userName} key={index} />
              )

            })

          }
        </ScrollView>
        <View style={{ borderWidth: .5, borderColor: colors.primary.grey }}></View>
        {
          post.map((post, index) => {
            return <Post post={post} key={index} />
          })
        }
      </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%'
  }
})

export default HomeScreen