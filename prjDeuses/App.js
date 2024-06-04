import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  
const [deus,setDeus] = useState([
  {nome:'Zeus',
  ocupação:'deus dos deuses',
  },
  {nome:'Poseidon', 
  ocupação:'deus dos mares',
  },
  {nome:'Atena',
  ocupação:'deusa da saedoria',
  },
  {nome:'Ares',
  ocupação:'deus da guerra',
  },
  {nome:'Ártemis',
  ocupação:'deusa da caça',
  },
  {nome:'Hermes',
  ocupação:'deus das comunicações e das viagens',
  },
  {nome:'Hera',
  ocupação:'deusa dos céu,maternidade e matrimônio',
  },
  {nome:'Deméter',
  ocupação:'deus da terra fértil',
  },
  {nome:'Hefesto',
  ocupação:'deus dos ferreiros',
  },
  {nome:'Apolo',
  ocupação:'deus do Sol',
  },
  {nome:'Dionísio',
  ocupação:'deus da festa, do vinho e do prazer',
  },
  {nome:'Afrodite',
  ocupação:'deusa da beleza e do amor',
  },
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
    <View style={(styles.container)}>
      <ScrollView>
      <StatusBar style="auto" />
      <Button title="Zeus" onPress={() => carregar (0)}/>
      <Button title="Poseidon" onPress={() => carregar (1)}/>
      <Button title="Atena" onPress={() => carregar (2)}/>
      <Button title="Ares" onPress={() => carregar (3)}/>
      <Button title="Ártemis" onPress={() => carregar (4)}/>
      <Button title="Hermes" onPress={() => carregar (5)}/>
      <Button title="Hera" onPress={() => carregar (6)}/>
      <Button title="Deméter" onPress={() => carregar (7)}/>
      <Button title="Hefesto" onPress={() => carregar (8)}/>
      <Button title="Apolo" onPress={() => carregar (9)}/>
      <Button title="Dionísio" onPress={() => carregar (10)}/>
      <Button title="Afrodite" onPress={() => carregar (11)}/>


      <Modal visible={visivel} animationType="fade">
        <View>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Button title="Voltar" onPress={() => voltar()}/>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});