export const selectUser = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user,
    };
};

export const addUser = (user) => {
    return {
        type: "USER_ADDED",
        payload: user,
    };
};
