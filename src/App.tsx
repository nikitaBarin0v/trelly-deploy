// import { useEffect, useState } from 'react';
// import './App.css'

// function App() {

//   const [selectedTaskId, setSelectedTaskId] = useState(null);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [tasks, setTasks] = useState(null);
//   const [boardId, setBoardId] = useState(null);

//   useEffect(() => {
//     console.log('Loading Effect');
//     fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
//       headers: {
//         'api-key': 'cd0ba852-5994-421e-9ff9-ba6270d823bf'
//       }
//     }).then(res => res.json())
//       .then(json => setTasks(json.data))
//   }, [])

//   useEffect(() => {
//     fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/` + selectedTaskId, {
//       headers: {
//         'api-key': 'cd0ba852-5994-421e-9ff9-ba6270d823bf'
//       }
//     }).then(res => res.json())
//       .then(json => setSelectedTask(json.data))
//       console.log(boardId);
//   }, [selectedTaskId])

//   if (tasks === null) {
//     return (
//       <h1>Загрузка...</h1>
//     )
//   }

//   if (tasks.length === 0) {
//     return (
//       <h1>Задачи отсутствуют</h1>
//     )
//   }

//   return (
//    <div>
//     <button onClick={() => {
//       setSelectedTaskId(null);
//       setSelectedTask(null);
//     }}>reset...</button>
//     <div style={{
//       display: 'flex',
//       gap: '50px'
//     }}>
//       <ul className={'lists-items'}>
//         {
//           tasks.map((task) => {
//             return (
//               <li key={task.id} className={'border-decor'} style={
//                   selectedTaskId === task.id ? {borderColor: 'blue'} : {borderColor: 'inherit'}
//                 } onClick={() => {
//                   setSelectedTaskId(task.id)
//                   setBoardId(task.attributes.boardId)
//                   console.log(task)
//                   // fetch(`https://trelly.it-incubator.app/api/1.0/boards/${task.attributes.boardId}/tasks/${task.id}`, {
//                   //   headers: {
//                   //     'api-key': 'cd0ba852-5994-421e-9ff9-ba6270d823bf'
//                   //   }
//                   // }).then(res => res.json())
//                   //   .then(json => setSelectedTask(json.data))
//                 }}>
//                 <p>Заголовок: <span className={task.isDone ? 'line-trough' : 'line-none'}>{task.attributes.title}</span></p>
//                 <p>Статус: <span><input type="checkbox" defaultChecked={task.attributes.status} /></span></p>
//                 <p>Дата создания задачи: <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></p>
//               </li>
//             )
//           })
//         }
//       </ul>
//       <div className='border-decor'>
//         <h3>Task Details</h3>
//         {!selectedTask && !selectedTaskId && 'Task in not selected'}
//         {!selectedTask && selectedTaskId && 'Loading...'}
//         {selectedTask && selectedTaskId && selectedTask.id !== selectedTaskId && 'Loading...'}
//         {selectedTask && <div>
//             <ul>
//               <li>Title: {selectedTask.attributes.title}</li>
//               <li>boardTitle: {selectedTask.attributes.boardTitle}</li>
//               <li>Description: {selectedTask.attributes.description}</li>
//             </ul>  
//           </div>
//         }
//       </div>
//     </div>
//    </div>
//   )
// }

// export default App
