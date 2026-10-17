import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, requireNativeComponent} from 'react-native';
import {Perfil} from './components/Perfil';
export default function App() { 
  return (
    <View style={styles.container}>
      <Perfil nombre= "Lulu" carrera="ITIID" materia="Movil" cuatri="4to"/>
      <Perfil nombre= "Renata" carrera="ITIID" materia="Movil" cuatri="4to"/>
      <Perfil nombre= "Luisa" carrera="ITIID" materia="Movil" cuatri="4to"/>   

      <StatusBar style="auto"></StatusBar>
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