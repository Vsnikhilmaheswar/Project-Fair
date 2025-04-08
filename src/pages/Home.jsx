import React from "react";
import { Col, Row } from "react-bootstrap";
import coding from "../assets/image1.png";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
function Home() {
  return (
    <>
      <div
        className="container-fluid bg-success border p-5 "
        style={{ width: "100%", height: "100vh" }}
      >
        <Row className="mt-5">
          <Col
            md={6}
            lg={6}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <div>
              <h3 className="text-light">Project fair</h3>
              <h6>One stop destination for all s/w projects</h6>
              <Link to={"/auth"}>
                {" "}
                <button className="btn btn-outline-light mt-3 ms-2">
                  GET STARTED <i class="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </Link>
            </div>
          </Col>

          <Col md={6} lg={6}>
            <img className="img-fluid " src={coding} width={"75%"} />
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
        <h3 className="text-center my-5">EXPLORE YOUR PROJECTS</h3>
        <div className="row mb-5 ">
        <marquee scrollAmount={10}> 
          <div className="col-md-4 col-lg-4 justify-content-center d-flex p-4  " style={{width:"400px"}}> 
             <ProjectCard/>
           
          </div>
          <div className="col-md-4 col-lg-4 justify-content-center d-flex p-4  " style={{width:"400px"}}> 
             <ProjectCard/>
           
          </div>
          <div className="col-md-4 col-lg-4 justify-content-center d-flex p-4  " style={{width:"400px"}}> 
             <ProjectCard/>
           
          </div>


        </marquee>
        <Link to={'/project'} style={{textDecoration:'none'}}> 
        <h5 className="text-center text-warning my-5 fw-bold">See More Projects</h5>
        </Link>
        
        </div>
      </div>
    </>
  );
}

export default Home;
