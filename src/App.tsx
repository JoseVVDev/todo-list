import { TaskList } from './components/TaskList';
import { EmptyTask } from './components/EmptyTask';
import { NewTask } from './components/NewTask'
import { Header } from './components/Header'

import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css'
import { useState } from 'react';



interface taskList {
    id: string,
    isDone: boolean,
    description: string,

}

const taskArray: taskList[] = []



export function App() {
    const [newTaskState, setNewTaskState] = useState(taskArray)

    const counter = newTaskState.length

    function createNewTask(taskDescription: string) {
        const task = {
            id: uuidv4(),
            isDone: false,
            description: taskDescription
        }
        setNewTaskState([...newTaskState, task])

    }

    function deleteTask(taskId: string, isDone: boolean) {
        setNewTaskState(newTaskState.filter(task => taskId !== task.id))
    }

    function changeTaskStatus(taskId: string) {
        const updatedStatus = newTaskState.map(tasks => {
            tasks.id === taskId ? tasks.isDone = !tasks.isDone : {}
            return tasks
        })
        setNewTaskState(updatedStatus)
    }

    let countCompleted = newTaskState.reduce((acc, cur) => {
        return cur.isDone === true ? acc + 1 : acc
    }, 0)

    console.log(countCompleted)
    return (
        <div>
            <Header />
            <div className={styles.bodyTodo}>
                <NewTask onCreateNewTask={createNewTask} />
                <div className={styles.tasks}>
                    <div className={styles.taskCounter}>
                        <p>Tarefas Criadas <span> {counter} </span></p>
                        <p>Concluídas {counter > 0 ? <span>{countCompleted} de {counter}</span> : <span> 0 </span>} </p>
                    </div>
                    <div className={styles.taskList}>
                        {
                            counter > 0 ? newTaskState.map(task =>
                                <TaskList
                                    key={task.id}
                                    id={task.id}
                                    isDone={task.isDone}
                                    description={task.description}
                                    onDeleteTask={deleteTask}
                                    onChangeTaskStatus={changeTaskStatus}
                                />) : <EmptyTask /> 

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}