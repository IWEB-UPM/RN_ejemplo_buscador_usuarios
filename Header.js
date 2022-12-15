import { View, Button, Text, Image, StyleSheet } from 'react-native';

export default function Header(props) {  

  return (
    <View id="cabecera">
      <Image style={styles.image} source={require('./assets/sun.webp')} alt="logo" />
      <Text className="mensaje">Bienvenido a la página de Enrique Barra</Text>      
    </View>)
}

const styles = StyleSheet.create({
  image: {
    width:60,
    height:60
  }
});