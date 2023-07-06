import {View, Text, Modal, Button} from 'react-native'
import { useState } from 'react';
import { styles } from './styles.js'


const ModalList = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const onHandleDelete = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        setIsVisible(false);
    };


    return(
        <View>
        <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task Detail</Text>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
                <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title="Cancel" color="#424D9E" onPress={() => setIsVisible(false)} />
                <Button title="Delete" color="red" onPress={() => onHandleDelete(selectedTask?.id)} />
            </View>
        </View>
        </Modal>
        </View>
    )
}

export default ModalList