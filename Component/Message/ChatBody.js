import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../../Constants/Color/Color'
import IconButton from '../Buttons/IconButton'
import messageData from '../../data/message/MessageData'

const ChatBody = () => {
  const scrollViewRef = useRef()
  const [isSend, setIsSend] = useState(1)

  const SendMessage = ({ message, time }) => {
    return (
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>

        <Text style={styles.sendMessageContainer}>
          {message}
        </Text>

        <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>

          <IconButton type={'Ionicons'} name={!!isSend ? "checkmark-done" : 'checkmark'} size={16} />
          <Text style={{ fontSize: 12 }}>
            {time}
          </Text>

        </View>
      </View>
    )
  }

  const RecieveMessage = ({ message, time }) => {
    return (
      <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginVertical: 10 }}>
        <Text style={styles.recieveMessageConatiner}>{message}</Text>
        <Text style={{ fontSize: 12, paddingHorizontal: 5 }}>
          {time}
        </Text>
      </View>
    )
  }

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true })
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={scrollToBottom}
      showsVerticalScrollIndicator={false}>
      {
        messageData.map((item, key) => {
          if (item.user === 'user_1') {
            return <SendMessage key={key} message={item.message} time={item.time} />
          } else {
            return <RecieveMessage key={key} message={item.message} time={item.time} />
          }
        })
      }
    </ScrollView>
  )
}

export default ChatBody

const styles = StyleSheet.create({
  sendMessageContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: colors.primary.pink,
    color: colors.primary.white,
    borderTopRightRadius: 0,
    fontSize: 16,
    maxWidth: '80%',
  },
  recieveMessageConatiner: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: colors.primary.lightPink,
    color: colors.primary.black,
    borderTopLeftRadius: 0,
    fontSize: 16,
    maxWidth: '80%',
  }
})