const initialUsers = [];

export const Users = (state = initialUsers, action) => {
    switch (action.type) {
        case "ADD_USER":
            return [
                ...state,
                {
                    ...action.payload,
                },
            ];
        case "DELETE_USER":
            return state.filter(({ id }) => id !== action.payload);
        default:
            return state;
    }
};
