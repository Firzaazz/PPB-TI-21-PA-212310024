import React from 'react';
import { StyleSheet, ImageBackground, View, Text,Image } from 'react-native';
import Login from './Login';

const Lgscrn = () => {
  return (
    <View >
        <View >
            <Image source={require('../assets/wp.jpg')}/>
        </View>
        <View >
            <Login/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Lgscrn;
