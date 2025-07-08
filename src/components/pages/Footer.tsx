'use client'
import Link from "next/link"

const Footer = () => {
  const QuickLinks = [
  { label: "About Us", href: "/" },
  { label: "Contact Us", href: "about" },
  { label: "Support Center", href: "service" },
  { label: "Community Forum", href: "contact" },
  { label: "Developer Blog", href: "contact" }
  ];

  const ConnectWithUs = [
  { label: "About Us", href: "/" },
  { label: "Contact Us", href: "about" },
  { label: "Support Center", href: "service" },
  { label: "Community Forum", href: "contact" },
  { label: "Developer Blog", href: "contact" }
  ];

  const FollowUs = [
  { label: "About Us", href: "/" },
  { label: "Contact Us", href: "about" },
  { label: "Support Center", href: "service" },
  { label: "Community Forum", href: "contact" },
  { label: "Developer Blog", href: "contact" }
  ];
  return (
    // footer for all
    <footer className="h-auto w-full bg-gray-50 pt-[50px] pb-10 flex flex-col justify-center items-center flex-wrap">
      <div className=" h-auto w-full flex flex-wrap justify-center items-center gap-1">
        <div className=" h-full lg:w-[47%] w-[97%] flex flex-col justify-start items-start ">
          <p className="w-auto text-3xl">ZYNTRA</p>
          <p className=" lg:w-[58%] text-gray-400 text-sm mt-3 ">Subscribe to our newsletter for the latest updates on features and releases</p>
          <form className=" flex gap-3 mt-3 w-full ">
            <input type="text" placeholder="Your email address" className="border-1 w-[75%] lg:w-[54%] pl-2 pr-2 pt-1 pb-1 border-gray-900"/>
            <button className="border-1 border-gray-900 pl-5 pr-5 pt-1 pb-1">Join</button>
          </form>
          <p className=" lg:w-[65%] text-[10px] text-gray-700 mt-3 ">By subscribeing, you agree to our Privacy Policy and consent to receive updates</p>
        </div>
        <div className=" h-full lg:w-[15%] w-[97%] flex flex-col justify-start items-start gap-3 mt-7 lg:mt-0">
          <p className="text-lg">Quick Links</p>
          {QuickLinks.map(({label,href})=>(
            <>
              <Link key={href} href={href} className="text-sm text-gray-400">{label}</Link>
            </>
          ))}
        </div>
        <div className=" h-full lg:w-[15%] w-[97%] flex flex-col justify-start items-start gap-3 mt-7 lg:mt-0">
          <p className="text-lg">Connect With Us</p>
          {ConnectWithUs.map(({label,href})=>(
            <>
              <Link key={href} href={href} className="text-sm text-gray-400">{label}</Link>
            </>
          ))}
        </div>
        <div className=" h-full lg:w-[15%] w-[97%] flex flex-col justify-start items-start gap-3 mt-7 lg:mt-0">
          <p className="text-lg">Follow Us</p>
          {FollowUs.map(({label,href})=>(
            <>
              <Link key={href} href={href} className="text-sm text-gray-400">{label}</Link>
            </>
          ))}
        </div>
      </div>
      <div className=" h-[25%] w-full flex flex-col lg:flex-row flex-wrap justify-start lg:justify-center items-center pt-[40px] lg:pt-[70px] pb-7 ">
        <p className=" lg:w-[57%] w-[97%] "><span className="">@</span> 2025 All rights resrved</p>
        <div className=" lg:w-[36%] w-[97%] flex lg:justify-end justify-between items-center flex-wrap lg:gap-7 underline">
          <p><Link href={``}>Privacy Policy</Link></p>
          <p><Link href={``}>Terms of Service</Link></p>
          <p><Link href={``}>Cookie Setting</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
