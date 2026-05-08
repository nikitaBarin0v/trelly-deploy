import { useTaskDetails } from "../bll/useTaskDetails";
import { type TaskDetailsProps } from "../dal/api";
import styles from './TaskDetails.module.css';

export const TaskDetails = (props: TaskDetailsProps) => {
  const { selectedTaskId, boardId } = props
  const { taskDetails } = useTaskDetails(selectedTaskId, boardId);

  return <div className={styles.task}>
    <h3>Task Details</h3>
    {!taskDetails && !selectedTaskId && 'Task in not selected'}
    {!taskDetails && selectedTaskId && 'Loading...'}
    {taskDetails && selectedTaskId && taskDetails.data.id !== selectedTaskId && 'Loading...'}
    {taskDetails && <div>
        <ul>
          <li>Title: {taskDetails.data.attributes.title}</li>
          <li>boardTitle: {taskDetails.data.attributes.boardTitle}</li>
          <li>Description: {taskDetails.data.attributes.description}</li>
        </ul>  
      </div>
    }
  </div>
}