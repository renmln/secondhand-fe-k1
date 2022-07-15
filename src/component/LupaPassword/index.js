import React, { useState } from "react";

const LupaPassword = () => {
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");
    
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const kirim = () => {
    
        if(!email) {
            setError("Email wajib diisi")
        } else {
            
        }
    }

    return (
       <div style={{marginTop: "200px"}}>
       <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card p-4">
                    {
                        error && (
                            <div className="alert alert-danger">
                                <p>{error}</p>
                            </div>
                        )
                    }
                    
                    <div className="card-body">
                        <div className="form-group">
                            <center><h1>Lupa Password</h1></center>
                            <center><p>Silahkan cek email di Kotak Masuk dan SPAM!</p></center>
                            <label>Email</label>
                            <input type="text" placeholder="Masukkan email" className="form-control" value={email} onChange={changeEmail}/>
                        </div>

                        <button className="btn btn-primary" onClick={kirim}>Kirim</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
    }

export default LupaPassword;

