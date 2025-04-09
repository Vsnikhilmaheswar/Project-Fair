import React from 'react'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
<>
<div className='container-fluid'>
  <h4 className='my-4 ms-4 '>Welcme <span className='text-warning'>john</span></h4>
  <div className='row'>
    <div className='col-md-8'>
   <MyProjects/>
    </div>
    <div className='col-md-4'>
      <Profile/>
    </div>
  </div>
</div>

</>
  )
}

export default Dashboard