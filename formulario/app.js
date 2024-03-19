import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Picker, TextInput } from 'react-native-web';
import { Image } from 'react-native-web';
import { CheckBox } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imagem}>
      <Image
        style={styles.image}
        source={require ("../Aula/assets/images/istockphoto-174381856-612x612.jpg")}
      />
      <Text>Nome do usuário</Text>
      </View>
      <View style={styles.dados}>
        <Text>Dados Pessoais</Text>
      
        <TextInput
        style={styles.input}
        placeholder="Digite Seu Nome"
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        placeholder="Digite Seu Telefone"
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        placeholder="Digite Seu Endereço"
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        placeholder="Digite Seu E-mail"
        keyboardType="numeric"
        />

        </View>
        <View style={styles.informacoes}>
          <Text>Outras Informações</Text>
          <Picker style={{height:50,widht:100}}>
            <Picker.Item label="Programar"/>
          </Picker>
          <CheckBox
          style={{alignSelf:"center"}}
          />
          <Text>1</Text>
        </View>

        <View style={styles.textos}>
          <Text>Nome:</Text>
          <Text>Telefone:</Text>
          <Text>Endereço:</Text>
          <Text>Email:</Text>
          <Text>Hobby:</Text>
          <Text>Aceito:</Text>
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
    marginBotton: 15,
  },
  input:{
    width:200,
    height:100,
    borderWidth: 1,
  },
  dados:{
    borderRadius: 15,
    borderWidth:2,
    width:300,
    height:200,
    padding: 15,
  },
  informacoes:{
    borderRadius: 15,
    padding:15,
    borderWidth: 2,
    width:300,
    height:100,
  },
  textos:{
    borderRadius: 15,
    padding:15,
    borderWidth: 2,
    width:300,
    height:150,
  },
  imagem:{
    width:200,
    height:50,
  },
  image:{
    width:100,
    height:100,
    borderRadius:50,
  },
});
