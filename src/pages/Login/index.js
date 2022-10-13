import React from "react";
import { NewLogin } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={NewLogin} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="p">Selamat Datang, Silahkan Login Dahulu</p>
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="Belum Punya Akun? Silahkan Daftar" />
      </div>
    </div>
  );
};

export default Login;
