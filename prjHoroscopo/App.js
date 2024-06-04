import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Modal } from 'react-native-web';
import { Button,Image } from 'react-native-web';

export default function App() {
  
const [horoscopo,setHoroscopo] = useState([
  {nome:'Aries',
  dias:'21/03 a 20/04',
  imagem:'require(./assets/images/aries.jpg)',
  leitura:'Hoje o dia tem uma energia de briga, discussão ou muito caos. Tome cuidado com a nutrição',
  caracteristicas:'independencia, ação, coragem, pioneirismo, liderança, fraqueza, auto-afirmativo',
  elemento:'fogo',
  cores:'branco e prata'},
  {nome:'Touro',
  dias: '21/04 a 20/05',
  Imagem: 'touro, jpe',
  Leitura: 'O dia pode trazer desentendimentos se você não tiver uma boa porção de desapego',
  caracteristicas: 'Independência, ação, coragem, pioneirismo, liderança, franqueza',
  elemento: 'Fogo',
  cores: 'branco e prata' 
  }
  ])
  return (
    <View style={(styles.container)}>
      <Button title="Aries" onPress={() => carregar (0)}/>
      <Button title="Touro" onPress={() => carregar (1)}/>

      <Modal visible={visivel} animationType="fade">
        <View>
          <Text>{horoscopo[8].nome}</Text>
          <Text>{horoscopo[0].dias}</Text>
          <Text>{horoscopo[0].Leitura}</Text>
          <Text>{horoscopo[0].imagem}</Text>
          <Button title="Voltar" onPress={() => voltar()}/>
          <Image source={url} style={styles.img}/>
        </View>
      </Modal>

<StatusBar style="auto" />

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
