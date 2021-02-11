import * as TYPES from "../types/product";
import axios from 'axios';
export const getProducts = () => (dispatch) => {
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
        console.log(response);
        dispatch({
            type : TYPES.GET_PRODUCTS,
            payload : response.data
        })
    })
        .catch(function (error) {
            console.log(error);
        });
};

