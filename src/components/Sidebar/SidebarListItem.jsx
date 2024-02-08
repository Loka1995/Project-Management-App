const SidebarListItem = function SidebarListItem({ projectIndex, project, onSelect, active }) {
  function clickHandle() {
    onSelect(projectIndex);
  }

  const activeClass = active ? "bg-stone-900 text-white" : "";

  return (
    <li className={`hover:text-white w-full hover:bg-stone-900 px-2 py-1 rounded-sm mb-2 
    transition-all ${activeClass}`}>
      <button onClick={clickHandle} className="text-left" >{project.title}</button>
    </li>
  )
}
export default SidebarListItem;