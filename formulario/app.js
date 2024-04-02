

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Picker, TextInput } from 'react-native-web';
import { Image } from 'react-native-web';
import { CheckBox } from 'react-native-web';
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState()
  const [telefone, setTelefone] = useState()
  const [endereco, setEndereco] = useState()
  const [email, setEmail] = useState()
  const [aceito, setAceito] = useState("false")
  const [hobby, setHobby] = useState()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imagem}>
      <Image
        style={styles.image}
        source={require ("../AULA/assets/images/images.png")}
      />
      </View>
      <View style={styles.dados}>
        <Text>Dados Pessoais</Text>
      
        <TextInput
        style={styles.input}
        value={nome}
        placeholder="Digite Seu Nome"
        onChangeText={(text) => setNome(text)}
        />

        <TextInput
        style={styles.input}
        value={telefone}
        placeholder="Digite Seu Telefone"
        onChangeText={(text) => setTelefone(text)}
        />

        <TextInput
        style={styles.input}
        value={endereco}
        placeholder="Digite Seu Endereço"
        onChangeText={(text) => setEndereco(text)}
        />

        <TextInput
        style={styles.input}
        value={email}
        placeholder="Digite Seu E-mail"
        onChangeText={(text) => setEmail(text)}
        />

        </View>

        <View style={styles.informacoes}>

          <Text>Hobby</Text>

          <Picker
          selectValue={hobby}
          style={{height:50,widht:100,margin:5}}
          onValueChange={(itemValue, itemIndex) => setHobby(itemValue)}>
            <Picker.Item label="Programar" value="programar"/>
            <Picker.Item label="Correr" value="correr"/>
            <Picker.Item label="Dormir" value="dormir"/>
          </Picker>

          <View style={{
            flexDirection:'row',
            margin: 5,
            height: 30,
            alignItems:'center'
          }}>

          <CheckBox
          value={aceito}
          onValueChange={() => setAceito(!aceito)}
          style={{margin:5}}
          />
            <Text>Aceita os termos de Serviço</Text>
          </View>
        </View>

        <View style={styles.textos}>
          <Text>Nome:{nome}</Text>
          <Text>Telefone:{telefone}</Text>
          <Text>Endereço:{endereco}</Text>
          <Text>Email:{email}</Text>
          <Text>Hobby:{hobby}</Text>
          <Text>Aceitou termos?:{aceito ? "Sim" : "Não"}</Text>
        </View>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
  },
  input:{
    padding:5,
    margin:2,
    borderRadius:10,
    width:"100%",
    height:"100%",
    borderWidth: 0.5,
  },
  dados:{
    margin:10,
    borderRadius: 15,
    borderWidth:2,
    width:300,
    height:200,
    padding: 15,
  },
  informacoes:{
    margin:20,
    borderRadius: 15,
    padding:15,
    borderWidth: 2,
    width:300,
    height:140,
  },
  textos:{
    margin:20,
    borderRadius: 15,
    padding:15,
    borderWidth: 2,
    width:300,
    height:150,
  },
  imagem:{
    padding: 10,
    justifyContent:"center",
    alignItems:"center",
  },
  image:{
    width:150,
    height:150,
    borderRadius:50,
  },
});
