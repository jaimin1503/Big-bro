"use client"

import { signup } from "@/actions/user";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:border-blue-500"
					/>
				</div>
				<button onClick={async () => {
					const response = await signup(email, username, password)
					localStorage.setItem("token", response);
					router.push("/")
				}} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default SignUp;
