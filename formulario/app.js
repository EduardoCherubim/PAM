import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Picker, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
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
        <View>
          <Text>Outras Informações</Text>
          <Picker style={{height:50,widht:150}}>
            <Picker.Item label="Programar"/>
          </Picker>
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
});
