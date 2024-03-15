import { StyleSheet, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';



const IconButton = ({ type, name, size, color, onPress }) => {
  return (
    <View style={styles.iconContainer}>
      {type === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ) : type === 'MaterialIcons' ? (
        <MaterialIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'FontAwesome' ? (
        <FontAwesome
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'FontAwesome5' ? (
        <FontAwesome5
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'FontAwesome6' ? (
        <FontAwesome6
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'Feather' ? (
        <Feather
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'AntDesign' ? (
        <AntDesign
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'Entypo' ? (
        <Entypo
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'Ionicons' ? (
        <Ionicons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'EvilIcons' ? (
        <EvilIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): type === 'Octicons' ? (
        <Octicons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ) : type === 'SimpleLineIcons' ? (
        <SimpleLineIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      ): (
        <Fontisto
          name={name}
          color={color}
          size={size}
          onPress={onPress}
        />
      )

    }

    </View>

  )
}

export default IconButton

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10
  }
})