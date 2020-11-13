import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCoursedGoals] = useState([]);
  const [isAaaMode, setIsAaaMode] = useState(false);

  const removGoalHendler = goalId => {
    setCoursedGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId );
    });
  };

  const canselGoalAdditionHendler = () => {
    setIsAaaMode(false);
  };


  const addGoalHandler = goalTitle => {
    setCoursedGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAaaMode(false);
  };

  return (
    <View style={styles.screen}>
     <Button title="Add new goal" onPress={() => setIsAaaMode(true)}/> 
      <GoalInput visible={isAaaMode} onAddGoal={addGoalHandler} onCancel={canselGoalAdditionHendler} />
      <FlatList
        keyExtractor={(item, index) => item.id }
        data={courseGoals}
        renderItem={itemData => <GoalItem
          id={itemData.item.id}
          onDelete={removGoalHendler}
          title={itemData.item.value}
        />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});

