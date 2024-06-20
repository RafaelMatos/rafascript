import React from "react";
import MagicButton from "./ui/MagicButton";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Pronto para levar{" "}
          <span className="text-sky-200 text-6xl">sua presença</span> digital
          para o próximo nível?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a
          atingir seus objetivos.
        </p>
        <div className="flex flex-col lg:flex-row items-center text-center gap-4 justify-between">
          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            <MagicButton
              title="Vamos entrar em contato"
              position="right"
              icon={<MdOutlineEmail size={24} color="#bae6fd" />}
            />
          </a>
          <span className="text-xl text-center">OU</span>
          <a href={process.env.NEXT_PUBLIC_WHATSAPP}>
            <MagicButton
              title="Me chame no Whatsapp"
              position="right"
              icon={<FaWhatsapp size={24} color="#25d366" />}
              whatsapp
            />
          </a>
        </div>

        <div className="flex mt-16  flex-col lg:flex-row justify-between w-full items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Rafael Matos
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map(({ id, img, link }) => (
              <Link key={id} href={link}>
                <div
                  className="w-10 h-10 cursor-pointer flex justify-center
               items-center backdrop-filter backdrop-blur-lg saturate-180 
               bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image src={img} alt={String(id)} width={20} height={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
