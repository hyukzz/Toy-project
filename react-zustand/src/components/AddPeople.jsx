import { useRef } from "react";
import { usePeopleStore } from "../store/peoplestore";

export const AddPeople = () => {
  const addPeople = usePeopleStore(state => state.addPeople);
  const inputRef = useRef();
  const handleAddPeople = (event) => {
    event.preventDefault();
    addPeople(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleAddPeople}>
      <input ref={inputRef} />
      <button onClick={handleAddPeople}>Add Person</button>
    </form>
  );
};
