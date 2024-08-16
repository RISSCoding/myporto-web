import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

interface SocialProps {
  containerStyle?: string;
  iconStyle?: string;
}

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/RISSCoding' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/frsfr_/' },
];

const Social: React.FC<SocialProps> = ({ containerStyle = '', iconStyle = '' }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyle}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
