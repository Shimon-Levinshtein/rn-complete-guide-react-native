import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEntetedGoal] = useState('');
  const [courseGoals, setCoursedGoals] = useState([]);

  const goalImputHandler = enteredText => {
    setEntetedGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCoursedGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContiner}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalImputHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={styles.listItem}><Text>{itemData.item.value}</Text></View>
        )}/>
      
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContiner: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

