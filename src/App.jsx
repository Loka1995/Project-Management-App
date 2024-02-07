import { useRef, useState } from "react";
import AddProject from "./components/AddProject/AddProjects";
import NoProjSelectedView from "./components/NoProjectSelected/NoProjSelectedView";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Sidebar from "./components/Sidebar/Sidebar";

function reAssignID(projects) {
  for (let i = 0; i < projects.length; i++) {
    projects[i].projID = i + 1;
  }
}

function App() {
  const [isAddProject, setIsAddProject] = useState(false);
  const [isHomePageOpen, setIsHomePageOpen] = useState(true);
  const [viewProjectDetails, setViewProjectDetails] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(0);
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function createProjectHandle() {
    setIsAddProject(true);
    setIsHomePageOpen(false);
    setViewProjectDetails(false);
  }

  //Handle the input data to enter new project.
  function projectInputHandle() {
    setProjects(prevProjects => {
      const prevProjectsCopy = [...prevProjects];
      prevProjectsCopy.push({
        projID: prevProjectsCopy.length + 1,
        title: title.current.value,
        description: description.current.value,
        date: date.current.value,
        tasks: []
      });
      return prevProjectsCopy;
    })
    setIsAddProject(false);
    setIsHomePageOpen(true);
  }

  //Handle project selection from sidebar.

  function sidebarProjectSelectHandle(projectID) {
    setSelectedProject(() => projectID);
    setIsAddProject(false);
    setIsHomePageOpen(false);
    setViewProjectDetails(true);
  }

  // delete the project
  function deleteHandle(projectID) {
    setProjects(prevProjects => {
      const updatedProjects = prevProjects.filter(project => project.projID !== projectID);
      return updatedProjects;
    });
    setSelectedProject(0);
    setIsAddProject(false);
    setIsHomePageOpen(true);
    setViewProjectDetails(false);
  }

  // Add tasks to a project
  function addTaskHandle(task) {
    setProjects(projects => {
      const updatedProjects = projects.map(project => {
        if (project.projID === selectedProject) {
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
      const updatedProjects = projects.map(project => {
        if (project.projID === selectedProject) {
          return {
            ...project,
            tasks: project.tasks.filter((task, index) => index !== taskIndex )
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
            selectedProject={projects[selectedProject - 1]}
            onDelete={deleteHandle}
            onAddTask={addTaskHandle}
            onClear={clearTaskHandle}
          />}
      </main>
    </>
  );
}

export default App;
