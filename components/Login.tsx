'use client'
import { signIn } from 'next-auth/react'

const Login = () => {
    return (
        <div className="bg-[#313338] h-screen flex items-center justify-center">
            <div className="bg-[#1E1F22] p-12 rounded-3xl shadow-xl flex flex-col items-center space-y-8">
                <img
                    src="/discord-logo.png"
                    className="w-[10rem] object-contain"
                />

                <button
                    onClick={() => signIn('google')}
                    className="font-bold text-white text-xl cursor-pointer hover:bg-[#2B2D31] px-4 py-2 rounded-xl transition duration-200"
                >
                    Login to use Discord
                </button>
            </div>
        </div>
    )
}

export default Login
