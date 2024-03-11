import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    
      { name: "John", key: "1" },
      { name: "James", key: "2" },
      { name: "Jack", key: "3" },
      { name: "Derrick", key: "4" },
      { name: "Dom", key: "5" },
      { name: "Greg", key: "6" },
      { name: "Emma", key: "7" },
      { name: "Blake", key: "8" },
      { name: "Kim", key: "9" },
      { name: "Katie", key: "10" },
  ])
  

  return (
    <View style={styles.container}>
    {/* <ScrollView>
      {people.map((peps)=>{
        return(
          <View key={peps.key}>
            <Text style={styles.item}>{peps.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
