import { useEffect } from "react";
import { AddPeople } from "./components/AddPeople";
import { PeopleList } from "./components/PeopleList";
import { useThemeStore } from "./store/themestore";

function App() {
  const dark = useThemeStore((state) => state.dark);
  const toggleDarkMode = useThemeStore(state => state.toggleDarkMode);
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      <button onClick={toggleDarkMode}>Toggle theme</button>
      <h1>People list</h1>
      <AddPeople />
      <PeopleList />
    </>
  );
}

export default App;
