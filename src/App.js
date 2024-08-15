import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
    const [work, setWork] = useState("");
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
      if(todos?.some(item=>item.id===work?.replace(/\s/g,''))) {
        toast.warn("Cong viec da duoc them vao truoc do!")
      }
      else {
        setTodos(prev => [...prev,{
          id:work?.replace(/\s/g,''),
          job:work
        }])
  
        const elemInput= document.querySelector('.inputvalue')
        setWork("")
        elemInput.focus()
      }
      
    };

    const handleDeleteJob = (id) => {
      setTodos(prev => prev.filter(item=>item.id !== id))
    }

    console.log(todos)

    return (
        <>
          <div className="h-screen flex flex-col gap-8 justify-center items-center">
            <div className="flex gap-8">
                <input
                    type="text"
                    value={work}
                    onChange={(e) => {
                        setWork(e.target.value);
                    }}
                    className="inputvalue outline-none border border-blue-500 px-4 py-2 w-[400px]"
                />

                <button
                    type="button"
                    className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
                    onClick={handleAdd}
                >
                    Add
                </button>
            </div>

            <div>
                <h3 className="font-bold text-xl ">Content:</h3>
                <ul>
                  {todos?.map((todo, index)=> {
                    return (
                      <li key={todo.id} className="flex gap-10 items-center">
                        <span className="my-2">{todo.job}</span>
                        <span 
                          className="my-2 cursor-pointer p-2 hover:text-red-400 font-medium"
                          onClick={() => handleDeleteJob(todo.id) }
                        >
                          X
                        </span>
                      </li>

                    )
                  })}
                </ul>
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </>
    );
}

export default App;
