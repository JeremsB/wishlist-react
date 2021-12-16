import React from 'react';
import { useForm } from "react-hook-form";
import { Gift } from '@styled-icons/octicons/Gift';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGames} from "../store/actions/gamesAction";


function Login(props){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Login());
    }, [dispatch]);

    console.log(watch("example")); // watch input value by passing the name of it
    return(
        <div className="m-auto">
            <form onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-12 gap-2 pb-16">
                <div className="col-start-5 col-span-4 mb-3">
                    <Gift/>
                </div>
                {/* include validation with required or other standard HTML validation rules */}
                <input
                    className="bg-primary-green rounded-lg col-start-3 col-span-8 py-2 px-4 text-white"
                    {...register("login", { required: true })} />

                <input
                    className="bg-primary-green rounded-lg col-start-3 col-span-8 py-2 px-4 text-white"
                    {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                    className="bg-primary-green rounded-lg col-start-4 col-span-6 py-2 px-4 text-white"
                    type="submit"
                    value="Connexion"/>
            </form>
        </div>
    )
}

export default Login
