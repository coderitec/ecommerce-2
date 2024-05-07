import { IBM_Plex_Mono } from "next/font/google";



const ibm= IBM_Plex_Mono({ subsets: ["latin"], weight:['400','700'] });

export const metadata = {
    title: "about ecommerce website",
    description: "fundamentals of react",
  };

export default function AboutLayout({children}) {
  return (
    <div className={ibm.className}>

    <div>this is about layout</div>
    {children}
    </div>
  )
}
