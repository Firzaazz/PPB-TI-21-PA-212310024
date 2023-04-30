import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Headder from './component/Headder';
import { SafeAreaView } from 'react-native';
import Story from './component/Story';
import Feed from './component/Feed';


export default function App() {
  return (
    
    <View style={{flex:10}}>
      <View>  
        <Text></Text>
        <Text></Text>
        <Headder/> 
      </View>

    <View style={{flex:1}}>
       <Story/>   
    </View>

    <View style={{flex:7}}>
       <Feed/> 
    </View>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
