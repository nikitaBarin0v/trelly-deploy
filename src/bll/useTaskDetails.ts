import { useEffect, useState } from "react";
import { getTask, type GetTaskOutputData } from "../dal/api";

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
  const [taskDetails, setTaskDetails] = useState<GetTaskOutputData | null>(null);
  const [_isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedTaskId || !boardId) {
      setTaskDetails(null);
      return;
    }

    setIsLoading(true);
    setTaskDetails(null);

      getTask(selectedTaskId, boardId).then(json => {
        setTaskDetails(json)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      })
  }, [selectedTaskId, boardId])

  return {taskDetails}
}