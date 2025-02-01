import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import LoginImage from '../assets/images/LoginImg.avif';
import { LockOutlined } from '@ant-design/icons';
import { loginUser } from '../features/LoginFeature';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError(null);
      const data = await loginUser(email, password);
      if (data.success) {
        navigate('/dashboard'); // ✅ Redirect after successful login
      } else {
        setError(data.message);
      }
    } catch (err) {
      // Ensure `err` is a string before assigning it to `setError`
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left: Image Section */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <img src={LoginImage} alt="Login Illustration" className="w-full" />
      </div>

      {/* Right: Login Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 bg-gray-300">
        <div className="max-w-md w-full space-y-8 bg-blue-300 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center">Login</h2>

          {error && <div className="text-red-500 text-center">{error}</div>}

          <div className="flex flex-col space-y-5">
            <InputField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <LoginButton
              text="Sign In"
              icon={<LockOutlined />}
              onClick={handleLogin}
            />
          </div>

          <div className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-blue-500">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
