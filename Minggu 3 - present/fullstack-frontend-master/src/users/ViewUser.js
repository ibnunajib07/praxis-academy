import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const apidata="http://192.168.215.217:8080";

export default function ViewUser() {

  const [user, setUser] = useState([]);

  // const [user, setUser] = useState({
  //   title: "",
  //   price: "",
  //   description: "",
  // });

  //const { title, description, price } = user;

  // const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async (id) => {
    const result = await axios.get(`${apidata}/list`);
    setUser(result.data.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Title: {user.title}</b>
                </li>
                <li className="list-group-item">
                  <b>Description: {user.description}</b>
                </li>
                {/* <li className="list-group-item">
                  <b>Descrption: </b>
                  {user.email}
                </li> */}
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
