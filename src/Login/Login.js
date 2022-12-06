import { GoogleAuthProvider } from 'firebase/auth';
import {FaGithub, FaGoogle} from 'react-icons/fa'
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthContext/AuthContext';
import { useState } from 'react';
import toast from 'react-hot-toast';


const Login = () => {
  // const [error,setError]=useState()
    const {googleLogin,signInEmailAndPassword,setLoading,GitHubLogin}=useContext(authContext)
    const location=useLocation()
    const form=location.state?.form.pathname || '/'
    const navigete=useNavigate()
    const loginEvenHendalar=(event)=>{
      event.preventDefault()
      const from=event.target
      const email=from.email.value
      const password=from.password.value
      signInEmailAndPassword(email,password)
      .then(result=>{
        const user=result.user
        console.log(user)
        toast.success('login success')
          navigete(form,{replace:true})
          from.reset()
        
        
      })
      .catch(e=>{
        console.error(e)
        // setError(e.message)
        toast.error(e.message)
      })
      .finally(()=>{
        setLoading(false)
      })
    }
    const githubprovider=new GoogleAuthProvider()
    const GithubLogin=()=>{
      GitHubLogin(githubprovider)
      .then(result=>{
        const user=result.user
        console.log(user)
      })
      .catch(e=>{
        console.error(e)
        
      })
    }

    const googleProvider=new GoogleAuthProvider()
    const googleSinIn=()=>{
        googleLogin(googleProvider)
        .then(result=>{
            const user=result?.user
            console.log(user)
        })
        .catch(
          e=>{
            console.log(e)
           
      }
        )
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={loginEvenHendalar}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <h6>Have a new!<Link to='/register' className="label-text-alt link link-hover">please Register</Link></h6>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
        {/* {
        error &&  toast.error('')
        } */}

        </div>
        
      </form>
      <div className="form-control  mx-7">
      <button className="btn btn-primary" onClick={googleSinIn}><FaGoogle className='text-3xl mr-5'></FaGoogle > Sign In With GOOgle</button>
     
        </div>
        <div className="form-control mt-6 mb-3  mx-7">
        <button className="btn btn-primary"  onClick={GithubLogin}><FaGithub className='text-3xl mr-5'></FaGithub> Sign In With GitHub</button>
        </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;