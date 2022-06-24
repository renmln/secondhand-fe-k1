import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle127 from "../../images/Rectangle127.svg"
import axios  from "axios";
import { useNavigate } from "react-router-dom";
import fi_plus from "../../images/fi_plus.png"
// import { Link } from "react-router-dom";

export default function InfoProduk() {
    const [product_name, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [file, setFile] = useState("");
    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo");
    const infoid = JSON.parse(userInfo);
    const userid = infoid.id;
    const id = userid;

    useEffect(() => {
        getUserById();
    }, []);

    const updateProduct = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("picture", file);
        try {
          const response = await axios.put(
            `http://localhost:8000/api/v1/products/cloudinary/${id}`,
            form,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setImage(response.data.url);
          console.log(image);
          await axios.put(
              `http://localhost:8000/api/v1/products/update/${id}`, 
              {
            product_name: product_name,
            price: price,
            image: response.data.url,
            category: category,
            description: description,
          });
          navigate("/daftarjual");
        } catch (error) {
          console.log(error);
        }
      };

    const getUserById = async () => {
        const response = await axios.get(
            `http://localhost:8000/api/v1/users/${id}`,
    );
            setProductName(response.data.product_name);
            setPrice(response.data.price);
            setImage(response.data.image);
            setCategory(response.data.category);
            setDescription(response.data.description);
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light d-inline-flex" style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div className="d-inline-flex" style={{ padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <a className="navbar-brand" href="/"><img src={Rectangle127} alt='' />
                    </a>
                </div>

            </nav>


            <section>
                <form onSubmit={updateProduct}>
                    <div className="container" style={{ padding: '30px', width: '70%' }}>
                        <div className="mb-3">
                            <label for="namaproduk" className="form-label">Nama Produk<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" 
                            className="form-control" 
                            id="namaproduk" 
                            placeholder="Nama Produk" 
                            required 
                            value={product_name}
                            onChange={(e) => setProductName(e.target.value)}
                             />
                        </div>
                        <div class="mb-3">
                            <label for="harga" className="form-label">Harga Produk<span style={{ color: 'red' }}>*</span></label>
                            <input type="number" 
                            min="1" 
                            step="any" 
                            className="form-control" 
                            id="harga" 
                            placeholder="Rp 0,00" 
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="kategori" className="form-label">Kategori<span style={{ color: 'red' }}>*</span></label>
                            {/* <select className="form-select" id="kategori" required>
                                <option selected>Pilih Kategori</option>
                                <option value="1"> Pakaian</option>
                                <option value="2"> Makanan</option>
                                <option value="3"> Elektronik</option>
                            </select> */}
                            <input type="text" 
                            className="form-control" 
                            id="kategori" 
                            placeholder="Kategori Produk" 
                            required 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="deskripsi" className="form-label">Deskripsi<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" 
                            className="form-control" 
                            id="deskripsi" 
                            placeholder="contoh: Jalan Ikan Hiu 33" 
                            required 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="deskripsi" className="form-label">Foto Produk<span style={{ color: 'red' }}>*</span></label>
                            <div>
                                <label>
                                {image ? (
                                    <img src={image} alt=''  />
                                ) : ( 
                                    <img src={ fi_plus} alt='' 
                                    style={{ borderStyle: 'dashed', padding: '34px', borderRadius: '12px', width: '96px', borderColor: '#d0d0d0' }} />
                                )}
                                    <input type="file" 
                                    accept=".jpg,.jpeg,.png" 
                                    style={{ display: 'none' }}
                                    placeholder='Upload Image'
                                    onChange={(e) => setFile(e.target.file)}
                                    multiple 
                                    />
                
                                    </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <button type="submit" 
                                    class="btn" 
                                    style={{ width: '100%', 
                                    backgroundColor: 'white', 
                                    borderRadius: '16px', 
                                    color: 'black', 
                                    borderColor: '#7126B5' }}
                                    // component={Link}
                                    // to="/infoprofil"
                                    >Preview</button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#7126B5', borderRadius: '16px' }}>Terbitkan</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </section>
        </div>
    )
}