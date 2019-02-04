import axios from 'axios';

export const CHECKCHECK = 'CHECKCHECK';

export const testItem = () => dispatch => {
    dispatch({type:CHECKCHECK});
    axios
    .get('https://wmp2-back-end.herokuapp.com/api/usersunp/')
}