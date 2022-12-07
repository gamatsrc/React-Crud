import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export const Update = () => {

  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://638dec014190defdb7510f65.mockapi.io/CRUDoperation/${id}`,
      {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/Read");
      });
  };

  return (
    <>
      <div className='container-md mt-3 == margin top 3rem'>
        <div className='d-flex justify-content-between m2 ' >
          <h2>Update Page</h2>

        </div>
        <form>
          <div className="my='3' mg='3'">
            <div className="mb-3 row">
              <label className='form-Label'>Name</label>
              <input type="text" className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3 row">
              <label className='from-Label'>Email Address </label>
              <input type="email" className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp" />
            </div>

            <button type="button"
              className="btn btn-primary mx-2"
              onClick={handleUpdate}
            >Update
            </button>
            <Link to="/Read">
              <button className="btn btn-secondary mx-2">
                Back</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
