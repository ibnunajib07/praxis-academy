import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apidata="http://192.168.215.217:8080";

export default function Home() {
  const [users, setUsers] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`${apidata}/list`);
    console.log(result)
    setUsers(result.data.data);
  };

  // const onDelete = async (e) => {
  //   e.preventDefault();
  //   await axios.delete(`${apidata}/delete/${id}`, {title,description});
  //   loadUsers();
  //   navigate("/");
  // };

  const deleteUser = async (id) => {
    await axios.delete(`${apidata}/delete/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              {/* <th scope="col">Email</th>
              <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.title}</td>
                <td>{user.description}</td>
                {/* <td>{user.email}</td> */}
                <td>
                  {/* <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link> */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
