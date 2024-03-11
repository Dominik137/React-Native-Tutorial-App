import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    
      { name: "John", id: "1" },
      { name: "James", id: "2" },
      { name: "Jack", id: "3" },
      { name: "Derrick", id: "4" },
      { name: "Dom", id: "5" },
      { name: "Greg", id: "6" },
      { name: "Emma", id: "7" },
      { name: "Blake", id: "8" },
      { name: "Kim", id: "9" },
      { name: "Katie", id: "10" },
  ])
  

  return (
    <View style={styles.container}>
    <FlatList 
      numColumns={2}
      keyExtractor={(item)=> item.id}
      data={people} 
      renderItem={({ item })=>(
       <Text style={styles.item}>{item.name}</Text> 
      )}
    />
    
    
    
    
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
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
