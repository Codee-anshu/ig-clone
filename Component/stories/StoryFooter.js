import { StyleSheet,TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { colors } from '../../Constants/Color/Color'

const StoryFooter = () => {
  return (
    <KeyboardAvoidingView>
      <TextInput
      placeholder='Type Reply...'
      placeholderTextColor={colors.primary.white}
      
      style={{backgroundColor: 'rgba(173, 181, 189,0.25)', margin:10, borderRadius:25, paddingHorizontal:15,}}
      />

    </KeyboardAvoidingView>
  )
}

export default StoryFooter

const styles = StyleSheet.create({})