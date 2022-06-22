import { StyleSheet, Text, View, ScrollView } from 'react-native';



export default function Titles() {

  return (
            <View style={styles.container}>
              <Text style={styles.title}>Quizzer</Text>
            </View>

  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: "center"
  },
  title: {
      fontSize: 36,
      fontWeight: '600',
  },
});