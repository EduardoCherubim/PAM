import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity, Image } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.view}>
        <Text style={{fontSize:45}}>Jokenpo</Text>
      </View>

      <View style={styles.view}>
        <Text>Placar</Text>
      </View>

      <View style={styles.view}>
        <Text style={{paddingRight:200}}>0</Text>
        <Text>0</Text>
      </View>

      <View style={styles.view}>
        <Image style={{width:150,height:150}}
        source={{uri:"https://w7.pngwing.com/pngs/424/347/png-transparent-question-block-super-mario-icon-thumbnail.png"}}/>
        <Text>VS</Text>
        <Image style={{width:150,height:150}} 
        source={{uri:"https://w7.pngwing.com/pngs/424/347/png-transparent-question-block-super-mario-icon-thumbnail.png"}}/>
      </View>

      <View style={styles.view}>
        <Button style={styles.butao}
        title="Nova Partida"
        color="gray"/>
      </View>

      <View style={styles.view}>
        <TouchableOpacity>
          <Image style={{width:120, height:200}}
          source={{uri:"https://www.playclick.com.br/jogo_jokenpo/img/pedra.png"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{width:100,height:200}}
          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEBk3izn0lexaAO-MHv9xzXYLITSr7G6ZaHo9D212yy9DuUBOkqRkwGUOZoL_SPbp4jM&usqp=CAU"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{width:105,height:200}}
          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYq3zekA2TVgoHVm4yHySKms7HHQePyGX4fjtctPs-N7n5Jy8KyBQHZVpd04WVp6wM3t4&usqp=CAU"}}/>
        </TouchableOpacity>
      </View>
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
  view:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },

});