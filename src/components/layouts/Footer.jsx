import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-stone-50">
        <div className="py-10 px-6 max-w-7xl mx-auto flex justify-between items-center">
            <span className='font-logo text-2xl tracking-widest font-bold outlined-text'>NEWS</span>
            <span className="flex gap-2 items-center cursor-pointer">
                <FiInstagram className="h-6 w-6" />
                <FiFacebook className="h-6 w-6"/>
                <FiYoutube className="h-6 w-6"/>
            </span>    
        </div>
    </footer>
  )
}

export default Footer;