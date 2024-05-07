import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {
  return (
    <div className='grid py-6 grid-cols-3 gap-3 grid-rows-[200px_200px] bg-gray-700 text-white'>
      <CourseCard title='html' desc='all about elements' num='14' social='instagram' color='bg-red-600'/>

      <CourseCard title='css' desc='styling components' num='14' social='youtube' color='bg-green-600'/>

      <CourseCard title='javascript' desc='interactivity hall of fame' num='13' social='gmail' color='bg-orange-700'/>

      <CourseCard title='tailwind' desc='a framework like no other' num='21' social='linkedin' color='bg-cyan-500'/>

      <CourseCard title='react' desc='make it easy to write' num='11' social='facebook' color='bg-yellow-500'/>
    </div>
  )
}
