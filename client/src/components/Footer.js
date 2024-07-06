import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const items = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/poramet.met47",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/mpzxyz_",
    },
    { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/mpzxyz" },
    {
      name: "Tiktok",
      icon: FaTiktok,
      link: "https://www.tiktok.com/@poramet.k1",
    },
    {
      name: "Github",
      icon: FaGithub,
      link: "https://github.com/PorametKeawubol",
    },
  ];
  return (
    <div className="w-full bg-black">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
        <p className="pt-4 mx-4 ">
          © 2024{" "}
          <a
            className="text-emerald-500"
            href="https://www.instagram.com/mpzxyz_"
          >
            Poramet.dev
          </a>
        </p>
        <div className="flex justify-center mx-4 sm:justify-between sm:w-[300px] my-4 text-2xl space-x-4 sm:space-x-0">
          {items.map((pficon, index) => (
            <a
              key={index}
              href={pficon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <pficon.icon className="hover:text-slate-200" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
