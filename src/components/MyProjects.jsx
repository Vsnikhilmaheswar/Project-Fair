import React from "react";
import AddProject from "./AddProject";
import { Link } from "react-router-dom";
import EditProject from "./EditProject";

function MyProjects() {
  return (
    <>
      <div className="shodow p-5 mb-5">
        <div className="d-flex ">
            <h5 className="text-sucess me-auto">My Projects</h5>
            <AddProject/>
        </div>
        <div className="p-3 mt-3 rounded d-flex " style={{backgroundColor:'lightgray'}}>
            <h6>MEDIA PLAYER</h6>
            <div className="d-flex ms-auto align-items-center">
                <Link>      <i class="fa-brands fa-github fa-2x me-3 " style={{color:'blue'}}></i></Link>
                <Link>          <i class="fa-solid fa-link fa-2x " style={{color:'blue'}}></i></Link>
                 <EditProject/>
            </div>
        </div>
      </div>
    </>
  );
}

export default MyProjects;
