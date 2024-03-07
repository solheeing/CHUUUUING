import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ChatList = () => {
  // 가상의 채팅방 데이터
  const chatRooms = [
    { id: 1, name: 'hiyomi', image: require('../../assets/profile/hiyomi.png') },
    { id: 2, name: 'yoonseo', image: require('../../assets/profile/yoonseo.png') },
    { id: 3, name: 'sori', image: require('../../assets/profile/sori.png') },
    { id: 4, name: '☆', image: require('../../assets/profile/tsls.jpeg') },
    // 다른 채팅방 데이터들...
  ];

  // 각 채팅방 항목 렌더링 함수
  const renderChatRoom = ({ item }) => (
    <View style={styles.chatRoom}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={chatRooms}
      renderItem={renderChatRoom}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  chatRoom: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
  },
});

export default ChatList;
