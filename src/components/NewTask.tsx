import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import styles from './NewTask.module.css'


interface newTask {
    onCreateNewTask: (taskDescription: string) => void
}

interface inputInfo {
    value: string,
    name: string
}

interface inputObject {
    target: inputInfo
}

export function NewTask({onCreateNewTask}: newTask) {

    const [newInput, setNewInput] = useState<inputInfo>()
    const [newDescription, setNewDescription] = useState('')

    const handleDescriptionChange = ({ target: { value, name } }: inputObject) => {
            setNewInput({ value, name }), 
            setNewDescription(value)
        }


    function handleNewTask( event: FormEvent) {
        event.preventDefault();
        onCreateNewTask(newInput?.value!)
        setNewDescription('')
    }


    return (
        <form onSubmit={handleNewTask} className={styles.newTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" value={newDescription} onChange={handleDescriptionChange} name="textDescription" required />
            <button type='submit'> <span>Criar &nbsp;<PlusCircle size={20} weight="bold" /></span></button>
        </form>
    )
}

