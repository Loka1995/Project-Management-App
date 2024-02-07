import SidebarListItem from "./SidebarListItem";

export default function Sidebar({ onNewProject, projectData, onSelect }) {
  return (
    <aside className="flex flex-col p-8 bg-zinc-950 h-screen w-3/12 mt-8 rounded-tr-xl">
      <h2 className="text-white text-2xl py-8 uppercase">Your Projects</h2>
      <button
        className="bg-stone-700 text-stone-400 w-32 px-1 py-2 rounded-md mb-8 hover:text-white 
        transition-all" onClick={onNewProject}
      >
        <span>&#43;</span>Add Project
      </button>
      <ul className="text-stone-400 w-full overflow-y-auto">
        {projectData.map((project, index) => {
          if (project.title !== '' && project.description !== '' && project.date !== '') {
            return <SidebarListItem
              key={index}
              project={project}
              onSelect={onSelect}
            />
          }
        })}
      </ul>
    </aside>
  )
}