import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Quiz({navigation, route}) {
    const [questions, setQuestions] = useState();
    const [answer, setanswer] = useState();
    const {otherParam } = route.params;
    function getCategoriUrl(otherParam){
      var data = null;
      switch(otherParam) {
 
        case 'Sport':
          data = 'https://opentdb.com/api.php?amount=10&category=21&type=multiple'
          break;
        
        case 'Art':
          data = 'https://opentdb.com/api.php?amount=10&category=25&type=multiple'
          break;
   
        case 'Geography':
          data = 'https://opentdb.com/api.php?amount=10&category=22&type=multiple';
          break;
   
        case 'History':
          data = 'https://opentdb.com/api.php?amount=10&category=23&type=multiple';
          break;
        case 'Film':
          data = 'https://opentdb.com/api.php?amount=10&category=11&type=multiple';
          break;
        case 'General':
            data = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';
            break;
        case 'Mythology':
            data = 'https://opentdb.com/api.php?amount=10&category=20&type=multiple';
            break;
        case 'Music':
          data =  'https://opentdb.com/api.php?amount=10&category=12&type=multiple';
            break;
        default:
          Alert.alert("BAD CATEGORIS");
        }
      return data;
    }
    // function getAnswer(info){
    //   console.log(info)
    //   var data = info.incorrect_answers;
    //   data.push(info.correct_answer);
    //   setanswer(data);
    //   console.log(answer);

    // }
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
    const getQuiz = async ()=> {
      const url = getCategoriUrl(otherParam);
      //console.log('test' + ur  )
        //const url='https://opentdb.com/api.php?amount=10&category=25'
        const res =await fetch(url);
        const data =  await res.json();
        setQuestions(data.results[0]);
        var info = data.results[0].incorrect_answers;
        info.push(data.results[0].correct_answer);
        let result = shuffle(info)
        setanswer(result);
        //console.log(data.results[0])

    };
    useEffect(() => {
        getQuiz();
    }, []);

  return (
            <View style={styles.container}>
                {questions && (
                    <View style={styles.parent}>
                    <View style={styles.top}>
                    <Text style={styles.question} > {questions.question.replace(/&quot;/g, '"')}</Text>
                </View>
                <View style={styles.options}>
                {answer && (
                   <View style={styles.parent}>
                    <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Result", { otherParam: [answer[0], questions.correct_answer]})}>
                           <Text style={styles.option}>{answer[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Result", { otherParam: [answer[1], questions.correct_answer]})}>
                          <Text style={styles.option}>{answer[1]}</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Result", { otherParam: [answer[2], questions.correct_answer]})}>
                          <Text style={styles.option}>{answer[2]}</Text>
                          </TouchableOpacity> 
                    <TouchableOpacity style={styles.optionsButton} onPress={()=>navigation.navigate("Result", { otherParam: [answer[3], questions.correct_answer]})}>
                          <Text style={styles.option}>{answer[3]}</Text>
                    </TouchableOpacity>
                    </View>
                    )
                  }
                </View>
                <View style={styles.botom}>
                  <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Categori")}>
                          <Text style={styles.ButtonText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Result")}>
                    <Text style={styles.ButtonText}>END</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity onPress={()=>navigation.navigate("Result")}>
                    <Text>END</Text>
                  </TouchableOpacity> */}
                </View>
                </View>
                )
                }
            </View>

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
    }, 
    question: {
        fontSize: 28,
    },
    option: {
    fontSize: 18,
    marginHorizontal: 8,
    fontWeight: '600',
        color: 'white'
    }, 
    optionsButton: {
        paddingVertical: 12,
        marginVertical: 10,
        backgroundColor: '#4361ee',
        borderRadius: 16,
    },
    parent: {
        height: '100%'
    }

});