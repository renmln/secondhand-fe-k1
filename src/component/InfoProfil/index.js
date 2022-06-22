import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../../images/fi_arrow-left.png";
import Rectangle127 from "../../images/Rectangle127.svg";
import Group1 from "../../images/Group_1.png"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function InfoProfil() {
  const [name, setName] = useState("");
  const [photo_profile, setPhoto_profile] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [no_hp, setNo_hp] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/v1/profile/update/${id}`, {
        name: name,
        photo_profile: photo_profile,
        city: city,
        address: address,
        no_hp: no_hp
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8000/api/v1/users/${id}`);
    console.log(response)
    setName(response.data.name);
    setPhoto_profile(response.data.photo_profile);
    setCity(response.data.city);
    setAddress(response.data.address);
    setNo_hp(response.data.no_hp);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light d-inline-flex"
        style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="d-inline-flex" style={{ padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <a className="navbar-brand" href='/'> <img src={Rectangle127} alt='' />
          </a>
        </div>

        <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-brand mb-0 h1" style={{ fontWeight: '400px' }}>Lengkapi info Akun</span>
        </div>

        <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-brand mb-0 h1"></span>
        </div>
      </nav>


      <section>
        <form onSubmit={updateUser}>
          <div className="container" style={{ padding: '30px', width: '70%' }}>
            <a href="/"> <img src={arrow} alt="" /></a>
            <label for="file-input" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <img src={Group1} alt="" />
            </label>
            <input
              id='file-input'
              type="file"
              style={{ display: 'none' }}
              accept=".jpg,.jpeg,.png"
              value={photo_profile}
              onChange={(e) => setPhoto_profile(e.target.value)}

            />
            <div className="mb-3">
              <label for="nama" className="form-label">Nama<span style={{ color: 'red}' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="nama" placeholder="Nama"
                required
                style={{ borderRadius: '16px' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="kota" className="form-label">Kota<span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="kota" placeholder="Kota"
                required
                style={{ borderRadius: '16px' }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {/* <select className="form-select" id="kota" required style={{ borderRadius: '16px' }}>
                <option selected>Pilih Kota</option>
                <option value="1"> Jakarta</option>
                <option value="2"> Surabaya</option>
                <option value="3"> Bandung</option>
              </select> */}
            </div>
            <div className="mb-3">
              <label for="alamat" className="form-label">Alamat<span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="alamat"
                placeholder="contoh: Jalan Ikan Hiu 33"
                required
                style={{ borderRadius: '16px' }}
                value={address}
                onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="mb-3">
              <label for="nohp" className="form-label">No. Handphone<span style={{ color: 'red' }}>*</span></label>
              <input
                type="number"
                min='11'
                className="form-control"
                id="nohp"
                placeholder="contoh: 08123456789"
                required
                style={{ borderRadius: '16px' }}
                value={no_hp}
                onChange={(e) => setNo_hp(e.target.value)} />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#7126B5', borderRadius: '16px' }}>
                Simpan
              </button>
            </div>
          </div>
        </form>
      </section>

    </div>
  )
}