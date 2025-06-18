import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // const res = await axios.post('https://reqres.in/api/login', form);
     const res = await axios.post(
        'https://reqres.in/api/login',
        {
          email: form.email,
          password: form.password
        },
        {
          headers: {
            'x-api-key': 'reqres-free-v1' // ✅ Required now
          }
        }
      );

      const token = res.data.token;
      localStorage.setItem('authToken', token); // Save token to localStorage
      alert('Login successful');
      navigate('/'); // Redirect to home or dashboard
    } catch (err) {
      // alert('Invalid credentials');
      console.error('Login error:', err.response?.data || err.message);
      alert('Invalid credentials. Use:\nEmail: eve.holt@reqres.in\nPassword: cityslicka');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to registration page
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <div className="text-center mt-3">
                Don't have an account?{' '}
                <span style={{ cursor: 'pointer' }} className="text-primary" onClick={handleRegister}>
                  Register
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;