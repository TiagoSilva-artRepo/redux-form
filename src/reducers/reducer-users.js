const Users = { all: [], user: {} };
export const usersReducer = (state = Users, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                all: [...state.all, action.payload],
                user: {},
            };
        case "DELETE_USER":
            return {
                ...state,
                all: state.all.filter(({ id }) => id !== action.payload),
            };
        case "EDIT_USER":
            return {
                ...state,
                all: [...state.all],
                user: {...action.payload},
            };
        default:
            return state;
    }
};
