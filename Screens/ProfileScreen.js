import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useMemo, useRef, useCallback } from 'react'
import { colors } from '../Constants/Color/Color'
import { userData } from '../data/user/userDetail'
import Details from '../Component/Profile/Details'
import UserFeed from '../Component/Profile/UserFeed'
import IconButton from '../Component/Buttons/IconButton'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, } from '@gorhom/bottom-sheet';
import BottomOptionsView from '../Component/Bottomsheet/BottomOptionsView'



const ProfileScreen = ({ navigation }) => {
  const userDetail = userData[0]

  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ['50%'], [])

  const handleOpen = () => bottomSheetRef.current?.present()
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton
          type={'FontAwesome6'}
          name={'bars-staggered'}
          size={22}
          color={colors.primary.black}
          onPress={handleOpen}
        />
      },
    })
  }, [navigation])
  return (
    <>

      <View>
        <ScrollView style={{ height: '100%' }}>
          <Details
            userName={userDetail.name}
            userHandle={userDetail.userHandle}
            bio={userDetail.bio}
            posts={userDetail.posts}
            follower={userDetail.follower}
            following={userDetail.following}
          />
          <UserFeed posts={userDetail.posts} />
        </ScrollView>

        {/* Gorhom bottom sheet */}
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={0}
          handleIndicatorStyle={{ display: 'none' }}
          enablePanDownToClose
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView>
            <BottomOptionsView />
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({


})