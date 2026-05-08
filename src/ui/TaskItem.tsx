import '../App.css';
import type { GlobalTaskListItemJsonApiData } from '../dal/api';
import styles from './TaskItem.module.css';
import clsx from 'clsx';

type Props = {
  task: GlobalTaskListItemJsonApiData
  isSelected: boolean
  onTaskSelected: (taskId: string | null, boardId: string | null) => void
}

export function TaskItem({task, isSelected, onTaskSelected}: Props) {  

  const handleClick = () => {
    if (onTaskSelected) {
      onTaskSelected(task.id, task.attributes.boardId);
    }
  };

  const taskClassName = clsx({
    [styles.task]: true,
    [styles.selected]: isSelected,
    [styles.default]: !isSelected,
    [styles.highPriority]: task.attributes.priority
  })

  const titleClassName = clsx({
    [styles.through]: task.attributes.status,
    [styles.noThrough]: !task.attributes.status
  })

  console.log(task.attributes.status)

  return (
    <li className={taskClassName} onClick={handleClick}>
      <p>Заголовок: <span className={titleClassName}>{task.attributes.title}</span></p>
      <p>Статус: <span><input type="checkbox" defaultChecked={!!task.attributes.status} /></span></p>
      <p>Дата создания задачи: <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></p>
    </li>
  )
}