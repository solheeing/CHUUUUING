import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CustomButton from './CustomButton';
import ChatList from './ChatList';

const MainPage = () => {
  return (
    <View>
        <Text style={styles.name}>CHUUUUING</Text>
        <CustomButton/>
        <Text style={styles.list}>참여 중인 유니버스</Text>
        <ChatList/>
        <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFEF8',
      justifyContent: 'center',
    },
    name: {
        textAlign: 'center',
        paddingTop: 70,
        paddingBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        // fontFamily: 'FredokaOne-Regular',
        color: '#0F0E3D',
    },
    list: {
        fontSize: 15,
        fontWeight: 'bold',
        // fontFamily: 'FredokaOne-Regular',
        color: '#0F0E3D',
        paddingLeft: '5%',
        paddingTop: 15,
        paddingBottom: 15,
    },
});

export default MainPage;