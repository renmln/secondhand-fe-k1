import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../../images/fi_arrow-left.png";
import Rectangle127 from "../../images/Rectangle127.svg";
import Group1 from "../../images/Group_1.png"

export default function InfoProfil() {
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
        <form>
          <div className="container" style={{ padding: '30px', width: '70%' }}>
            <a href="/"> <img src={arrow} alt="" /></a>
            <label for="file-input" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <img src={Group1} alt="" />
            </label>
            <input id='file-input' type="file" style={{ display: 'none' }} accept=".jpg,.jpeg,.png" />
            <div className="mb-3">
              <label for="nama" className="form-label">Nama<span style={{ color: 'red}' }}>*</span></label>
              <input type="text" className="form-control" id="nama" placeholder="Nama" required style={{ borderRadius: '16px' }} />
            </div>
            <div className="mb-3">
              <label for="kota" className="form-label">Kota<span style={{ color: 'red' }}>*</span></label>
              <select className="form-select" id="kota" required style={{ borderRadius: '16px' }}>
                <option selected>Pilih Kota</option>
                <option value="1"> Jakarta</option>
                <option value="2"> Surabaya</option>
                <option value="3"> Bandung</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="alamat" className="form-label">Alamat<span style={{ color: 'red' }}>*</span></label>
              <input type="text" className="form-control" id="alamat" placeholder="contoh: Jalan Ikan Hiu 33" required style={{ borderRadius: '16px' }} />
            </div>
            <div className="mb-3">
              <label for="nohp" className="form-label">No. Handphone<span style={{ color: 'red' }}>*</span></label>
              <input type="number" min='11' className="form-control" id="nohp" placeholder="contoh: 08123456789" required style={{ borderRadius: '16px' }} />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#7126B5', borderRadius: '16px' }}>Simpan</button>
            </div>
          </div>
        </form>
      </section>

    </div>
  )
}