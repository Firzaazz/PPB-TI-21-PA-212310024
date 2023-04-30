import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const DATA = [
  {
    id: '1',
    user: {
      name: 'Brok',
      profileImgUrl: 'https://cdn.idntimes.com/content-images/duniaku/post/20191120/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f.jpg',
    },
    imgUrl: 'https://1.bp.blogspot.com/p/AF1QipNKQtVTCkxOi3xvtgzQEVsVgtYdBX9s19sIK1aj=s512',
    caption: 'Jln jln ke bogor eui YOHOHOHO',
    likes: 10,
    comments: 3,
  },
  {
    id: '2',
    user: {
      name: 'Nami',
      profileImgUrl: 'https://images2.alphacoders.com/127/1277702.jpg',
    },
    imgUrl: 'https://us-tuna-sounds-images.voicemod.net/c6566e5f-06a1-4e63-a8a6-9f21c5b720f8-1664113703970.jpg',
    caption: 'This is a caption for post 2',
    likes: 15,
    comments: 5,
  },
  // Add more data here
];

const Feed = () => {
  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{ uri: item.user.profileImgUrl }} style={styles.profileImg} />
        <Text style={styles.username}>{item.user.name}</Text>
      </View>
      <Image source={{ uri: item.imgUrl }} style={styles.postImg} />
      <View style={styles.footer}>
        <Text style={styles.caption}>{item.caption}</Text>
        <View style={styles.likes}>
          <Text style={styles.likesCount}>{item.likes} likes</Text>
          <Text style={styles.commentsCount}>{item.comments} comments</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  post: {
    marginVertical: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  profileImg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImg: {
    width: '100%',
    height: 350,
  },
  footer: {
    marginHorizontal: 12,
  },
  caption: {
    marginVertical: 6,
  },
  likes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likesCount: {
    fontWeight: 'bold',
  },
  commentsCount: {},
});

export default Feed;

