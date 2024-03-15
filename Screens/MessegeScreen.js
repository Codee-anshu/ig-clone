import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { user } from '../data/user/user'
import MessageOverView from '../Component/Message/MessageOverView'

const MessegeScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Message"
    })

  }, [])

  const renderMessages = (itemdata) => {
    const item = itemdata.item
    return (
     <MessageOverView name={item.name} imageUrl={item.avatar}/>
    )
  }
  return (
    <View>
      <FlatList
        data={user}
        keyExtractor={item => item.id}
        renderItem={renderMessages}
      />


    </View>
  )
}

export default MessegeScreen

const styles = StyleSheet.create({})