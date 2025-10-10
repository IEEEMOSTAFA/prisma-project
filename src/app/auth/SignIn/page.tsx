
"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Briefcase, Mail, Lock } from 'lucide-react';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Left Panel - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-indigo-600" />
              </div>
              <span className="text-2xl font-bold text-white">JobHub</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              Post Jobs.<br />Find Talent.<br />Build Teams.
            </h1>
            <p className="text-indigo-100 text-lg">
              Connect with top professionals and grow your business with the right opportunities.
            </p>
          </div>
        </div>
        
        {/* Right Panel - Sign In Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">JobHub</span>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
              <p className="text-gray-600">Sign in to post jobs and find opportunities</p>
            </div>

            <div className="space-y-5">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              {/* Sign In Button */}
              <button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              {/* Social Login */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full"
                >
                  {/* GitHub SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.036c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.307-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.006.403 2.289-1.552 3.295-1.23 3.295-1.23.656 1.653.245 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.617-5.475 5.919.43.37.814 1.096.814 2.212v3.285c0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">GitHub</span>
                </button>
              </div>
              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600 mt-6">
                Don't have an account?{' '}
                <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  Sign up for free
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
