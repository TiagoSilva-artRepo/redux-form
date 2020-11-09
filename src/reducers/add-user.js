export default function (state=null, action) {
    if (action.type==="USER_ADDED" || action.type==="USER_SELECTED") {
        alert(action.type);
    };
    switch (action.type) {
        case "USER_ADDED":
            alert(action.payload);
            return action.payload;
        case 'USER_SELECTED':
            alert(action.payload.age);
            return action.payload;
        default:
            return state;
    }
}
