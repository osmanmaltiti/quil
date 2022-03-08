import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { IoMailOutline, IoKeyOutline, IoPersonOutline } from 'react-icons/io5';
import { FaHashtag } from 'react-icons/fa';
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/router';

const Sign = () => {
    const [state, setState] = useState(false);
    const signOption = () => state ? <SignUp toggle={() => setState(!state)}/> : <SignIn toggle={() => setState(!state)}/>
  return (
    <div className='w-screen fixed z-30 top-0 flex flex-col h-screen bg-gray-100 items-center justify-center gap-10'>
        <h1 className='text-5xl font-bold bg-cyan-500 p-2 px-8 rounded'>Quil</h1>
        <div className='flex flex-col items-center w-full md:w-[75%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%]'>
            { signOption() }
        </div>
    </div>
  )
}

export default Sign;

const SignIn = (props) => {
    const router = useRouter();
    const validate = (values) => {
        let error = {};
        if(!values.email){
            error.email = 'Required'
        }
        if(!values.password){
            error.password = 'Required'
        }
        return error;
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: async(value) => {
            const { data, error } = await axios.post('http://localhost:3000/api/users/', {
                value, type: 'login'
            });
            error ? alert(error.message) : 
            localStorage.setItem('currentUser', JSON.stringify(data));
            setTimeout(() => router.push('/'), 500);       
        }
    })
    return(
        <>
            <form className='flex flex-col gap-2 w-[90%]' onSubmit={formik.handleSubmit}>
                <label className='flex flex-row items-center w-full border-b-2 border-gray-500'>
                    <IoMailOutline className='text-xl'/>
                    <input type='email' 
                        className='h-10 flex-grow pl-2 bg-transparent focus:outline-none focus:border-black' 
                        placeholder='Enter Email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.errors.email ? <div className='text-sm self-end text-red-600'>{formik.errors.email}</div>: null }
                </label>
                <label className='flex flex-row items-center w-full border-b-2 border-gray-500'>
                    <IoKeyOutline className='text-xl'/>
                    <input type='password' 
                        className='h-10 pl-2 flex-grow bg-transparent focus:outline-none focus:border-black' 
                        placeholder='Enter password'
                        minLength={8}
                        id='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.errors.password ? <div className='text-sm self-end text-red-600'>{formik.errors.password}</div>: null }
                </label>
                <span className='flex flex-row justify-between'>
                    <label htmlFor='rememberMe' className='flex flex-row items-center gap-1 text-sm text-gray-500'>
                        <input id='rememberMe' type='checkbox' 
                            name='rememberMe'
                            value={formik.values.rememberMe}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}/>
                        <p>Remember Me</p>
                    </label>
                    <button className='text-sm text-gray-500 hover:text-black' type='button'>Forgotten password?</button>
                </span>
                <button className='bg-sky-500 w-fit py-1 px-8 mx-auto rounded text-white mt-4'>Log In</button>
            </form>
            <button className='mt-2 underline hover:text-purple-500' onClick={props.toggle}>Don't have an account? Sign up here</button>
            <span className='gap-4 mt-10 grid grid-cols-2'>
                <p className='col-span-2'>Return to recent logins</p>
                <button className='w-[5rem] rounded aspect-square'>
                    <Image src={'/spiderman-avi.jpg'} height={80} width={80} unoptimized objectFit='cover' className='rounded'/>
                </button>
                <button className='w-[5rem] rounded aspect-square'>
                    <Image src={'/kellen-riggin-R1NJgMKPj7Q-unsplash.jpg'} height={80} width={80} unoptimized objectFit='cover' className='rounded'/>
                </button>
            </span>
        </>
    )
}

const SignUp = (props) => {
    const validate = (values) => {
        let error = {};
        if(!values.name){
            error.name = 'Required'
        }
        if(!values.email){
            error.email = 'Required'
        }
        if(!values.password){
            error.password = 'Required'
        }
        if(!values.confirm){
            error.confirm = 'Required'
        }else if(values.confirm !== values.password){
            error.confirm = 'Passwords do not match'
        }
        return error;
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            password: '',
            confirm: ''
        },
        validate,
        onSubmit: async(value) => {
            const { name, email, number, password } = value
            const { data, error } = await axios.post('http://localhost:3000/api/users', {
                value: { name, email, number: `+233${number}`, password }, type: 'signup'
            });
            error ? console.log(error) : 
            localStorage.setItem('currentUser', JSON.stringify(data));
        }
    })
    return(
        <>
            <form className='flex flex-col gap-2 w-[90%]' onSubmit={formik.handleSubmit}>
                <label className='flex flex-row items-center w-full border-b-2 border-gray-500'>
                    <IoPersonOutline className='text-xl'/>
                    <input type='text' 
                        className='h-10 flex-grow pl-2 bg-transparent focus:outline-none focus:border-black' 
                        placeholder='Enter Fullname'
                        id='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.errors.name ? <div className='text-sm self-end text-red-600'>{formik.errors.name}</div>: null }
                </label>
                <label className='flex flex-row items-center w-full border-b-2 border-gray-500'>
                    <IoMailOutline className='text-xl'/>
                    <input type='email' 
                        className='h-10 flex-grow pl-2 bg-transparent focus:outline-none focus:border-black' 
                        placeholder='Enter Email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.errors.email ? <div className='text-sm self-end text-red-600'>{formik.errors.email}</div>: null }
                </label>
                <label className='flex flex-row items-center w-full border-b-2 border-gray-500'>
                    <FaHashtag className='text-xl'/>
                    <input type='number' 
                        className='h-10 flex-grow pl-2 bg-transparent focus:outline-none focus:border-black' 
                        placeholder='Enter Mobile Number (optional)'
                        id='number'
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.errors.number ? <div className='text-sm self-end text-red-600'>{formik.errors.number}</div>: null }
                </label>
                <label className='flex flex-row items-center w-full border-b-2 border-gray-500'>
                    <IoKeyOutline className='text-xl'/>
                    <input type='password' 
                        className='h-10 flex-grow pl-2 bg-transparent focus:outline-none focus:border-black' 
                        placeholder='Enter Password'
                        minLength={8}
                        id='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.errors.password ? <div className='text-sm self-end text-red-600'>{formik.errors.password}</div>: null }
                </label>
                <label className='flex flex-row items-center w-full border-b-2 border-gray-500'>
                    <IoKeyOutline className='text-xl'/>
                    <input type='password' 
                        className='h-10 flex-grow pl-2 bg-transparent focus:outline-none focus:border-black' 
                        placeholder='Confirm Password'
                        id='confirm'
                        value={formik.values.confirm}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.errors.confirm ? <div className='text-sm self-end text-red-600'>{formik.errors.confirm}</div>: null }
                </label>
                <button className='bg-sky-500 w-fit py-1 px-8 mx-auto rounded text-white mt-4' type='submit'>Sign Up</button>
            </form>
            <button className='mt-2 underline hover:text-purple-500' onClick={props.toggle}>Already have an account? Login here</button>
            
        </>
    )

}