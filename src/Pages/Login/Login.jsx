import { useState } from "react";
import formStyle from "./Login.module.css";
export default function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange=(e)=>{
    switch(e.target){
        case "name":setUser({...user,name:e.target.value});
        break;
        case "email":setUser({...user,email:e.target.value});
        break;
        case "password":setUser({...user,password:e.target.value});
        break;
        case "phone":setUser({...user,phone:e.target.value});
        break;
    }
    console.log(user);
  }
  const trySubmit=(e)=>{
    if(user.name==""||user.email==""||user.password==""||user.phone=="")e.preventDefault();
    console.log(user);
  }
  return (
    <>
      <form className={formStyle.form}>
        <label htmlFor="name" style={{ fontSize: "25px" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          style={{ width: "320px", height: "28px" , fontSize:"23px"}}
          onChange={(e) => {handleChange(e)}}
        />
        <br />
        <label htmlFor="email" style={{ fontSize: "25px" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          style={{ width: "320px", height: "28px" , fontSize:"23px"}}
          onChange={(e) => {handleChange(e)}}
        />
        <br />
        <label htmlFor="password" style={{ fontSize: "25px" }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          style={{ width: "320px", height: "28px" , fontSize:"23px"}}
          onChange={(e) => {handleChange(e)}}
        />
        <br />
        <label htmlFor="phone" style={{ fontSize: "25px" }}>
          Phone Number:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          style={{ width: "320px", height: "28px" , fontSize:"23px"}}
          onChange={(e) => {handleChange(e)}}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          style={{ width: "120px", height: "37px", fontSize: "22px" }}
          onClick={(e)=>{trySubmit(e)}}
        />
      </form>
    </>
  );
}
