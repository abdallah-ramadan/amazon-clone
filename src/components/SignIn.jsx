import React from 'react'

function SignIn() {
    return (
        <div className="tw-w-full tw-border-t-[1px] tw-border-b-[1px] tw-border-[#E7E7E7] tw-py-8">
            <div className="tw-w-64 tw-mx-auto tw-text-center tw-flex tw-flex-col tw-gap-1">
                <p className="tw-text-sm">See Personalised Recommendation</p>
                <a href="/Login">
                    <button className="tw-w-60 tw-ml-3 tw-h-8 tw-text-sm tw-bg-yellow-400 tw-rounded-md tw-py-1 tw-font-semibold tw-cursor-pointer">Sign in</button>
                </a>
                <p className="tw-text-xs">New Customer?
                    <a href="/createAccount">
                        <span className="tw-text-green-600 tw-ml-1 tw-cursor-pointer">Create an Account.</span>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignIn