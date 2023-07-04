import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import data from './data.js';

export default function App() {
  return (
    
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.container2}>
        {data.map((item) => (
        <Text key={item.id}>{item.name} </Text>
      ))}
          
      </View>
      </SafeAreaView>
      
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight
  },
  container2: {
    backgroundColor:"red",
  }
});
