// import axios from 'axios';

// export const CHECKCHECK = 'CHECKCHECK';
// export const CHECKCHECK_SUCCESSFUL = 'CHECKCHECK_SUCCESSFUL';
// export const CHECKCHECK_ERROR = 'CHECKCHECK_ERROR';
// export const testItem = () => dispatch => {
//     dispatch({type:CHECKCHECK});
//     axios
//     .get('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants')
//     .then(res => 
//         dispatch({
//             type: CHECKCHECK_SUCCESSFUL,
//             payload: res.data.message
//         })
//     )
//     .catch(err => 
//         dispatch({
//             type:CHECKCHECK_ERROR,
//             payload: err
//         })
//     );

// };
import axios from 'axios';

export const ADD_PLANT_START = 'ADD_PLANT_START';
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS';
export const ADD_PLANT_FAILURE ='ADD_PLANT_FAILURE';

export const addPlant = plant => dispatch => {
    dispatch({type:ADD_PLANT_START});
    this.setState({isUpdating:false})
    axios
    .post('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants', plant)
    .then(response => {
        dispatch({type: ADD_PLANT_SUCCESS, payload: response.data});
    })
    .catch(error => dispatch({type: ADD_PLANT_FAILURE, payload: error}))
}
