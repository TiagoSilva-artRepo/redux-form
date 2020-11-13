let newId = 0;

export const addUser = (user) => {
    if (user.id === undefined) {
        return {
            type: "ADD_USER",
            payload: { id: newId++, ...user },
        };
    } else {
        return {
            type: "UPDATE_USER",
            payload: { ...user },
        };
    }
};

export const deleteUser = (id) => {
    return {
        type: "DELETE_USER",
        payload: id,
    };
};

export const editUser = (user) => {
    return {
        type: "EDIT_USER",
        payload: user,
    };
};
