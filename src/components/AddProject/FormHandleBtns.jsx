export default function FormHandleBtns({ onSave }) {
  function saveHandle(event) {
    event.preventDefault();
    onSave();
  }

  return (
    <div className="flex w-5/6 justify-end mb-4">
      <button type="reset" className="py-2 px-1 w-20 bg-inherit rounded-md text-zinc-950">Cancel</button>
      <button onClick={saveHandle} className="py-2 px-1 w-20 bg-zinc-950 rounded-md text-white">Save</button>
    </div>
  )
}