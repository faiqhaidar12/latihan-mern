import React from "react";
import "./register.scss";
import { RegisterNew } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterNew} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="p">Selamat Datang, Silahkan Mendaftar Dahulu</p>
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Register;
