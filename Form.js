import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./form.css";

function OrderForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState({});

  const handleCheckOut = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (!address) {
      validationErrors.address = 'Address is required';
    }

    if (!phone) {
      validationErrors.phone = 'Phone number is required';
    }

    if (!city) {
      validationErrors.city = 'City is required';
    }

    if (!state) {
      validationErrors.state = 'State is required';
    }

    if (!zip) {
      validationErrors.zip = 'Zip code is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      alert("Order placed successfully. Our team will contact you soon.");
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='form'>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span className="error-message" id="red">{errors.email}</span>}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <span className="error-message" id="red">{errors.password}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
          {errors.address && <span className="error-message" id="red">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Phone-No</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="(+92)-xxxxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {errors.phone && <span className="error-message" id="red">{errors.phone}</span>}
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)} />
            {errors.city && <span className="error-message" id="red">{errors.city}</span>}
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control" value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Choose...</option>
              <option>...</option>
            </select>
            {errors.state && <span className="error-message" id="red">{errors.state}</span>}
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" value={zip} onChange={(e) => setZip(e.target.value)} />
            {errors.zip && <span className="error-message" id="red">{errors.zip}</span>}
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary hero2-btn" onClick={handleCheckOut}>Check out</button>
      </form>
    </div>
  );
}

export default OrderForm;
