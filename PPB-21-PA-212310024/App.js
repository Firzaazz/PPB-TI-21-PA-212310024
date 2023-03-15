import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image, FlatList} from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{flex :1,backgroundColor: '#696969'}}>
      <View style={{flexDirection: 'row-reverse' ,flex: 1,}}>
        <Image source={require('./assets/watchdog.jpg')}
        style={{width:420, height: 250, borderRadius :100/2}}/></View>

      <View style={{flex:5 ,alignItems:'center'}}>
        <Image source={require('./assets/sad.png')}
        style={{width: 200, height:200,borderColor: 'black'}}/>

          <View>
            <Text style={{fontWeight: 'bold',fontSize:25,textAlign: 'center'}}>Firza azz</Text>
            <Text style={{fontWeight: '200', fontSize: 13}}>aku akan tetap bersantai walau itu akan membunuhku...</Text>
          
          <View style={{alignItems:'center'}}>
            <Text></Text>
            <Text></Text>
            <Text>TELP :           085162****</Text>
            <Text>NPM :           212310024 </Text>
            <Text>KLS :                TI-21-PA-1</Text>
            
          </View>
          </View>
        </View>
    </SafeAreaView>
  );
  };