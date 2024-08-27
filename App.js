import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [playerwins, setPlayerwins] = useState(0);
  const [machinewins, setMachinewins] = useState(0);
  const [machineChoice, setMachineChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);

  const minJogada = 1
  const maxJogada = 3

  const jogo = (playerSelection) => {
    const machineSelection = Math.floor(Math.random() * (maxJogada - minJogada + 1)) + minJogada
    setPlayerChoice(playerSelection);
    setMachineChoice(machineSelection);

    if (playerSelection === machineSelection) { // EMPATE
        setResultado("EMPATE!");
    } else if // VITÓRIA
    (playerSelection === 1 && machineSelection === 3 ||
      playerSelection === 2 && machineSelection === 1 ||
      playerSelection === 3 && machineSelection === 2){
        setResultado("VITÓRIA!");
        setPlayerwins(playerwins => playerwins + 1);    
    } else {
      setResultado("DERROTA!");
      setMachinewins(machinewins => machinewins + 1);
    }
  };
    
 
  const exibirImagem = (escolha) => {
    switch (escolha) {
      case 1:
        return <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3562/3562093.png' }} style={styles.img} />;
      case 2:
        return <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/12355/12355903.png' }} style={styles.img} />;
      case 3:
        return <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/17392/17392068.png' }} style={styles.img} />;
      default:
        return <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3562/3562093.png' }} style={styles.img} />;    }
  };

  const Reiniciar  = (reiniciar) => {
    setPlayerwins(playerwins => 0);
    setMachinewins(machinewins => 0);
  };
  return (
    <View style={styles.container}>
       <StatusBar style='auto' />
      {/* TÍTULO */}
      <View style={{
        marginBottom: 20,
        margin: '0 auto'
      }}>
        <Text style={{
          fontSize: 35,
          color: '#fff',
          fontSize:65, 
          fontFamily:"League Gothic"
        }}>JOKENPO</Text>
      </View>

      {/* PLACAR */}
      <View>
        <View style={styles.placar}>
        <Text style={{color:'#fff',fontSize:35, fontFamily:"League Gothic"}}> PLACAR </Text>
        <TextInput style={{
          fontSize: 30, 
          fontWeight: 600, 
          color: '#38FFD6', 
          textAlign: 'center',
          width: '100%',                   
          margin: 20, }}
          value={resultado}
          placeholder="RESULTADO"
          maxLength={25}
          editable={false}
          />
        </View>
      </View>

      {/* CONTAGEM */}
      <View style={styles.view}>
        <View style={styles.placar}>
        <Text style={styles.nomes}> JOGADOR </Text>
        <Text style={styles.nomes}> {playerwins} </Text>
        </View>

        <View style={styles.placar}>
        <Text style={styles.nomes}> MÁQUINA </Text>
        <Text style={styles.nomes}> {machinewins} </Text>
        </View>
      </View>

      {/* IMAGENS */}
      <View style={styles.imagens}>
        <View style={{margin:'auto', width:'40%'}}>
          {exibirImagem(playerChoice)}
        </View>
          <Text style={{marginTop: 25,margin: 10, fontSize: 35, color: '#fff'}}>VS</Text>
        <View style={{margin:'auto', width:'40%'}}>
          {exibirImagem(machineChoice)}
        </View>
      </View>

      {/* BOTÃO NOVA PARTIDA*/}
      <View style={styles.viewB}>
      <TouchableOpacity style={styles.botao} onPress={Reiniciar}>
          <View style={styles.btnArea}>
            <Text style={{color:"#fff",fontSize:40, fontFamily:"League Gothic", margin:'auto'}}>Nova Partida</Text>
          </View>
          </TouchableOpacity>
          </View>
      

      {/* JOGO */}
      <View style={styles.jogo}>
        <TouchableOpacity onPress={() => jogo(1)}>
          <Image 
            style={{width:80, height:80, margin: '0 auto'}}
            source={{uri:"https://cdn-icons-png.flaticon.com/128/3562/3562093.png"}}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogo(2)}>
          <Image 
            style={{width:80, height:80,  margin: '0 auto'}}
            source={{uri:"https://cdn-icons-png.flaticon.com/128/12355/12355903.png"}}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogo(3)}>
          <Image style={{width:80, height:80, margin: '0 auto'}}
          source={{uri:"https://cdn-icons-png.flaticon.com/128/17392/17392068.png"}}/>
        </TouchableOpacity>
      </View>
      
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C5AFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  view: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto 2%',
  },
  imagens: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    margin: '0%',
  },
  jogo: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  placar: {
    flex:1,
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    width: '50%'
  },
  nomes: {
    flex:1,
    color: 'white',
    fontSize: 20,
    margin: 15,
  },
  img: {
    width:100,
    height:100,
    margin: 10,
  },
  butao: {
    margin: 10,
  },
  viewB:{
    flex:0.5,
  },
  btnArea:{
    backgroundColor:"#4343FF",
    width:300,
    height:60,
    justifyContent:'center',
    alignContent:'center',
    borderRadius:50,
    borderWidth:2,
  },
});
