import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "'" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://638dec014190defdb7510f65.mockapi.io/CRUDoperation",
      {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/Read");
      });
  };

  return (
    <>
      <div className='container mt-3 == margin top 3rem'>
        <div className='d-flex justify-content-between m2 ' >
          <h2>Create Page</h2>
          <Link to='/Read'>
            <button className='btn btn-primary'>Generate Data</button>
          </Link>
        </div>
        <form>
          <div className="my='3' mg='3'">
            <div className="mb-3 row">
              <label className='form-Label'>Name</label>
              <input type="text" className='form-control'
                onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="mb-3 row">
              <label className='from-Label'>Email Address </label>
              <input type="email" className='form-control'
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp" />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Create 
