import {FiChevronRight, FiUpload} from "react-icons/fi"
import Form from 'react-bootstrap/Form';
import "./AddCar.css"
import { Link } from "react-router-dom";

const AddCar = () => {
    return (  
        <div className="addcar-section">
            <div>
                <div className="addcar-breadcrumb">
                    <div className="addcar-breadcrumb-route">
                        <p>Cars</p>
                    </div>
                    <div className="addcar-breadcrumb-icon-bg">
                        <FiChevronRight size={16}/>
                    </div>
                    <div className="addcar-breadcrumb-route">
                        <Link to="/cars" >
                            <p className="addcar-breadcrumb-route-link-p">List Car</p>
                        </Link>
                    </div>
                    <div className="addcar-breadcrumb-icon-bg">
                        <FiChevronRight size={16}/>
                    </div>
                    <div className="addcar-breadcrumb-route-active">
                        <p>Add New Car</p>
                    </div>
                </div>
                <div className="addcar-title">
                    <h4>Add New Car</h4>
                </div>
                <div className="addcar-inputsection-bg">
                    <div className="addcar-inputsection">
                        <div className="addcar-inputsection-form">
                            <div>
                                <p>Nama/Tipe Mobil*</p>
                            </div>
                            <div className="addcar-inputsection-form-input-bg">
                                <input placeholder="Input Nama/Tipe Mobil" type="text" required/>
                            </div>
                        </div>
                        <div className="addcar-inputsection-form">
                            <div>
                                <p>Harga*</p>
                            </div>
                            <div className="addcar-inputsection-form-input-bg">
                                <input placeholder="Input Harga Sewa Mobil" required type="number"/>
                            </div>
                        </div>
                        <div className="addcar-inputsection-form">
                            <div>
                                <p>Foto*</p>
                            </div>
                            <div className="addcar-inputsection-form-input-bg">
                                <input placeholder="Upload Foto Mobil" type="file"  required/> <FiUpload size={18}/>
                            </div>
                        </div>
                        <div className="addcar-inputsection-form">
                            <div>
                                <p>Kategori*</p>
                            </div>
                            <div className="addcar-inputsection-form-select-bg">
                                <Form.Select>
                                    <option>Pilih Kategori Mobil</option>
                                    <option value="small">2 - 4 people</option>
                                    <option value="Medium">4 - 6 people</option>
                                    <option value="large">6 - 8 people</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="addcar-inputsection-form">
                            <div>
                                <p>Created at</p>
                            </div>
                            <div className="addcar-inputsection-form-date">
                                <p>-</p>
                            </div>
                        </div>
                        <div className="addcar-inputsection-form">
                            <div>
                                <p>Updated at</p>
                            </div>
                            <div className="addcar-inputsection-form-date">
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="addcar-btn">
                <div className="addcar-btn-cancel">
                    <button>Cancel</button>
                </div>
                <div className="addcar-btn-save">
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}
 
export default AddCar;