import {GET_NEP, GET_ENG, LANG} from './types';
import axios from 'axios';

export const getEn = () => (dispatch, getState) => {
	//console.log('Action called')
    axios
        .get('http://127.0.0.1:5000/en')
        .then((res) => {
            dispatch({
                type: GET_ENG,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

export const getNp = () => (dispatch, getState) => {
    //console.log('Action called')
    axios
        .get('http://127.0.0.1:5000/np')
        .then((res) => {
            dispatch({
                type: GET_NEP,
                payload: res.data,
                isLoading:false
            });
        })
        .catch((err) => console.log(err));
};

export const langChange = () => (dispatch, getState) => {
            dispatch({
                type: LANG 
            });
};