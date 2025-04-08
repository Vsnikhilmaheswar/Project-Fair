import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (
    <>
    <div className='container-fluid'>
       <h3 className='text-center mt-5 text-warning'>Explore Projects</h3>  
      
     </div>
     <div className='row my-5'>
       <div className='col-md-4'>    </div>   
           <div className='col-md-4 d-flex'>
            <input type='text' className='form-control' placeholder='Serach by Technology'/>
            <i class="fa-solid fa-magnifying-glass" style={{marginTop:'12px',marginLeft:'-30px',color:'orange'}}></i>                             
       </div>
       <div className='col-md-4'>    </div>   
     </div>
     <div className='row my-5 'p-5>

         <div className='col-md-4 p-2'>
         <ProjectCard/>
         </div>
     </div>
    </>
  )
}

export default Project