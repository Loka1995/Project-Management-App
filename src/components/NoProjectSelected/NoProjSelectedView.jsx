import viewImage from '../../assets/no-projects.png';

export default function NoProjSelectedView({ onNewProject }) {
  return (
    <div className="w-9/12 flex flex-col justify-center items-center gap-y-4">
      <img src={viewImage} alt="no-project-img" className="size-32" />
      <h2 className="text-yellow-950 text-xl font-bold">No Project Selected</h2>
      <p className="text-yellow-950 opacity-60" >Select a project or get started with a new one</p>
      <button
        className="bg-stone-700 text-stone-400 w-48 px-1 py-2 rounded-md mt-4
       hover:text-white transition-all" onClick={onNewProject}
      >
        Create new project
      </button>
    </div>
  )
}