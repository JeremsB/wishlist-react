import {GET_OTHER_USERS, LOGIN_ERROR, LOGIN_SUCCESS, OTHER_USERS_ERROR} from '../types'
import axios from 'axios'
import React from 'react';

const instance = axios.create({
    baseURL: 'http://localhost:3456',
    headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
})

export const login = (id, pwd) => async dispatch => {

    const res = await instance.post(`/auth/login`,
        {
            login: id,
            password: pwd
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user_id', res.data.user.id);
            localStorage.setItem('user_name', res.data.user.name);
            localStorage.setItem('user_parent_id', res.data.user.parent_id);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: console.log(err),
            })
        });
}

export const getOtherUsers = (current) => async dispatch => {
    await instance.get(`/others/`+current)
        .then((res) => {
            dispatch( {
                type: GET_OTHER_USERS,
                payload: res.data
            })
        }).catch((err) => {
            //console.log(err.response.status);
            dispatch( {
                type: OTHER_USERS_ERROR,
                payload: err,
            })
        });
}
