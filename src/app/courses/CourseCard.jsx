import Link from 'next/link'
import React from 'react'
import CourseVal from './CourseVal'

export default function CourseCard({title,num,desc,social,color}) {
  return (
    <div className={`border-red-500 border-4 h-[400px] rounded-md shadow-lg text-center py-3`}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{num}</p>
        <div>
              <CourseVal title={title}/>
        </div>
        <p className={`${color} w-3/5 py-2 rounded-sm m-auto`}><Link href={`https://www.${social}.com`} target='_blank'>{social}</Link></p>
    </div>
  )
}
