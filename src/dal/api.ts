

export type GlobalTaskListItemDto = {
  id: string,
  title: string | null,
  boardId: string,
  status: number,
  priority: number,
  addedAt: string,
  attachmentsCount: number,
  description?: string | null,
  boardTitle?: string | null,
  isDone?: boolean
}

export type GlobalTaskListItemJsonApiData = {
  id: string,
  type: string,
  attributes: GlobalTaskListItemDto,
  isDone?: boolean
}

export type GetTasksResponse = {
  data: GlobalTaskListItemJsonApiData[]
}

export type GetTaskResponse = {
  data: GlobalTaskListItemJsonApiData
}

export type GetTaskOutputData = {
  data: GlobalTaskListItemJsonApiData
}

export type TaskDetailsProps = {
  selectedTaskId: string | null
  boardId: string | null
}

const preparesHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) return undefined

  return {
    'api-key': apiKey
  }

}

export const getTask = (selectedTaskId: string, boardId: string): Promise<GetTaskOutputData> => {
  const promise: Promise<GetTaskOutputData> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
      headers: preparesHeaders()
    }).then(res => res.json())
  return promise;
}

export const getTasks = (): Promise<GetTasksResponse> => {
  const promise: Promise<GetTasksResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
    headers: preparesHeaders()
  }).then(res => res.json())
  return promise;
}