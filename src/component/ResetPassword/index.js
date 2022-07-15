import React from "react";

const ResetPassword = () => {

    return (
        <div style={{marginTop: "170px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input type="password" placeholder="masukkan password baru" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="ulangi password" className="form-control" />
                                </div>

                                <button className="btn btn-primary">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword