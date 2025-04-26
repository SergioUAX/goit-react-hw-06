const initialState = {
    filters: {
		name: ""
	}
}

export const filterReducer = (state = initialState, action) => { 
	switch (action.type) {         
		case 'changeFilter':			
            return {
                ...state,
                filters: {
          			...state.filters,
          			name: action.payload
        		}
            };
        default:
            return state;
    }
}