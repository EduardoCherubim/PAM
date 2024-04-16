import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker,TextInput} from 'react-native-web';
import { useState } from 'react';
import { Button } from 'react-native-web';

export default function App() {
  const [valor1, setValor1] = useState()
  const [valor2, setValor2] = useState()
  const [sinal, setSinal] = useState()
  const [resultado, setResultado] = useState(0)

  const Calcular = () => {
    if(sinal=="+"){
      setResultado(parseFloat(valor1) + parseFloat(valor2));
    }  
    else if(sinal=="-"){
      setResultado(valor1 - valor2);
    }
    else if(sinal=="*"){
      setResultado(valor1 * valor2);
    }
    else if(sinal=="/"){
      setResultado(valor1 / valor2);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
       <TextInput
        style={styles.input}
        value={valor1}
        placeholder="primeiro número"
        onChangeText={(Number) => setValor1(Number)}
        />
        <TextInput
        style={styles.input}
        value={valor2}
        placeholder="segundo número"
        onChangeText={(Number) => setValor2(Number)}
        />
      </View>

      <View>
        <Picker
        selectValue={sinal}
        onValueChange={(itemValue, itemIndex) => setSinal(itemValue)}
        style={{height:50,width:150, margin: 20}}>
          <Picker.Item label="+" value="+"/>
          <Picker.Item label="-" value="-"/>
          <Picker.Item label="*" value="*"/>
          <Picker.Item label="/" value="/"/>
        </Picker>
      </View>
      <View>
        <Button 
        title="Calcular" 
        onPress={() => Calcular()} />

        <Text
        style={{margin:30,color:"white",fontSize:30}}
        >
        {resultado}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E18DBD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    justifyContent:'center',
    color:"white",
    margin:10,
    height: 50,
    borderWidth: 1,
    borderRadius:20,
    backgroundColor: "#B48FE3",
    fontSize:25,
    justifyContent:"center",
  },
});
