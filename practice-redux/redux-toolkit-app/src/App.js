import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotalQuantity } from "./features/cars/carSlice";

import Navbar from "./components/Navbar";
import Cars from "./components/Cars";

function App() {
	const { carData } = useSelector(store => store.cars);
	//carData는 carSlice.js에 있는 initialState에서 가져온 것이다.
	//store.cars는 store.js에 있는 cars: carReducer이다.

	const dispatch = useDispatch();
	//useEffect에서 calculateTotalQuantity를 dispatch할 것이다.

	useEffect(() => {
		dispatch(calculateTotalQuantity());
	}, [carData]);
	//useEffect를 통해 carSlice에 있는 데이터가 변경될 때마다 action을 dispatch한다.

	return (
		<>
			<Navbar />
			<Cars />
		</>
	);
}

export default App;
