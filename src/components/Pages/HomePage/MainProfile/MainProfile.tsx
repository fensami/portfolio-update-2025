"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const MainProfile = () => {
  const [copied, setCopied] = useState(false);

  const email = "asadurjamannursabbir@gmail.com";
  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };
  const ProfileImage =
    "https://portfolio-update-2024.vercel.app/assets/profile-img-DRGUVHxp.jpg";
  return (
    <div className="portfolio-global-box">
      <div className="relative portfolio-img ">
        <Image src={ProfileImage} height={270} width={390} alt="profile-img" />
      </div>
      <h1 className="sm:text-4xl font-semibold text-[#1a1f2c] mb-0 mt-[21px] text-2xl ">Asadur Jaman Nur <span className="text-sm sm:text-4xl">👋</span> </h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          'I am A Frontend Developer',
          1000,
          'I am A React Js Developer',
          1000,
          'I am A Next Js Developer',
          1000
        ]}
        speed={50}
        className="text-xl"
        // style={{ fontSize: '1.2em' }}
        repeat={Infinity}
      />
      {/* <h2 className="text-3xl">Frontend Developer</h2> */}
      <h4 className="profile-para">
        I’m a passionate Front-End Developer with over 1 year of hands-on
        experience crafting responsive, high-performance, and visually appealing
        websites. I’ve successfully contributed to commercial projects on
        ThemeForest, delivering clean, scalable, and pixel-perfect designs.
        Currently, I’m focused on mastering Next.js, and modern UI/UX principles
        to create exceptional digital experiences that blend functionality with
        creativity.
      </h4>
      <div className="all-btns mt-8">
        <Link
          href="https://drive.google.com/file/d/1iNySfx05c3OUzB3aj-3GUMsx1gys6iKd/view?usp=drive_link"
          target="_blank"
          className="portfolio-btn"
        >
          <span className="btn-icon">
            <FontAwesomeIcon icon={faFilePdf} />
          </span>
          Resume
        </Link>
        <button className="portfolio-btn cursor-pointer" onClick={handleCopy}>
          <span className="btn-icon">
            <FontAwesomeIcon icon={faClone} />
          </span>
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
      <div className="social-link">
        <Link
          href="https://www.facebook.com/profile.php?id=100081583921609"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link
          href="https://github.com/fensami"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </Link>
        <Link
          href="https://www.instagram.com/asadurjamannursabbir"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/asadur-jaman-nur-494353197"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    </div>
  );
};

export default MainProfile;
