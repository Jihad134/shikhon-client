import React from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { authContext } from '../AuthContext/AuthContext';

const Register = () => {
  const {createUser,profileUpdate}=useContext(authContext)
  const registerOnsubmit=(event)=>{
    event.preventDefault()
    const from=event.target
    const name=from.name.value
    const photoURL=from.photoURL.value
    const email=from.email.value
    const password=from.password.value
   
    createUser(email,password)
    .then(result=>{
      const user=result.user
      console.log(user)
      profileAdded(name,photoURL)
    from.reset()
    })
    .catch(e=>console.error(e))
  }
 
  const profileAdded=(name,photoURL)=>{
    const profile={
      displayName:name,
      photoURL:photoURL
    }
    profileUpdate(profile)
  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={registerOnsubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
        </div>
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
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            
            <h5>Have an account! <Link to='/login' className="label-text-alt link link-hover">please Login</Link></h5>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;