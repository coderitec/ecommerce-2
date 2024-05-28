"use client"
import Link from 'next/link'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';



export default function About() {
  return (
    <div>
        <h2>About page</h2>
        <p><Link href='/'>Back to home</Link></p>

          <h2>people are using us</h2>
          <div style={{ width: 300, height: 500}}>
  <Gauge value={68} 
  cornerRadius="50%"
   sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 70,
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: 'blue',
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: '#bbb',
    },
  })}
    />
</div>



            
    </div>
  )
}
