import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';

export default function Categori({navigation}) {
 

  return (
    <View style={styles.container}>
        <View style={styles.top}>
             <Text style={styles.question} > Select a topic</Text>
        </View>
        <ScrollView style={styles.scrollView}>
             <View style={styles.options}>
                 <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'Sport'})}>
                           <Text style={styles.option}>Sport</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'Art'})}>
                           <Text style={styles.option}>Art</Text>
                </TouchableOpacity> 
                     <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'Geography'})}>
                           <Text style={styles.option}>Geography</Text>
                           </TouchableOpacity> 
                     <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'History'})}>
                           <Text style={styles.option}>History</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'Film'})}>
                           <Text style={styles.option}>Film</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'General'})}>
                           <Text style={styles.option}>General Knwoledge</Text>
                </TouchableOpacity> 
                     <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'Mythology'})}>
                           <Text style={styles.option}>Mythology</Text>
                           </TouchableOpacity> 
                     <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Quiz", { otherParam: 'Music'})}>
                           <Text style={styles.option}>Music</Text>
                     </TouchableOpacity>
                 </View>
        </ScrollView>

        <View style={styles.botom}>
                  <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Home")}>
                          <Text style={styles.ButtonText}>Home</Text>
                  </TouchableOpacity>
                 
                </View>
        
        </View>

            // <View style={styles.container}>
            //         <View style={styles.top}>
            //         <Text style={styles.question} > Select a topic</Text>
            //     </View>
            //     <View style={styles.options}>
            //         <TouchableOpacity style={styles.optionsButton}>
            //                <Text style={styles.option}>Cool Option 1</Text>
            //         </TouchableOpacity>
            //         <TouchableOpacity style={styles.optionsButton}>
            //               <Text style={styles.option}>Cool Option 2</Text>
            //         </TouchableOpacity> 
            //         <TouchableOpacity style={styles.optionsButton}>
            //               <Text style={styles.option}>Cool Option 3</Text>
            //               </TouchableOpacity> 
            //         <TouchableOpacity style={styles.optionsButton}>
            //               <Text style={styles.option}>Cool Option 3</Text>
            //         </TouchableOpacity>
            //     </View>

            // </View>

  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%'
  },
  top: {
      marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  botom: {
    paddingVertical: 16,
    marginBottom: 12,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  Button: {
    width: '100%',
    backgroundColor:'#7209b7',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',


},
    ButtonText: {
        fontSize: 24, 
        fontWeight: '600',
        color: 'white'
    }, 
    question: {
        fontSize: 28,
    },
    option: {
      textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
        color: 'white',

    }, 
    optionsButton: {
        paddingVertical: 12,
        marginVertical: 10,
        backgroundColor: '#4361ee',
        borderRadius: 16,
    },
    parent: {
        height: '100%',
    },
    scrollView: {
      marginTop: 20,

    },

});