import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Read = () => {

  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://638dec014190defdb7510f65.mockapi.io/CRUDoperation")
      .then((res) => {
        setData(res.data);
      });
  }

  const handleDelete = (id) => {
    // e.preventDefault();
    axios.delete(`https://638dec014190defdb7510f65.mockapi.io/CRUDoperation/${id}`)
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='container-md mt-3 == margin top 3rem'>
        <div className='d-flex justify-content-between m2' >
          <h2>React Read Operation</h2>
          <Link to='/'>
            <button className='btn btn-secondary'>Create</button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {
            data.map((eachData) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <th scope="row">{eachData.id}</th>
                      <td>{eachData.name}</td>
                      <td>{eachData.email}</td>
                      <Link to='/Update'>
                        <td>
                          <button type='button' className='btn btn-success'
                            onClick={() => setToLocalStorage(
                              eachData.id,
                              eachData.name,
                              eachData.email
                            )}
                          >Edit</button>
                        </td>
                      </Link>
                      <td>
                        <button className='btn btn-danger'
                          onClick={(e) => handleDelete(eachData.id)}
                        >
                          Delete</button></td>
                    </tr>
                  </tbody>
                </>
              )
            })
          }
        </table>
      </div>
    </>
  )
}

export default Read