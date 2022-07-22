import { Trash } from 'phosphor-react'
import styles from './TaskList.module.css'


interface taskList {
    id: string,
    isDone: boolean,
    description: string,
    onDeleteTask: (taskId: string, isDone: boolean) => void,
    onChangeTaskStatus: (id: string) => void
}


export function TaskList({ id, isDone, description, onDeleteTask, onChangeTaskStatus }: taskList) {


    function handleChangeTaskStatus(id: string){
        onChangeTaskStatus(id)
    }

    function handleDeleteTask(id: string, isDone: boolean) {
        onDeleteTask(id, isDone)
    }



    return (
        <div className={styles.display}>
            <div className={styles.task}>
                <input type="checkbox" id={id} />
                <label htmlFor={id} onClick={() => handleChangeTaskStatus(id)}></label>
                <p>{description}</p>
                <span onClick={() => handleDeleteTask(id, isDone)} ><Trash size={17} /></span>
            </div>
        </div>
    )
}