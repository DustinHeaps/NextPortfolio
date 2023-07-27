import { githubLink, linkedInLink, gmailLink } from "@/constants";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const SocialIcons = () => {
  return (
    <>
      <a
        href={githubLink}
        aria-label='github link'
        target='_blank'
        className='link-styles'
      >
        <span>
          <TbBrandGithub />
        </span>
      </a>
      <a
        href={linkedInLink}
        aria-label='linkedIn link'
        target='_blank'
        className='link-styles'
      >
        <span>
          <SlSocialLinkedin />
        </span>
      </a>
      <a
        href={`mailto:${gmailLink}`}
        aria-label='gmail link'
        target='_blank'
        className='link-styles'
      >
        <span>
          <HiOutlineMail />
        </span>
      </a>
    </>
  );
};

export default SocialIcons;
