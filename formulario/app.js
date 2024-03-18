import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Picker, TextInput } from 'react-native-web';
import { Image } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imagem}>
      <Image
        style={{width:50,height:50}}
        source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fbr%2Fvector%2Fuser-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group-406452666.html&psig=AOvVaw23fGlUkrf2957B-DPl6sWe&ust=1710872835934000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDgoLy4_oQDFQAAAAAdAAAAABAJ"}}
      />
      </View>
      <View style={styles.dados}>
        <Text>Dados Pessoais</Text>
      
        <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
        />

        </View>
        <View style={styles.informacoes}>
          <Text>Outras Informações</Text>
          <Picker style={{height:50,widht:100}}>
            <Picker.Item label="Programar"/>
          </Picker>
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
  },
  input:{
    width:200,
    height:100,
    borderWidth: 1,
  },
  dados:{
    borderWidth:2,
    width:300,
    height:200,
    padding: 15,
  },
  informacoes:{
    padding:15,
    borderWidth: 2,
    width:300,
    height:100,
  },
  textos:{
    padding:15,
    borderWidth: 2,
    width:300,
    height:150,
  },
});
