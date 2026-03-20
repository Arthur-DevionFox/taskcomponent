import { TaskCard } from './components/TaskCard/TaskCard';
import type { Task } from './types/task';

function App() {
  const tasks: Task = 
  {
    title: "Настроить авторизацию",
    description: "Реализовать вход по email и паролю с валидацией",
    priority: "high",
    status: "todo",
  }
;

  return (
    <>
      <section id="center">
        <div className='app'>
          <h1 className='app-title'>Task Card</h1>
        </div>
        <TaskCard task={tasks}/>
      </section>
    </>
  )
}

export default App
