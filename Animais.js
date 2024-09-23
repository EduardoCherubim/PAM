
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  
const [animal,setAnimal] = useState([
  {
  nome:'Nome: Animal1',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal1',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal1',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal1',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal1',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal1',
  descrição:'Animal qualquer'
  }
  ])

  const[visivel, setVisivel] = useState(false);
  const[indiceSelecionado, setIndiceSelecionado] = useState(0)
  const carregar = (indice) => {
    setIndiceSelecionado(indice);
    setVisivel(true)
  };
  const voltar = () =>{
    setVisivel(false);
  };

  return (
    <View style={(styles.container)} >
      <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.botao}>
        <Pressable onPress={() => carregar (0)}>
          1
          <Text style={styles.nome}>Zeus</Text>
        </Pressable>
      </View>
      <View style={styles.botao}>
      <Pressable onPress={() => carregar (1)}>
          2
          <Text style={styles.nome}>Poseidon</Text>
        </Pressable>
      </View>
      <View style={styles.botao}>
      <Pressable onPress={() => carregar (2)}>
          3
          <Text style={styles.nome}>Atena</Text>
        </Pressable>
      </View>
      <View style={styles.botao}>
      <Pressable onPress={() => carregar (3)}>
          4
          <Text style={styles.nome}>Ares</Text>
        </Pressable>
      </View>
      <View style={styles.botao}>
      <Pressable onPress={() => carregar (4)}>
          5
          <Text style={styles.nome}>Ártemis</Text>
        </Pressable>
      </View>
      <View style={styles.botao}>
      <Pressable onPress={() => carregar (5)}>
          6
          <Text style={styles.nome}>Hermes</Text>
        </Pressable>
      </View>
      
      <Modal visible={visivel} animationType="fade">
        <View>
          <Text>{animal[indiceSelecionado].nome}</Text>
          <Text>{animal[indiceSelecionado].descrição}</Text>
          <Button title="Voltar" onPress={() => voltar()}/>
          <Image source={require} style={{width:50, height:50}}/>
        </View>
      </Modal>

      </ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItens:'center'
  },
  botao:{
  justifyContent:'center',
  marginTop:40,
  alignItems:'center',
  alignContent:'center'
  },
  nome:{
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center',
    fontWeight:'bold'
    }

});
