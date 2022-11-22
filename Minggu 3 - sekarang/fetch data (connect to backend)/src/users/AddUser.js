import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const apidata="http://192.168.215.217:8080";

export default function AddUser() {
  
  let navigate = useNavigate();

  const [user, setUser] = useState({
    title: "",
    description: "",
    // price: "",
  });

  const { title, description } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${apidata}/create`,{title,description,});
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add New Task</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            {/* <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your "
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
