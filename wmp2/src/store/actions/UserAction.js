import axios from 'axios';

export const CHECKCHECK = 'CHECKCHECK';
export const CHECKCHECK_SUCCESSFUL = 'CHECKCHECK_SUCCESSFUL';
export const CHECKCHECK_ERROR = 'CHECKCHECK_ERROR';
export const testItem = () => dispatch => {
    dispatch({type:CHECKCHECK});
    axios
    .get('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants')
    .then(res => 
        dispatch({
            type: CHECKCHECK_SUCCESSFUL,
            payload: res.data.message
        })
    )
    .catch(err => 
        dispatch({
            type:CHECKCHECK_ERROR,
            payload: err
        })
    );

};