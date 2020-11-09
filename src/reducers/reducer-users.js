const initialUsers = [{}];

export const Users = (state = initialUsers, action) => {
    switch (action.type) {
        case "USER_ADDED":
            return [
                ...state,
                {
                    ...action.payload,
                },
            ];
        case "USER_SELECTED":
            return state;
        default:
            return state;
    }
};
