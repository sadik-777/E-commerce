import { useEffect, useContext, useState } from 'react';
import { Mycontext } from "../../App";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import Button from '@mui/material/Button';

const SignIn = () => {
    const context = useContext(Mycontext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('')

    useEffect(() => {
        context.setIsHeaderFooterShow(false);
        return () => context.setIsHeaderFooterShow(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-10">

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
                    <p className="text-[13px] text-gray-400 mt-1">Welcome back! Please sign in to your account.</p>
                </div>

                {/* Social Buttons */}
                <div className="flex gap-3 mb-6">
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<FcGoogle size={18} />}
                        sx={{
                            textTransform: 'none',
                            fontSize: '13px',
                            borderColor: '#e0e0e0',
                            color: '#555',
                            borderRadius: '8px',
                            py: 1.2,
                            '&:hover': { borderColor: '#2bbef9', color: '#2bbef9' }
                        }}
                    >
                        Login with Google
                    </Button>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<FaFacebookF size={16} />}
                        sx={{
                            textTransform: 'none',
                            fontSize: '13px',
                            backgroundColor: '#1877f2',
                            borderRadius: '8px',
                            py: 1.2,
                            '&:hover': { backgroundColor: '#0d65d9' }
                        }}
                    >
                        Login with Facebook
                    </Button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                    <hr className="flex-1 border-gray-200" />
                    <span className="text-[12px] text-gray-400">OR</span>
                    <hr className="flex-1 border-gray-200" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-medium text-gray-700">Username *</label>
                        <input
                        value={userName}
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full bg-gray-100 rounded-lg px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#2bbef9] transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-medium text-gray-700">Email Address *</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full bg-gray-100 rounded-lg px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#2bbef9] transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-medium text-gray-700">Password *</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full bg-gray-100 rounded-lg px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#2bbef9] transition-all"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-[13px] text-gray-500 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4" />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="text-[13px] text-[#2bbef9] hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            backgroundColor: '#1a2f6e',
                            borderRadius: '8px',
                            py: 1.5,
                            mt: 1,
                            '&:hover': { backgroundColor: '#2bbef9' }
                        }}
                    >
                        Sign In
                    </Button>
                </form>

                <p className="text-center text-[13px] text-gray-500 mt-6">
                    Don't have an account?{' '}
                    <Link to="/sign-up" className="text-[#2bbef9] font-bold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default SignIn;