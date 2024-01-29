import { MdEmail } from "react-icons/md";
import { IoMicSharp } from "react-icons/io5";
function App() {


  return (
    <>
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="bg-white w-[60%] h-[80%] rounded-3xl shadow-2xl">
           <div className="flex items-center bg-gray-200 justify-between p-4 rounded-xl">
            
            <div className="flex items-center ml-8 gap-4">
              <MdEmail size={20}/>
               <p className="text-black">Coffee? <span className="text-gray-500">-Mail from Marisa Lu</span></p>
            </div>
            
              
              < IoMicSharp size={20} />
          
           </div>
           <div className="flex justify-between items-center p-4 ml-8">
            <h1 className="text-2xl text-gray-900">Marisa Lu</h1>
            <p className="text-gray-400">Just Now</p>
           </div>
           <div className="text-bold text-3xl text-black ml-12 font-sans">Coffee?</div>
           <div className="p-8 ml-8 grid gap-y-6">
            <h1>Hay Jason,</h1>
            <p className="whitespace-normal ">Was wondering if you'd be interested in meeting my team at Phliz Coffee at 11 AM today. No pressure if you can't make it,although I think you guys  would really get along!</p>
            <h1>Marisa</h1>
           </div>
          
           <div className="p-8 ml-8 flex gap-8">
            <button className="bg-gray-200 hover:bg-gray-500 w-20 p-2 me-2 mb-2 rounded-lg">Reply</button>
            <button className="bg-gray-200 hover:bg-gray-500 w-20 p-2 me-2 mb-2  rounded-lg">Forward</button>
            <button className="bg-gray-200 hover:bg-gray-500 w-20 p-2  me-2 mb-2 rounded-lg">Delete</button>
           </div>
          </div>
        </div>
    </>
  )
}

export default App
