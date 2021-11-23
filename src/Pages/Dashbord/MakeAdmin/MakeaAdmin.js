import React, { useState } from 'react';

const MakeaAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://shrouded-harbor-84354.herokuapp.com/users', {
            method: 'PUT',
            headers: {   
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                   setSuccess(true)
                }
            })
        e.preventDefult()
    }
    return (
        <div>
        <h3 className="pt-5 text-white">Make A Admin</h3>
        <form onSubmit={handleAdminSubmit}>
            <div class="input-group mb-3">
                <input type="email"
                    onBlur={handleOnBlur}
                    className="form-control" placeholder="Enter Make A Admin Email" />
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Make Admin</button>
            </div>
        </form>
        {
            success && <div class="alert alert-success" role="alert">
                Admin Make successful!
            </div>
        }
    </div>
    );
};

export default MakeaAdmin;