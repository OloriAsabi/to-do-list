import React, { useState } from "react";
import InputField from "./InputField";
import { Todo } from "./model";
import TodoList from "./TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { IonPage } from "@ionic/react";

const ExploreContainer: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedTodos;

    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <IonPage>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">To Do List</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={(e) => handleAdd(e)}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
        {todos.map((t, index) => (
        <li className="down" key={index}>{t.todo}</li>
      ))}
      </div>
    </DragDropContext>
    </IonPage>
  );
};

export default ExploreContainer;