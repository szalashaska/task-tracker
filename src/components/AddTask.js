import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [important, setImportant] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task!");
      return;
    }
    onAdd({ text, day, important });

    // Clear the form after submitting
    setText("");
    setDay("");
    setImportant(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text-input">Task*</label>
        <input
          type="text"
          placeholder="Add Task"
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          autoFocus
        />
      </div>
      <div className="form-control">
        <label htmlFor="date-input">Day and Time</label>
        <input
          id="date-input"
          type="datetime-local"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="important-input">Set Important</label>
        <input
          id="important-input"
          type="checkbox"
          checked={important}
          value={important}
          onChange={(e) => setImportant(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
      <span>* required</span>
    </form>
  );
};

export default AddTask;
