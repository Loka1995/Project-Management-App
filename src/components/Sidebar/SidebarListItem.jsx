const SidebarListItem = function SidebarListItem({ projectIndex, project, onSelect }) {
  function clickHandle() {
    onSelect(projectIndex);
  }

  return (
    <li className="hover:text-white w-full hover:bg-stone-900 px-2 py-1 rounded-sm mb-2 transition-all">
      <button onClick={clickHandle} className="text-left" >{project.title}</button>
    </li>
  )
}
export default SidebarListItem;