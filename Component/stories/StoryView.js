import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoryHeader from './StoryHeader'
import StoryBody from './StoryBody'
import StoryFooter from './StoryFooter'

const StoryView = ({ route }) => {
  return (
    <View style={{ flex: 1 }} >
      <View style={{flex:1}}>
        <StoryHeader userName={route.params.name} />
        <StoryBody />
      </View>
      <StoryFooter />
    </View>
  )
}

export default StoryView

const styles = StyleSheet.create({})