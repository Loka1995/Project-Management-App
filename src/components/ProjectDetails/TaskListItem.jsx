export default function TaskListItem({ taskIndex, taskName, onClear }) {
  function clearHandle() {
    onClear(taskIndex);
  }

  return (
    <li className="flex justify-between">
      <p>{taskName}</p>
      <button onClick={clearHandle}>Clear</button>
    </li>
  )
}