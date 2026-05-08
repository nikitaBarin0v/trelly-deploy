import { useEffect, useState } from "react";
import type { GlobalTaskListItemJsonApiData } from "../ui/MainPage";
import { getTasks } from "../dal/api";


export function useTasks() {
  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[]>([]);

  useEffect(() => {
      console.log('Loading Effect');
      getTasks().then(json => setTasks(json.data))
  }, [])

  return {tasks}
}