import { StyleSheet, Text, View, ScrollView, TouchableOpacity , Image} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Titles from '../components/title';

export default function Home({navigation}) {

  return (
            <View style={styles.container}>
              <Titles></Titles>
              <View style={styles.bannerContainer}>
                  <Image source={ require('../assets/data.png')}
                  style={styles.banner}
                  resizeMode='contain'>

                  </Image>

              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("Categori")} style={styles.Button}>
                 <Text  style={styles.ButtonText} >Start</Text>
              </TouchableOpacity>
            </View>

  );
}
const styles = StyleSheet.create({
  banner: {
      height:300,
      width: 300,
      marginBottom: 30,
  },
  bannerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      flex: 1
  }, 
  container: {
      paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%'
  },
  Button: {
      width: '100%',
      backgroundColor:'#7209b7',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 30,
  },
  ButtonText: {
      fontSize: 24, 
      fontWeight: '600',
      color: 'white'
  }
});