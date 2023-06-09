import React from 'react'
import H1 from '../text/H1'
 

const ProjectsHeader =  () => {
  return (
     <section id="projectHeader" className='flex justify-center bg-white py-10 h-[100vh] max-h-[40rem] flex items-center'>
        <div className="wrapper w-[50vw]">
            <H1  textAlign='center'  text={'Projects'}/>
        </div>
     </section>
  )
}

export default ProjectsHeader;