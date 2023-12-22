
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10 bg-[#00011F]">
      <div className="px-7 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <p className="text-sm lg:text-lg text-[#374151] font-bold">Dooito</p>
            <p className="text-xs lg:text-sm text-[#9CA3AF]">Do it easily</p>
            <p className="text-sm text-[#9CA3AF]">&copy; 2023 Dooito. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[2vw] w-[3vw] text-[#9CA3AF] cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[2vw] w-[3vw] text-[#9CA3AF] cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[2vw] w-[3vw] text-[#9CA3AF] cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[2vw] w-[3vw] text-[#9CA3AF] cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[2vw] w-[3vw] text-[#9CA3AF] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
