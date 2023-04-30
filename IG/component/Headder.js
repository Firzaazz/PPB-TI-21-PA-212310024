import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Headder = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/iglgf.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    image : {
        width:110 , 
        height: 30 

    }
})

export default Headder;