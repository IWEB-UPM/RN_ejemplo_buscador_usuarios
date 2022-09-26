import { View, Button, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Resultados(props) {

  console.log(props.resultado);
	return (
    <View style={styles.content}>
    <ScrollView>
      {props.resultado.map(item => (
        <View key={item.id}>          
          <Text>Nombre: {item.firstName} {item.lastName}</Text>
          <Text>Email: {item.email}</Text>
          <Image style={styles.image} source={{uri: item.image}}/>
        </View>
      ))}
    </ScrollView>
    

  </View>)
}

const styles = StyleSheet.create({
  image: {
    width:60,
    height:60
  },
  content: {
    height: 300
  }
});