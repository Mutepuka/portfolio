import Link from 'next/link';
import { BsTwitter,BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <Link href="https://twitter.com/Ensueinc">
       <BsTwitter/>
       </Link>
       </div>
       <div>
        <Link href="https://www.facebook.com/Ensueinc">
        <FaFacebookF/>
        </Link>
       </div>
       <div>
        <Link href="https://www.instagram.com/musondamakena/">
        <BsInstagram/>
        </Link>
       </div>
        </div>
        
  )
}

export default SocialMedia