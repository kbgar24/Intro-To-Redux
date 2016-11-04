//action creator
export function selectBook(book){
	// console.log('A book has been selected: ', book.title);
	//selectBook is an ActionCreator, needs to return an action, 

	//an object with a type prop -0> describes purpose of action
	//up
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}

}