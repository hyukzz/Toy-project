import { useSelector, useDispatch } from "react-redux";
import { clearModels } from "../features/cars/carSlice";

import CarDetail from "./CarDetail";

function Cars() {
	const { carData, totalValue } = useSelector(state => state.cars);
	const dispatch = useDispatch();
	return (
		<section>
			<header>
				<h2 className="text-center font-extrabold text-2xl p-10">
					사용가능한 자동차 모델
				</h2>
			</header>
			<main>
				{carData.map(car => {
					return <CarDetail key={car.id} {...car} />;
					//{...car} 이 스프레드는 carData.js에 있는 데이터 들을 보낸 것이다.
				})}
			</main>
			<footer className="text-center font-extrabold text-2xl p-10">
				<h4>
					Total Value: <span>$ {totalValue.toFixed(0)}</span>
				</h4>
				<button
					className="rounded-lg border-2 border-orange-800 text-xl font-normal w-15 mt-5 p-4"
					onClick={() => dispatch(clearModels())}
				>
					Clear Warehouse
				</button>
			</footer>
		</section>
	);
}

export default Cars;
