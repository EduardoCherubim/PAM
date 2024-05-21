import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { TouchableOpacity, Image } from 'react-native-web';

export default function App() {

const [impressao, setimpressao] = useState("");
const [img, setimg] = useState(0);

const frases = [
'Acredite em si mesmo e você será imparável.',
'Sonhos são caminhos construídos pelo coração.',
'Impossível é uma palavra que serve só de enfeite no dicionário.',
'Você é beleza, luz e força.',
'Dias nublados guardam o sol atrás deles.',
'Permita que o seu corpo descanse.',
'É tão bonita a força que você emana.',
'Olhe para o céu e escute as mensagens de Big Bang para hoje!'
];

function quebrar(){
if(img == 0){
  let numAleatorio = Math.floor(Math.random() * frases.length);
  setimpressao(frases[numAleatorio])
  setImg(1)
}
}

function novo(){
  setimpressao(frases[''])
  setImg(0)
}

function exibirimagem(numero){
if(numero==0){
  return(<Image source={require('./assets/images/Biscoito.png')} style={styles.img}/>)
}else{
  return (<Image source={require('./assets/images/BiscoitoAberto.png')} style={styles.img}/>)
}
}


  return (
    <View style={styles.container}>
      <View style={{borderWidth:1,flex:2, justifyContent:'center', width:'100%', alignItems:'center'}}>
      {exibirimagem(img)}
      </View>
      <View style={{borderWidth:1,flex:2, justifyContent:'center', width:'100%', alignItems:'center', backgroundColor:'#FFA451'}}>
      <Text style={styles.textofrase}>{impressao}</Text>
      </View>

      <View style={{borderWidth:1,flex:2, justifyContent:'center', width:'100%', alignItems:'center'}}>
      <TouchableOpacity style={styles.botao} onPress={()=>quebrar()}>

      <View style={styles.btnArea}>

      <Text style={styles.btnTexto}>Quebrar Biscoito</Text>

      </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={()=>novo()}>

      <View style={styles.btnArea}>

        <Text style={styles.btnTexto}>Novo Biscoito</Text>

      </View>

      </TouchableOpacity>
      </View>
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:250,
    width:250,
  },
  textofrase:{
    fontSize:20,
    color:'#000',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    margin:5,
  },
  btnArea:{
    flex:1,
    borderWidth:2,
    borderRadius:25,
    borderColor:'#CC721F',
    alignItems: 'center',
    alignContent:'center'
  },

  btnTexto:{
    color:'#dd7b22',
    fontSize:18,
    fontWeight: 'bold'
  },

});
