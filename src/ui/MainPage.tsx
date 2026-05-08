import { useTaskSelection } from "../bll/useTaskSelection.ts";
import { TaskDetails } from "./TaskDetails.tsx";
import { TasksList } from "./TasksList.tsx";
import styles from './MainPage.module.css';

export type GlobalTaskListItemDto = {
  id: string;
  title: string | null;
  boardId: string;
  status: number;
  priority: number;
  addedAt: string;
  attachmentsCount: number;
};

 export type GlobalTaskListItemJsonApiData = {
  id: string;
  type: string;
  attributes: GlobalTaskListItemDto;
};

export function MainPage() {
  const { selectedTaskId, setSelectedTaskId, boardId, setBoardId } = useTaskSelection()

  const handleTaskSelected = (taskId: string | null, boardId?: string | null): void => {
    setSelectedTaskId(taskId);
    setBoardId(boardId ?? null);
  };


  return (
    <div>
      <div className={styles.container}>
        <TasksList selectedTaskId={selectedTaskId} onTaskSelected={handleTaskSelected}  />
        <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId} />
      </div>
    </div>
  )
}