import React from 'react';
import { TouchableOpacity, View, Text, FlatList, Image, StyleSheet } from 'react-native';

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image
            source={require('../../assets/profile/kitty.jpeg')}
            style={styles.image}
        />
        <Text style={styles.text}>소리버블</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF896',
        borderRadius: 20,
        width: '90%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
  });
  
export default CustomButton;