import { formatMyDate } from "../../util/timeFormatter";

export default function UserProject({ project, onDelete }) {
  function deleteClickHandle() {
    onDelete(project.projID);
  }

  return (
    <div className="w-5/6 text-zinc-700 border-stone-300 border-b-2 border-solid">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <button onClick={deleteClickHandle}>Delete</button>
      </div>
      <p className="text-zinc-400 mb-4">{formatMyDate(project.date)}</p>
      <p className="whitespace-pre-wrap mb-2 leading-10 w-5/6">
        {project.description}
      </p>
    </div>
  )
}