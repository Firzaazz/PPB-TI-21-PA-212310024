import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Latihan1 from './component/Latihan1';
import  Loadingscree from './component/Loadingscree';
import  Biorfc from './component/Biofrc';
import  Biorcc from './component/Biorcc'

export default function App() {
  return (
    // <Latihan1/>
    // <Loadingscree/>
    // <Biorfc/>
    <Biorcc/>
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
