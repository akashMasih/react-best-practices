import React from 'react'

interface props {
    onChange: (val: string) => void,
    submit: (val: object) => void,
    placeholder: string,
    value: string
}

function Input({ onChange, submit, ...rest }: props) {
    return (
        <form className='relative' data-testid="input-container" onSubmit={submit}>
            <input data-testid="input" onChange={(e) => onChange(e.target.value)} type="text" name="text" id="text" className='bg-transparent border px-4 text-white placeholder:text-white rounded-xl w-full py-3 focus:outline-none ' {...rest} />
            <button type='submit' className='absolute right-1.5 top-2.5 bg-blue-950 text-white rounded-xl px-4 py-1'>Create</button>
        </form>
    )
}

export default Input