import React from 'react';
import { useForm } from "react-hook-form";
import { Gift } from '@styled-icons/octicons/Gift';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/actions/userAction";
import {Navigate} from 'react-router-dom';

function LoginForm(props){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //const users = useSelector(state => state.users);

    const onSubmit = async data => {
        await dispatch(login(data.login, data.password))
    }

    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.clear();
    }, []);

    return(
        <div className="m-auto">
            <form onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-12 gap-2 pb-16">
                <div className="col-start-5 col-span-4 mb-3">
                    <Gift/>
                </div>
                <input
                    className="bg-primary-green rounded-lg col-start-3 col-span-8 py-2 px-4 text-white"
                    {...register("login", { required: true })} />

                <input
                    type="password"
                    className="bg-primary-green rounded-lg col-start-3 col-span-8 py-2 px-4 text-white"
                    {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                    className="bg-primary-green rounded-lg col-start-4 col-span-6 py-2 px-4 text-white"
                    type="submit"
                    value="Connexion"/>
            </form>
            {localStorage.getItem('token') !== null ? <Navigate to="/presents" /> : ''}
        </div>
    )
}

export default LoginForm
