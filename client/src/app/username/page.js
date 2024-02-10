import React from 'react'

function UserName() {
    return (
        <div className='max-w-md rounded-lg border shadow-sm mx-auto my-10 p-6 border-gray-500'>
            <h1 className='font-bold text-lg text-default'>Set your username</h1>
            <p class="text-sm text-gray-500 mt-2" id="hs-input-helper-text">Enter your prefered username.</p>
            <div className=''>
                <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Username</label>
                <div class="relative">
                    <input type="text" id="hs-validation-name-error" name="hs-validation-name-error" class="py-3 px-4 block w-full border-1 border-default bg-transparent rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="hs-validation-name-error-helper" />
                    <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg class="flex-shrink-0 h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
                    </div>
                </div>
                <p class="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid username</p>
            </div>

            <div>
                <label for="hs-validation-name-success" class="block text-sm font-medium mb-2 dark:text-white">Username</label>
                <div class="relative">
                    <input type="text" id="hs-validation-name-success" name="hs-validation-name-success" class="py-3 px-4 block w-full border-1 border-default bg-transparent rounded-lg text-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="hs-validation-name-success-helper" />
                    <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg class="flex-shrink-0 h-4 w-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                </div>
                <p class="text-sm text-teal-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p>
            </div>
            <div className=''>
                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border-1 border-default text-defualt hover:bg-default hover:text-cream disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Next</button>
            </div>
        </div>
    )
}

export default UserName