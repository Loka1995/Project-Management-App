import { useRef } from "react"

export default function AddTask({ onAddTask }) {
  const input = useRef();

  function addTaskHandle() {
    if(input.current.value) onAddTask(input.current.value);
    input.current.value = '';
  }

  return (
    <div className="w-5/6 text-zinc-700">
      <label htmlFor="task" className="text-3xl font-bold block my-4">Tasks</label>
      <input ref={input} className="bg-stone-300 mb-8 mr-4 rounded-sm p-1 w-80" type="text" id="task" />
      <button onClick={addTaskHandle}>Add Task</button>
    </div>
  )
}