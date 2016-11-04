// State arg is not app state, only state this reducer is responsible for
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	//must always return non-undefined value;
	return state
}
