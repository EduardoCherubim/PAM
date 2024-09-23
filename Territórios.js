import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Pressable, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Cabeçalho</Text>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio}>
              <Text>Mamiferos</Text>
            </Pressable>
          </View>

        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio}>
          <Text>Aves</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio}>
            <Text>Répteis</Text>
            </Pressable>
          </View>
          
        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio}>
          <Text>Anfibios</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio}>
            <Text>Peixes</Text>
            </Pressable>
          </View>
          
        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio}>
          <Text>Outros</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  territorioArea:{
    flex:1,
    flexDirection:'row',
    height:'100%',
    width:'85%',
    margin:10,
  },
  buttonArea:{
    width:'50%',
    height:'100%',
    borderWidth:1,
    marginLeft:'0.5%',
    marginRight:'1%'
  },
  territorio:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    flex:1
  }

});
