import { useState } from "react";

const Todo = () => {
  // State to hold the list of todos
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingText, setEditingText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Add new todo
  function handleAdd() {
    if (!todoText.trim()) return;
    const newTodo = { text: todoText, id: Date.now() };
    setTodos([...todos, newTodo]);
    setTodoText("");
  }

  // Delete todo
  function handleDel(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Start editing todo
  function handleEdit(idx) {
    setEditingIndex(idx);
    setEditingText(todos[idx].text);
  }

  // Update todo after editing
  function handleUpdate() {
    if (!editingText.trim()) return;
    const updatedTodo = todos.map((todo, index) =>
      index === editingIndex ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodo);
    setEditingIndex(null);
    setEditingText("");
  }
  return (
    <div className="bg-slate-700 w-screen h-screen flex  items-center flex-col">
      <h1 className="text-slate-100 font-extrabold text-4xl mt-5">TO DO LIST</h1>

   <div className="mt-5 flex gap-4 justify-center items-center">
   <input
        type="text"
        placeholder="enter task"
        className="p-2 bg-slate-50 rounded-lg w-80 h-14"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />

      <button
        className="p-2 bg-green-600 text-white rounded-lg h-14 w-20"
        onClick={handleAdd}
      >
        ADD
      </button>
   </div>

     
 {/* Display todos list */}
      <ul className="flex justify-center items-center  w-full gap-2 flex-col mt-10">
        <small className="text-xl text-orange-400 font-semibold">My Todo</small>
        {todos.map((todo, idx) => (
          <li key={todo.id} className="mt-2 ">
            {editingIndex === idx ? (
              <div className="flex justify-center items-center gap-4">
                <input
                  type="text"
                  placeholder="Edit Task  "
                   className="p-2 bg-slate-50 rounded-lg w-80 h-14"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button
                  className="p-2 bg-gray-100  text-cyan-400 rounded-lg h-14 w-20 shadow-lg"
                  onClick={handleUpdate}
                >
                  UPDATE
                </button>
                <button
                  className="p-2 bg-gray-100  text-cyan-400 rounded-lg h-14 w-20  shadow-lg"
                  onClick={() => setEditingIndex(null)}
                >
                  CANCEL
                </button>
              </div>
            ) : (
              <div className="w-full  p-4">
                <span className="text-2xl text-slate-50">{todo.text}</span>
              </div>
            )}

<div className="flex justify-center p-2 gap-5 items-center">
<button
              onClick={() => handleEdit(idx)}
              className="p-2 bg-gray-100  text-cyan-400 rounded-lg h-14 w-20 shadow-lg "
            >
              EDIT
            </button>
            <button
              onClick={() => handleDel(todo.id)}
              className="p-2 bg-red-500 rounded-lg h-14 w-20 shadow-lg text-white hover:bg-red-600"
            >
              DEL
            </button>
</div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
