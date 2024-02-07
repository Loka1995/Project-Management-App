import TaskListItem from "./TaskListItem";

export default function TaskList({ tasks, onClear }) {
  return (
    <>
      {tasks.length > 0 &&
        <ul className="w-5/6 py-8 px-4 bg-zinc-100 leading-9 text-black rounded-md">
          {tasks.map((task, index) =>
            <TaskListItem key={index} taskName={task} onClear={onClear} taskIndex={index}/>
          )}
        </ul>
      }
      {tasks.length === 0 && <p className="text-black">This project does not have any tasks yet.</p>}
    </>
  )
}