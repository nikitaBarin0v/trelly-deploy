import { TaskItem } from "./TaskItem.tsx"
import { useTasks } from "../bll/useTasks.ts"
import styles from './TasksList.module.css'

type Props = {
  selectedTaskId: string | null,
  onTaskSelected: (taskId: string | null, boardId?: string | null) => void,
}

export type TasksListItemOutput = {
  id: string
  task: string | null
  attributes: string | null
}

export function TasksList({onTaskSelected, selectedTaskId}: Props) {
  const {tasks} = useTasks();

  const handleResetClick = () => {
    onTaskSelected(null)
  }

  return (
    <div>
      <button onClick={handleResetClick}>reset</button>
      <ul className={styles.tasks}>
        {tasks && tasks.map((task) => {
          return (
            <TaskItem key={task.id} task={task} isSelected={task.id === selectedTaskId} onTaskSelected={onTaskSelected} />
          )
        }, [])}
      </ul>
    </div>
  )
}