import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { resetPassword, resetState } from '../store/slices/forgotPasswordSlice';
import signupImg from '../assets/images/header_image.webp';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { validateEmail } from '../utils/emailValidation';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector((state) => state.forgotPassword);

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!email) {
      setLocalError('Please enter your email address');
      return;
    }

    if (!newPassword || newPassword.length < 4) {
      setLocalError('Password must be at least 4 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    const result = await dispatch(resetPassword({ email, newPassword }));
    if (resetPassword.fulfilled.match(result)) {
      setTimeout(() => {
        dispatch(resetState());
        navigate('/login');
      }, 3000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center font-poppins relative"
      style={{
        backgroundImage: `url(${signupImg})`,
        height: '100vh',
      }}
    >
      <div className="absolute inset-0 bg-blue-900/60"></div>

      <div className="relative w-11/12 max-w-md bg-white/90 rounded-xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
          Reset Password
        </h2>
        <p className="text-center text-yellow-500 font-medium mb-6">
          {success ? 'All done!' : 'Enter your email and new password'}
        </p>

        {success ? (
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Password Reset Successful!</h3>
              <p className="text-gray-700">
                Your password has been reset successfully. You can now login with your new password.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p className="text-sm text-blue-800">
                Redirecting to login page in a few seconds...
              </p>
            </div>
            <Link
              to="/login"
              className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-blue-800 mb-2"
              >
                Email Address <span className="text-yellow-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                onBlur={(e) => {
                  const err = validateEmail(e.target.value);
                  setEmailError(err);
                }}
                placeholder="Enter your registered email"
                className={`w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  emailError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-300 focus:ring-blue-500"
                }`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-semibold text-blue-800 mb-2"
              >
                New Password <span className="text-yellow-500">*</span>
              </label>
              <input
                id="newPassword"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-md border border-blue-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                Password must be at least 4 characters long
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-blue-800 mb-2"
              >
                Confirm Password <span className="text-yellow-500">*</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full rounded-md border border-blue-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {(error || localError) && (
              <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded text-center text-sm">
                {error || localError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !newPassword || !confirmPassword || !email}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </button>

            <div className="text-center">
              <Link
                to="/login"
                className="text-sm text-blue-600 hover:text-blue-500 font-medium inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;


