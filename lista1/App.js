import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { TextInput } from 'react-native-web';

export default function App() {
  const [nome, setNome] = useState();
  const [exibir, setExibir] = useState();

  const exibirNome = () => {
    setExibir([nome]);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
      placeholder={"Digite um Nome"}
      style={{borderWidth:0.5,height:40,width:"100%"}}
      onChangeText={(text) => setNome(text)}
      />

      <Button title="Exibir nome" onPress={() => exibirNome()}/>

      <Text>{exibir}</Text>
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
