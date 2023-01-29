import { usePeopleStore } from "../store/peoplestore";

export function PeopleList() {
  const people = usePeopleStore((state) => state.people);
  return (
    <ul>
      {people.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
