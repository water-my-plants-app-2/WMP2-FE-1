// import axios from 'axios';

// export const FETCH_PLANT_START = 'FETCH_PLANT_START';
// export const FETCH_PLANT_SUCCESS = 'FETCH_PLANT_SUCCESS';
// export const FETCH_PLANT_FAILURE = 'FETCH_PLANT_FAILURE';
// export const DELETE_PLANT_START = 'DELETE_PLANT_START';
// export const DELETE_PLANT_SUCESS = 'DELETE_PLANT_SUCESS';
// export const DELETE_PLANT_FAILURE = 'DELETE_PLANT_FAILURE';

// export const getItems = () => dispatch => {
//   dispatch({ type: FETCH_PLANT_START });
//   axios
//     .get('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants')
//     .then(response =>
//       dispatch({ type: FETCH_PLANT_SUCCESS, payload: response.data })
//     )
//     .catch(error => dispatch({ type: FETCH_PLANT_FAILURE, payload: error }));
//   //     this.setState({ items: data });
// };

// const DeleteURL = 'https://wmp2-back-end.herokuapp.com/api/plantsunp/';

// export const deleteItem = plantId => dispatch => {
//   dispatch({ type: DELETE_PLANT_START });
//   return axios
//     .delete(`${DeleteURL}${plantId}`)
//     .then(response => {
//       dispatch({ type: DELETE_PLANT_SUCESS, payload: response.data });
//     })
//     .catch(error => dispatch({ type: DELETE_PLANT_FAILURE, payload: error }));
// };