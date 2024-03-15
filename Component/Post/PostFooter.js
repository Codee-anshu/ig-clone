import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IconButton from '../Buttons/IconButton'
import { colors } from '../../Constants/Color/Color'

const PostFooter = ({ likes, caption, comments, userName }) => {
    const [isLike, setIsLike] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false)
    const likeHandler = () => {
        setIsLike(!isLike)
    }
    const bookmarkHandler = () => {
        setIsBookmark(!isBookmark)
    }
    return (
        <View style={styles.footerContainer}>
            <View style={styles.iconContainer}>
                <View style={styles.leftIcon} >
                    <IconButton
                        type={'MaterialCommunityIcons'}
                        name={isLike ? 'thumb-up' : 'thumb-up-outline'}
                        size={26}
                        color={isLike ? colors.primary.pink : colors.primary.black}
                        onPress={likeHandler}
                    />
                    <IconButton type={'Fontisto'} name={'comment'} size={20} color={colors.primary.black} />
                    <IconButton type={'Ionicons'} name={'arrow-redo-outline'} size={28} color={colors.primary.black} />

                </View>
                <IconButton
                    type={'Ionicons'}
                    name={isBookmark ? 'star' : 'star-outline'}
                    size={28} color={colors.primary.black}
                    onPress={bookmarkHandler}
                />
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={{ color: colors.primary.black }}>{`${likes.toLocaleString('en')} Likes`}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.captionId}>
                        {userName}
                        <Text style={[styles.captionText]}> {caption}</Text>
                    </Text>

                </View>
                <Text>{`View ${comments.length} comments`}</Text>

            </View>
        </View>
    )
}

export default PostFooter

const styles = StyleSheet.create({
    footerContainer: {
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:5
    },
    leftIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        gap:5
    },
    captionId: {
        color: colors.primary.black,
        fontWeight: '500',
    },
    captionText: {
        color: colors.primary.black,
        fontWeight: '400'
    }
})