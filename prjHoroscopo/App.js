import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Modal } from 'react-native-web';

const [horoscopo,setHoroscopo] = useState([
  {nome:'Aries',
  dias:'21/03 a 20/04',
  imagem:'require(./assets/images/aries.jpg)',
  leitura:'Hoje o dia tem uma energia de briga, discussão ou muito caos. Tome cuidado com a nutrição',
  caracteristicas:'independencia, ação, coragem, pioneirismo, liderança, fraqueza, auto-afirmativo',
  elemento:'fogo',
  cores:'branco e prata'},
  {nome:'touro',
  dias:'21/04 a 20/05',
  imagem:'require(./asstes/images/touro.jpg)',
  leitura:'O dia pode trazer desentenimentos'}
])
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
