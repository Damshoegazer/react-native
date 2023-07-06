import { useState } from "react";
import {View, SafeAreaView, FlatList,} from "react-native";

import { InputTask, TaskItem } from "./components";
import { styles } from "./styles";
import ModalList from "./components/modal";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const [borderColor, setBorderColor] = useState("#C5C9E7");

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  };

  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  };

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandlerCreateTask = () => {
    console.log("onHandlerCreateTask");
    console.warn({ task });
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);

    setTask("");
  };



  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerCreateTask={onHandlerCreateTask}
          onHandlerFocus={onHandlerFocus}
          task={task}
        />
        <FlatList
          data={tasks}
          renderItem={renderItem}
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ModalList />
    </SafeAreaView>
  );
}