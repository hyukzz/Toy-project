import { createSlice } from "@reduxjs/toolkit";
import carData from "../../carData";

const initialState = {
	carData: carData,
	totalQuantity: 0,
	totalValue: 0,
	isLoading: true,
};

const carSlice = createSlice({
	name: "cars",
	initialState: initialState,
	reducers: {
		clearModels: state => {
			state.carData = [];
		},
		increase: (state, action) => {
			const carData = state.carData.find(
				carModel => carModel.id === action.payload.id
			);
			carData.quantity = carData.quantity + 1;
		},

		decrease: (state, { payload }) => {
			const carData = state.carData.find(
				carModel => carModel.id === payload.id
			);
			carData.quantity = carData.quantity - 1;
		},

		removeModel: (state, { payload }) => {
			state.carData = state.carData.filter(
				carModel => carModel.id !== payload.id
			);
		},

		calculateTotalQuantity: state => {
			let totalQuantity = 0;
			let totalValue = 0;
			state.carData.forEach(model => {
				totalQuantity += model.quantity;
				totalValue += model.quantity * model.price;
			});
			state.totalQuantity = totalQuantity;
			state.totalValue = totalValue;
		},
	},
});

export const {
	calculateTotalQuantity,
	clearModels,
	increase,
	decrease,
	removeModel,
} = carSlice.actions;

export default carSlice.reducer;
