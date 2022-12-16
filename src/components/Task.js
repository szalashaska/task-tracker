import { useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);
  const [editedDate, setEditedDate] = useState(task.day);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!editedTask) {
      alert("Please add a task!");
      return;
    }
    onEdit(task.id, editedTask, editedDate);

    // Clear the form after submitting
    setEdit(false);
  };

  return (
    <div
      className={`task ${task.important ? "important" : ""}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      {!edit ? (
        <>
          <h3>{task.text}</h3>
          <p>{task.day.split("T").join(" at ")}</p>
        </>
      ) : (
        <form className="edit-form" onSubmit={onSubmit}>
          <input
            type="text"
            className="edit-form__input"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            required
          ></input>
          <input
            id="date-input"
            className="edit-form__input"
            type="datetime-local"
            placeholder="Add Day and Time"
            value={editedDate}
            onChange={(e) => {
              setEditedDate(e.target.value);
            }}
          />
          <div>
            <input
              type="submit"
              className="btn"
              value="Edit"
              style={{ backgroundColor: "blue" }}
            />
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "red" }}
              onClick={() => setEdit(false)}
            >
              Close
            </button>
          </div>
        </form>
      )}

      <div className="task-controllers">
        <FaEdit
          onClick={() => setEdit(true)}
          style={{
            color: "blue",
            cursor: "pointer",
            opacity: `${edit ? 0 : 1}`,
            transition: "all 0.3s",
          }}
          title="Edit task"
        />
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
          title="Delete task"
        />
      </div>
    </div>
  );
};

export default Task;
