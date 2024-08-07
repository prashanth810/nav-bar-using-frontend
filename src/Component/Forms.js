import React, { useState } from 'react';


const Forms = () => {
    const [input, setInput] = useState('');
    const [inputerropr, setInputerror] = useState('');
    const [clearerror, setClearerror] = useState('');

    const namechange = (e) => {
        setInput(e.target.value);
        if (e.target.value !== '') {
            setClearerror('');
        }
    };


    const submit = (e) => {
        e.preventDefault()
        if (input === '') {
            setInputerror('Please enter message !!')
        }
        else {
            setInput('');
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', backgroundColor: 'lightblue' }}>
            <form className='p-5'>
                <div class="form-group w-100">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={input} onChange={namechange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    { }
                    {inputerropr && (<p className='text-danger'>{inputerropr}</p>)}
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" value={input} onChange={namechange}>Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    {inputerropr && (<p className='text-danger'>{inputerropr}</p>)}
                </div>
                <button type="submit" onClick={submit} class="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Forms
