import { forwardRef } from "react"

const Input = forwardRef(function Input
  ({ InputOption = 'input', inputId, inputName, labelName, ...props }, ref) {
  return (
    <div className="flex flex-col justify-start w-5/6 mb-4">
      <label className="uppercase font-bold text-stone-600" htmlFor={inputId}>{labelName}</label>
      <InputOption ref={ref} id={inputId} name={inputName} {...props}
        className="text-stone-600 bg-stone-200 py-1 px-2 focus:outline-none rounded-sm border-b-2
        border-stone-300 focus:border-zinc-950"
        required
      />
    </div>
  )
})

export default Input;