import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image
        style={{widht:50, height:50}}
        source={require()}/>
      </View>
      <View>
      
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
