import React from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';

const Loadingscreen = () => {
    return (
        <View style={style.body}>
          <View style={{flex:1, justifyContent: "center"}}>
             <Image source={require('../assets/ibiknihbos.png')} style={{width:100, height:100}} />
          </View>
          <Text style={{marginBottom: 100, color:'white'}}>loading...</Text>
        </View>
    );
  }
  
  export default Loadingscreen;
  
  const style = StyleSheet.create({
    body :{
      flex:1,
      alignItems: 'center',
      backgroundColor: "purple"
    }
  })