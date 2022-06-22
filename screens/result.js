import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-elements/dist/helpers';



export default function Result({navigation, route}) {
  const {otherParam } = route.params;
  const [isTrue, getResult] = useState();
  console.log(otherParam);

  // function result(){
  //    if (otherParam[0] == otherParam[1]){
  //        getResult("true")
  //    }
  //    else {
  //     getResult("false")
  //    }
  // }
  //  result();

  return (
            // <View style={styles.container}>
            //   <View>
            //       <Text>Result</Text>
            //   </View>
              
            //   <View>
            //       <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            //           <Text>Home</Text>
            //       </TouchableOpacity>
            //   </View>
            // </View>
            <View>
            { otherParam[0] == otherParam[1] ? 
            <View style={styles.containerT}>
              <View style={styles.bannerContainer}>
              <Image source={ require('../assets/success.png')}
                  style={styles.banner}
                  resizeMode='contain'>

                  </Image>
                  <Text style={styles.title}>Success</Text>
              </View>
              <View style={styles.botom}>
                  <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Home")}>
                          <Text style={styles.ButtonText}>Home</Text>
                  </TouchableOpacity>
                 
                </View>
              </View> :
             <View style={styles.containerF}>
               <View style={styles.bannerContainer}>
              <Image source={ require('../assets/bad.png')}
                  style={styles.banner}
                  resizeMode='contain'>

                  </Image>
                  <Text style={styles.title}>Bad answer</Text>
                  <View style={styles.answerContainer}>
                <Text style={styles.answer}> The answer is: {otherParam[1]} </Text>
              </View>
              </View>
              <View style={styles.botom}>
                  <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Home")}>
                          <Text style={styles.ButtonText}>Home</Text>
                  </TouchableOpacity>
                 
                </View>
               </View>}
          </View>

  );
}
const styles = StyleSheet.create({
    banner: {
        height:100,
        width: 100,
    },
    answerContainer:{
      marginTop: 30,
    },
    answer: {
      fontSize: 18,
    },

    bannerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }, 
    containerT:{
      paddingHorizontal: 20,
      height: '100%',
      backgroundColor: '#07f49e',

    },
    containerF:{
      paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%',
      backgroundColor: '#f72585',
    },
    title: {
      fontSize: 36,
      fontWeight: '600',
  },
  botom: {
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
  },
  Button: {
    width: '100%',
    backgroundColor:'grey',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
},
    ButtonText: {
        fontSize: 24, 
        fontWeight: '600',
        color: 'white'
    }, 

  });