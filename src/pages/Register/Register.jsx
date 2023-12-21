import { useForm } from 'react-hook-form';
import Navbar from '../Home/Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from '../../Axios/useAxiosSecure'
import SocialLogin from '../SocialLogin.jsx/SocialLogin';
import { Context } from '../../Context/AllContext';

const Register = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const axiosSecure = useAxiosSecure();

    // Toasts
    const notifyToLogin = () => toast('Please Login to Continue',);
    const notifyServerInput = () => toast('Your info is saved on server',);
  
    const { createUser, updateProfile, logOut } = useContext(Context);
  
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const url = data.photo;
      
        createUser(email, password)
          .then((result) => {
            updateProfile(result.user, {
              displayName: name,
              photoURL: url,
            });
      
            const userData = {
              name: name,
              email: email,
              profile_image: url,
            };
      
            axiosSecure.post('/users', userData)
              .then(response => {
                console.log('Server response:', response);
                notifyServerInput();
                  notifyToLogin(); 
              })
              .catch(error => {
                console.error('Error posting data to server:', error);
              });
              
              logOut() 
            navigate('/Login');
          })
          .catch((error) => {
            const notifyRegisterError = () => toast.error(error.message)
            notifyRegisterError()
            console.error(error);
          });
      };
      

  return (
    <div className="">
        <ToastContainer/>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 rounded shadow-md bg-[#272638] w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h2 className="text-2xl text-[#f7f5f2] font-semibold mb-6">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Email:</label>
                <input
                    type="text"
                    {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^\S+@\S+\.\S+$/i,
                        message: 'Please enter a valid email address',
                    },
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.email ? 'border-red-500' : ''}`}
                />
                {errors?.email && (
                    <span className="text-red-500 text-xs">{errors?.email.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Name:</label>
                <input
                    type="text"
                    {...register('name', {
                    required: 'Name is required',
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.name ? 'border-red-500' : ''}`}
                />
                {errors?.name && (
                    <span className="text-red-500 text-xs">{errors?.name.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Profile Photo (URL):</label>
                <input
                    type="text"
                    {...register('photo', {
                    required: 'Profile photo URL is required',
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.photo ? 'border-red-500' : ''}`}
                />
                {errors?.photo && (
                    <span className="text-red-500 text-xs">{errors?.photo.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Password:</label>
                <input
                    type="password"
                    {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password should be at least 6 characters long',
                    },
                    pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/,
                        message:
                        'Password must contain an uppercase letter and a special character',
                    },
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.password ? 'border-red-500' : ''}`}
                />
                {errors?.password && (
                    <span className="text-red-500 text-xs">{errors?.password.message}</span>
                )}
                </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                {...register('terms', {
                  required: 'You have to accept our terms & conditions',
                })}
              />
              <label className="ml-2 text-sm text-[#f7f5f2]" htmlFor="terms">
                Accept Terms & Conditions
              </label>
              {errors?.terms && (
                <span className="text-red-500 text-xs">{errors?.terms.message}</span>
              )}
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-500 text-[#f7f5f2] py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Register
              </button>
            </div>
            <center className=' my-3'>
            <p className="text-[#D7D7DE]">
              Already have an account?{' '}
              <Link className="text-violet-700" to="/Login">
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
