let newId=0;

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: {id: newId++, ...user},
    };
};

export const deleteUser = (id) => {
    return {
        type: "DELETE_USER",
        payload: id,
    };
};

