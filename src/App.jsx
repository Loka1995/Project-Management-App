import { useRef, useState } from "react";
import AddProject from "./components/AddProject/AddProjects";
import NoProjSelectedView from "./components/NoProjectSelected/NoProjSelectedView";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isAddProject, setIsAddProject] = useState(false);
  const [isHomePageOpen, setIsHomePageOpen] = useState(true);
  const [viewProjectDetails, setViewProjectDetails] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function createProjectHandle() {
    setIsAddProject(() => true);
    setIsHomePageOpen(() => false);
    setViewProjectDetails(() => false);
    setSelectedProjectIndex(() => -1);
  }

  //Handle the input data to enter new project.
  function projectInputHandle() {
    setProjects(prevProjects => {
      const prevProjectsCopy = [...prevProjects];
      prevProjectsCopy.push({
        title: title.current.value,
        description: description.current.value,
        date: date.current.value,
        tasks: []
      });
      return prevProjectsCopy;
    })
    setIsAddProject(() => false);
    setIsHomePageOpen(() => true);
    setSelectedProjectIndex(() => -1);
  }

  //Handle project selection from sidebar.
  function sidebarProjectSelectHandle(projectIndex) {
    setSelectedProjectIndex(() => projectIndex);
    setIsAddProject(() => false);
    setIsHomePageOpen(() => false);
    setViewProjectDetails(() => true);
  }

  // delete the project
  function deleteHandle() {
    setProjects(prevProjects => {
      const updatedProjects = prevProjects.filter((project, index) => index !== selectedProjectIndex);
      return updatedProjects;
    });
    setSelectedProjectIndex(() => -1)
    setViewProjectDetails(() => false);
    setIsAddProject(() => false);
    setIsHomePageOpen(() => true);
  }

  // Add tasks to a project
  function addTaskHandle(task) {
    setProjects(projects => {
      const updatedProjects = projects.map((project, index) => {
        if (index === selectedProjectIndex) {
          return {
            ...project,
            tasks: [...project.tasks, task]
          };
        }
        return project;
      });
      return updatedProjects;
    })
  }

  // Clear tasks of a project 
  function clearTaskHandle(taskIndex) {
    setProjects(projects => {
      const updatedProjects = projects.map((project, index) => {
        if (index === selectedProjectIndex) {
          return {
            ...project,
            tasks: project.tasks.filter((task, taskIn) => taskIn !== taskIndex)
          };
        }
        return project;
      });
      return updatedProjects;
    })
  }

  return (
    <>
      <main className="flex h-screen w-screen">
        <Sidebar
          onNewProject={createProjectHandle}
          projectData={projects}
          onSelect={sidebarProjectSelectHandle}
          activeIndex={selectedProjectIndex}
        />
        {isHomePageOpen &&
          <NoProjSelectedView
            onNewProject={createProjectHandle}
          />}
        {isAddProject &&
          <AddProject
            titleRef={title}
            descriptionRef={description}
            dateRef={date}
            onSave={projectInputHandle}
          />}
        {viewProjectDetails &&
          <ProjectDetails
            selectedProject={projects[selectedProjectIndex]}
            onDelete={deleteHandle}
            onAddTask={addTaskHandle}
            onClear={clearTaskHandle}
          />}
      </main>
    </>
  );
}

export default App;
