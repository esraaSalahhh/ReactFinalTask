import React from 'react';
import { useState } from "react";
import './Todo.css';
import { Container } from 'reactstrap';
import { TodoList } from '../TodoList/TodoList';

export const Todo = () => {
    const [TodoForm, setTodoForm] = useState({
        Task: "",
        id:0,
    });

    const [TaskErrors, setTaskErros] = useState({
        TaskErrors: null,
    });
    const [TodosList, setTodosList] = React.useState([
      ]);
    
    const handleFormChange = (e) => {
        console.log(e.target.value, e.target.name)
        setTodoForm({
            Task: e.target.name === 'Task' ? e.target.value : TodoForm.Task,
        });
        setTaskErros({
            TaskErrors: e.target.name === 'Task' ? (e.target.value.length === 0) ? "this filed is required" : null : TaskErrors.TaskErrors,
                });
    };

    const handleFormSubmit = () => {
        console.log(TodoForm);
        const { Task } = TodoForm;
        setTaskErros({
            TaskErrors: Task.length > 0 ? null : "This field is required",
        });
    };
    return (
        <>
            <Container>
                <div>
                    <p>props.Email</p>
                    <h2>To-Do App!</h2>
                    <br />
                    <input
                        onChange={handleFormChange}
                        placeholder="Enter New Task"
                        name="Task"
                        className={`form-control mt-4 mb-4${TaskErrors.TaskErrors ? "border-danger" : ""
                            }`}
                    />
                <small className="text-danger"> {TaskErrors.TaskErrors}</small>


                <button className="d-block btn btn-info" onClick={handleFormSubmit} onClick={() => {
          setTodosList([
            ...TodosList,
            <TodoList addTask={TodoForm.Task} />
          ]);
        }}>
                    Add
      </button>
      {TodosList}
                </div>
                
            </Container>

        </>
    )


}