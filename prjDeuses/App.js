import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  
const [deus,setDeus] = useState([
  {
  nome:'Nome: Zeus',
  ocupação:'Ocupação: deus dos deuses',
  LocalCulto:'Local que é cultuado:Olímpia',
  Morada:'Morada: Monte Olimpo',
  Clã:'Clã: Olimpianos',
  Cônjuge:'Cônjuge: Hera',
  Romano:'Nome romano: Júpiter'
  },
  {nome:'Poseidon', 
  ocupação:'Ocupação: deus dos mares',
  LocalCulto:'Local que é cultuado: Pilos',
  Morada:'Morada: Mar',
  Clã:'Clã: Olimpianos',
  Cônjuge:'Cônjuge: Anifrite',
  Romano:'Nome romano: Netuno'
  },
  {nome:'Atena',
  ocupação:'deusa da saedoria',
  LocalCulto:'Atenas',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Não teve',
  Romano:'Nome romano: Minerva'
  },
  {nome:'Ares',
  ocupação:'deus da guerra',
   LocalCulto:'Tessália',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Não teve',
  Romano:'Nome romano: Marte'
  },
  {nome:'Ártemis',
  ocupação:'deusa da caça',
   LocalCulto:'Delos',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Não teve',
  Romano:'Nome romano: Diana'
  },
  {nome:'Hermes',
  ocupação:'deus das comunicações e das viagens',
   LocalCulto:'',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Não teve',
  Romano:'Nome romano: Mercúrio'
  },
  {nome:'Hera',
  ocupação:'deusa dos céu,maternidade e matrimônio',
   LocalCulto:'Olímpia',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Zeus',
  Romano:'Nome romano: Juno'
  },
  {nome:'Deméter',
  ocupação:'deus da terra fértil',
   LocalCulto:'Festival mistérios de Elêusis',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Não teve',
  Romano:'Nome romano: Ceres'
  },
  {nome:'Hefesto',
  ocupação:'deus dos ferreiros',
   LocalCulto:'Lemnos',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Afrodite',
  Romano:'Nome romano: Vulcano'
  },
  {nome:'Apolo',
  ocupação:'deus do Sol',
   LocalCulto:'Delfos',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Não teve',
  Romano:'Nome romano: Febo'
  },
  {nome:'Dionísio',
  ocupação:'deus da festa, do vinho e do prazer',
   LocalCulto:'Atenas',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Ariadne',
  Romano:'Nome romano: Baco'
  },
  {nome:'Afrodite',
  ocupação:'deusa da beleza e do amor',
   LocalCulto:'Citera',
  Morada:'Monte Olimpo',
  Clã:'Olimpianos',
  Cônjuge:'Cônjuge: Hefesto',
  Romano:'Nome romano: Vênus'
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
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Zeus" onPress={() => carregar (0)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Poseidon" onPress={() => carregar (1)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Atena" onPress={() => carregar (2)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Ares" onPress={() => carregar (3)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Ártemis" onPress={() => carregar (4)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Hermes" onPress={() => carregar (5)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Hera" onPress={() => carregar (6)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Deméter" onPress={() => carregar (7)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Hefesto" onPress={() => carregar (8)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Apolo" onPress={() => carregar (9)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Dionísio" onPress={() => carregar (10)}/>
      </View>
      <View style={styles.botao}>
      <Button style={(styles.btn)} title="Afrodite" onPress={() => carregar (11)}/>
      </View>


      <Modal visible={visivel} animationType="fade">
        <View>
          <Text>{deus[indiceSelecionado.imagem]}</Text>
          <Text>{deus[indiceSelecionado].nome}</Text>
          <Text>{deus[indiceSelecionado].ocupação}</Text>
          <Text>{deus[indiceSelecionado].LocalCulto}</Text>
          <Text>{deus[indiceSelecionado].Morada}</Text>
          <Text>{deus[indiceSelecionado].Clã}</Text>
          <Text>{deus[indiceSelecionado].Cônjuge}</Text>
          <Text>{deus[indiceSelecionado].Romano}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    justifyContent:'space-between',
  },
  botao:{
justifyContent:'center',
marginTop:40
  },

});
