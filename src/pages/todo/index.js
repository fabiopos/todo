import React, { useCallback, useState } from "react";
import "./todo.css";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const onAdd = useCallback(
    (task) => setTasks([...tasks, { name: task, completed: false }]),
    [tasks]
  );
  const onChange = useCallback(
    (e, index) => {
      const copy = [...tasks];
      copy[index].completed = e.target.checked;
      setTasks([...copy]);
    },
    [tasks]
  );
  return (
    <div className="todo-main">
      <TodoForm onAdd={onAdd} />
      <div className="todo-tasks-container">
        <h3>Task List</h3>
        <div className="tasks-items-container">
          <ul>
            {tasks.map((task, index) => (
              <li key={`task-${index}`}>
                <span className={`${task.completed && 'completed'}`}> {task.name} </span>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => onChange(e, index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Todo;
