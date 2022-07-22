import { ClipboardText } from 'phosphor-react'
import styles from './EmptyTask.module.css'

export function EmptyTask() {
    return (
        <div className={styles.emptyTaskList}>
            <ClipboardText size={80} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}