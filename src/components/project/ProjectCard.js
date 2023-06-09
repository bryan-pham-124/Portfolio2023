import React from 'react'
import H2 from '../text/H2'
import H4 from '../text/H4'
import H3 from '../text/H3'
import HR from '../HR'
import P from '../text/P'
import { Link } from 'react-router-dom'
import BigP from '../text/BigP'

 
const ProjectCard =  ({theme, title, description, techUsed, screenshotLink, cardNum}, ref) => {

 const bgColor = theme === 'dark' ? 'bg-customGreen' : 'bg-white';
 const textColor = theme === 'dark' ? 'white' : 'black';

  return (
    <section id={`projectCard${cardNum}`} className={`${bgColor} flex items-center py-20 border-black bg-customGreen`}>
        <div className="w-full grid grid-cols-1 items-center justify-items-center  lg:grid-cols-2 ">
            <div className="wrapper flex flex-col items-center mb-14 lg:mb-0 px-12">
                <H2 text={title} textAlign='center'  color={textColor}  />
                <div className="wrapper  w-full my-3">
                    <HR color={textColor} marginY='3'/>
                </div>
                <BigP textAlign='center'  color={`${theme === 'dark' ? 'white' : 'black'}`}  text={description} />
               
                <H3  color={textColor}  text={"Technologies Used"} />
                <div className={`wrapper grid grid-cols-2 lg:grid-cols-4 gap-x-3 justify-items-center`}>
        
                    { 
                        techUsed.map((tech, i) => <P key={i} textAlign='left'  color={textColor}  text={tech} /> )
                    }
                    
                </div>
                     
                <div className="wrapper w-[13rem] mt-10">
                    <Link  to ={`../../ProjectDetails/${title}`} className={`w-full bg-customBlack text-white  py-5 px-10 transition   hover:bg-sky-500`}>
                        Details
                    </Link>
                    
                </div>
            </div>
            <div className={`wrapper text-black   flex items-center px-4  justify-center`}>
                <img src={screenshotLink} className='max-w-full h-auto max-h-[30rem] border-customBlack border' alt={`${title} Screenshot`}/>
            </div>
        </div>
    </section>
  )
} 

export default ProjectCard