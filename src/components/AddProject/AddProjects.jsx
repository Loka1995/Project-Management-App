import FormHandleBtns from "./FormHandleBtns";
import Input from "./Input";

export default function AddProject({ titleRef, descriptionRef, dateRef, onSave }) {
  return (
    <form className="px-8 w-9/12 py-24">
      <FormHandleBtns onSave={onSave} />
      <Input ref={titleRef} inputId="title" inputName="title" labelName="Title" type="text" />
      <Input ref={descriptionRef} inputId="description" inputName="description" labelName="Description" InputOption="textarea" />
      <Input ref={dateRef} inputId="date" inputName="date" labelName="Due Date" type="date" />
    </form>
  )
}