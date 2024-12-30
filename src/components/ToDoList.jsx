import { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");

  const [task, setTask] = useState([]);

  // Add todo

  const handleClick = () => {
setTask([...task , todo])
setTodo("")
  };

  const handleDel=(item,id)=>{
    const updatedlist = task.filter((elem ,idx) => elem[idx] !== item[id])
    setTask(updatedlist)
  }
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h1>TO-DO LISTS</h1>
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Add todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className="p-4 text-center border border-green-400 rounded-xl "
        />
        <button
          className=" bg-green-600 text-white w-fit p-2 rounded-lg"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      {
        task.map((item,id) => {
            return (
                <> 
            <div className="flex justify-center items-center gap-20">
               <li key={id} className="text-cyan-300 font-bold">{item}</li>
               <button className="h-auto w-fit p-2 rounded-xl bg-red-400 text-white" onClick={()=> handleDel(item,id)}>Delete</button>
            </div>
            </>
            )
        })
      }
    </div>
  );
};

export default ToDoList;
