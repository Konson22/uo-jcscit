

export default function UploadFiles() {
  return (
    <div className="p-4">
        <h2 className="text-xl">Upload rescource</h2>
        <form>
            {formFields.map(field => (
                <div className="mb-4">
                    <input className="h-[3rem] w-full px-3 bg-gray-100 rounded" type="text" placeholder={field.placeholder} />
                </div>
            ))}
        </form>
    </div>
  )
}


const formFields = [
    {name:'', placeholder:'Rescource'},
    {name:'', placeholder:'Rescource'},
    {name:'', placeholder:'Rescource'},
    {name:'', placeholder:'Rescource'},
]