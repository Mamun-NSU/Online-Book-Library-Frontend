// import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../../css/globalStyles.css';
import { useNavigate } from 'react-router-dom';
import { axiosInstanceLibraryService } from '../../utils/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm  = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = {
        email: data.email,
        password: data.password,
      };

      const resp = await axiosInstanceLibraryService.post('/user/login', userCredential);
      const responseData = resp.data;

      console.log('Response from login:', responseData);
      console.log('UserId from login:', responseData.userId);

      localStorage.setItem('userId', responseData.userId);
      localStorage.setItem('role', responseData.role);
      localStorage.setItem('token', responseData.accessToken);
      toast.success('User LogIn successfully!!!');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="myContainer">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="form-group">
          <h4>Email</h4>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className="form-group">
          <h4>Password</h4>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary"  style={{ marginTop: '20px' }}>
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm ;
