import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register (){
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '', email: '', username: '',
    password: '', confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!form.name) errs.name = "Name is required";
    if (!form.email || !emailRegex.test(form.email)) errs.email = "Invalid email";
    if (!form.username || /\s/.test(form.username)) errs.username = "Username is required and must not contain spaces";
    if (!form.password || !passRegex.test(form.password)) errs.password = "Password too weak";
    if (form.confirmPassword !== form.password) errs.confirmPassword = "Passwords do not match";

    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      alert(JSON.stringify(form, null, 2));
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <p>{errors.name}</p>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <p>{errors.email}</p>

      <input name="username" placeholder="Username" onChange={handleChange} />
      <p>{errors.username}</p>

      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <p>{errors.password}</p>

      <input name="confirmPassword" placeholder="Confirm Password" type="password" onChange={handleChange} />
      <p>{errors.confirmPassword}</p>

      <button>Register</button>
    </form>
  );
};
