import userSlice from '../userSlice';

const actions = userSlice.actions;
export const fetchUserMiddleWare = (param) => {
    return async (dispatch) => {
        try {
            dispatch(actions.userLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const userRes = await resp.json();
            console.log("userRes: ", userRes);
            dispatch(actions.userData(userRes))
        } catch (err) {
            dispatch(actions.userError());
        }
    }
}