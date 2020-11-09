export const selectUser = (user) => {
    alert('clicked on: ' + user.firstName);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};

export const addUser = (user) => {
    alert(JSON.stringify(user));
    return {
        type: "USER_ADDED",
        payload: user
    }
};

