import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link href={'https://www.instagram.com/s_vadym1927/'} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100008227939102'} className="hover:text-[#0f5dff] transition-all duration-300" target="_blank">
        <RiFacebookLine />
      </Link>
      <Link href={'https://github.com/Vadym061'} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/vadym-shtyra-52b629225/'} className="hover:text-[#0f5dff] transition-all duration-300" target="_blank">
        <RiLinkedinLine />
      </Link>
      
    </div>
    )
};

export default Socials;
