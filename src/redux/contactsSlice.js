const initialState = {
    contacts: {
        items: [{ id: '1', name: 'John', number: '655663914' },
                { id: '2', name: 'Ben', number: '655642394' },
                {id: '3', name:'Sam', number:'234234914'}
        ]
	}
}

export const contactsReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'addContact':
            return {
                ...state,
                contacts: {
                ...state.contacts,
                items: [...state.contacts.items, action.payload],
                },
            };
        case 'deleteContact':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items.filter(item => item.id !== action.payload)
                }
            };
        default:
            return state;
    }
};