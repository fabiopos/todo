import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const handleClick = useCallback((e) => {
      e.preventDefault();
      onAdd(task);
      setTask('')
  }, [onAdd, task]);

  return (
    <div className="todo-form-container">
      <label>Task name:</label>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

TodoForm.propTypes = {
  onAdd: PropTypes.func,
};
TodoForm.defaultProps = {};

export default TodoForm;
