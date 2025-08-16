import React from 'react'

function SignIn() {
    return (
        <div className="w-full border-t-[1px] border-b-[1px] border-[#E7E7E7] py-8">
            <div className="w-64 mx-auto text-center flex flex-col gap-1">
                <p className="text-sm">See Personalised Recommendation</p>
                <a href="/Login">
                    <button className="w-60 ml-3 h-8 text-sm bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer">Sign in</button>
                </a>
                <p className="text-xs">New Customer?
                    <a href="/createAccount">
                        <span className="text-green-600 ml-1 cursor-pointer">Create an Account.</span>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignIn