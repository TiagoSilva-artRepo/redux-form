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
                user: { ...action.payload },
            };
        case "UPDATE_USER":
            const updateAll = state.all.map ((user) => {
                return user.id === action.payload.id ? action.payload : user; 
            });
            return {
                ...state,
                all: [...updateAll],
                user: { },
            };
        default:
            return state;
    }
};
