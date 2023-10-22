import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, FAB, Card, TextInput, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [columnTitles, setColumnTitles] = useState({
    ToDo: 'To Do',
    InProgress: 'Doing',
    Done: 'Done',
  });

  // Add a state variable to track the current column for adding tasks
  const [currentColumn, setCurrentColumn] = useState('ToDo');

  const addTask = () => {
    if (taskTitle) {
      setTasks([...tasks, { title: taskTitle, column: currentColumn }]);
      setTaskTitle('');
    }
  };

  const moveTask = (taskIndex, direction) => {
    const newTasks = [...tasks];
    const task = newTasks.splice(taskIndex, 1)[0];

    if (direction === 'left') {
      // ...
    } else if (direction === 'right') {
      // ...
    }

    newTasks.splice(taskIndex, 0, task);
    setTasks(newTasks);
  };

  const updateColumnTitle = (column, title) => {
    setColumnTitles({ ...columnTitles, [column]: title });
  };

  // Function to delete a task by its index
  const deleteTask = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Action Log"/>
        </Appbar.Header>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {['ToDo', 'InProgress', 'Done'].map((column) => (
            <Card key={column} style={styles.column}>
              <Card.Title title={columnTitles[column]} />
              <TextInput
                label="Column Title"
                value={columnTitles[column]}
                onChangeText={(text) => updateColumnTitle(column, text)}
              />

              {/* Add an input field for adding tasks to the current column */}
              <TextInput
                label="Add Task"
                value={taskTitle}
                onChangeText={(text) => setTaskTitle(text)}
              />
              <Button onPress={addTask}>Add Task</Button>
              <Button onPress={deleteTask}>Delete Task</Button>


              {tasks
                .filter((task) => task.column === column)
                .map((task, index) => (
                  <Card key={index} style={styles.taskCard}>
                    <Card.Content>
                      <TextInput
                        label="Task"
                        value={task.title}
                        onChangeText={(text) => {
                          const updatedTasks = [...tasks];
                          updatedTasks[index].title = text;
                          setTasks(updatedTasks);
                        }}
                      />
                      <Button onPress={() => moveTask(index, 'left')}>Left</Button>
                      <Button onPress={() => moveTask(index, 'right')}>Right</Button>
                    </Card.Content>
                  </Card>
                ))}
            </Card>
          ))}

          
        </ScrollView>
        <FAB style={styles.fab} icon="plus" onPress={addTask} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8D5E2',

  },
  scrollView: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    margin: 10,
  },
  taskCard: {
    marginVertical: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default KanbanBoard;
