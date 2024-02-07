import AddTask from "./AddTask";
import TaskList from "./TaskList";
import UserProject from "./UserProject";

export default function ProjectDetails({ selectedProject, onDelete, onAddTask, onClear }) {
  return (
    <div className="w-9/12 px-8 py-24">
      <UserProject project={selectedProject} onDelete={onDelete} />
      <AddTask onAddTask={onAddTask} />
      <TaskList tasks={selectedProject.tasks} onClear={onClear}/>
    </div>
  )
}