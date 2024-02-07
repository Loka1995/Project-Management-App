const SidebarListItem = function SidebarListItem({ project, onSelect }) {
  function clickHandle() {
    onSelect(project.projID);
  }

  return (
    <li className="hover:text-white w-full hover:bg-stone-900 px-2 py-1 rounded-sm mb-2 transition-all">
      <button onClick={clickHandle} className="text-left" >{project.title}</button>
    </li>
  )
}
export default SidebarListItem;