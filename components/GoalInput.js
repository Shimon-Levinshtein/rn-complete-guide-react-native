import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEntetedGoal] = useState('');

  const goalImputHandler = enteredText => {
    setEntetedGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEntetedGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContiner}>
        <TextInput placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalImputHandler}
          value={enteredGoal} />
        <View style={styles.ButtonContiner}>
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
        <View style={styles.button}>
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  ButtonContiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  }
});