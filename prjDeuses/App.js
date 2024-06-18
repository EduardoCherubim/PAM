
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    <View style={(styles.container)} >
      <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.botao}>
        <TouchableOpacity onPress={() => carregar (0)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://wallpapersmug.com/download/800x600/39e9ad/zeus-god-of-thunder-video-game.jpg"}}
          />
          <Text style={styles.nome}>Zeus</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (1)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfeR0RTXZGXnpnoh5177MffebbF7njQQPyg&s"}}
          />
          <Text style={styles.nome}>Poseidon</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (2)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVemWVZCZQJxUPDJvnpQUpwnybhWsQuLTNlg&s"}}
          />
          <Text style={styles.nome}>Atena</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (3)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZ8pk9ANTLWof8lw56Vqu3LUXyf7r9ROelg&s"}}
          />
          <Text style={styles.nome}>Ares</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (4)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4BaZRNW_AYpH9yrRomfEEmx7YKCckw-Siw&s "}}
          />
          <Text style={styles.nome}>Ártemis</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (5)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7Ufb_v1PE-G2UKis4MWHM0cQu28NiK8uww&s"}}
          />
          <Text style={styles.nome}>Hermes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (6)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_qI_5WOdWRYLCq28eklqaL0gK64mV3blwQ&s"}}
          />
          <Text style={styles.nome}>Hera</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (7)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW1yVeSkR6cLFrwRa0wrm8uWXK2kfz2IF0w&s"}}
          />
          <Text style={styles.nome}>Deméter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (8)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFJSCkS7nziy10HkH8OGcCUWkTcsnPzj90w&s"}}
          />
          <Text style={styles.nome}>Hefesto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (9)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://images.nightcafe.studio/jobs/Mp0PyP2iwpRfJ5409lFT/Mp0PyP2iwpRfJ5409lFT--1--s9ojr.jpg?tr=w-1600,c-at_max "}}
          />
          <Text style={styles.nome}>Apolo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (10)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://t4.ftcdn.net/jpg/05/77/72/39/360_F_577723938_BjYYTi8fnlqCK18XYTtkbNgsgbfQIYgE.jpg"}}
          />
          <Text style={styles.nome}>Dionísio</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <TouchableOpacity onPress={() => carregar (11)}>
          <Image
            style={{width:200, height:200}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IEwekNjk-8QNkAw_tEVJC_3xx4G-raeZaA&s"}}
          />
          <Text style={styles.nome}>Afrodite</Text>
        </TouchableOpacity>

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
