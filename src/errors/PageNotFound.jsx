import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
        <div class="bg-gray-200">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div class="bg-gradient-to-r from-indigo-900 to-gray-900 shadow overflow-hidden sm:rounded-lg pb-8">
            <div class="border-t border-gray-200 text-center pt-8">
            <h1 class="text-9xl font-bold text-white">404</h1>
            <h1 class="text-6xl font-medium text-white py-8">oops! Page not found</h1>
            <p class="text-2xl pb-8 px-12 text-white font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            <Link to = '/'>
            <button class="bg-gradient-to-r from-indigo-500 to-gray-700 hover:from-indigo-600 hover:to-gray-800 text-white font-semibold px-6 py-3 rounded-md mr-6">
            HOME
            </button>
            </Link>

            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default PageNotFound;