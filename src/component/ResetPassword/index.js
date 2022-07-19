import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { verifiedLink, resetPassword } from "../../redux/actions/authActions";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { id, token } = useParams();
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  React.useEffect(() => {
    try {
      dispatch(verifiedLink(id, token));
      setValidUrl(true);
    } catch (error) {
      setValidUrl(false);
    }
  }, [dispatch, id, token]);

  const handleSubmit = () => {
    try {
      dispatch(resetPassword(password));
      setError("");
      window.location = "/login";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div style={{ marginTop: "170px" }}>
      <div className="container">
        {validUrl ? (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="masukkan password baru"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="ulangi password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>404 Not Found</h1>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
