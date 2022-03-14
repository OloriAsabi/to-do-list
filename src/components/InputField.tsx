import { IonButton, IonInput, IonPage } from "@ionic/react";
import React, { useRef } from "react";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}
//export const InputField:React.FC<Props> = {} de olur.

export const InputField: React.FC <Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e : any) => setTodo(e.target.value)}
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;