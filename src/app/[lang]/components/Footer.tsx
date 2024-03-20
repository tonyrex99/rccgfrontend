"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { IconContext } from "react-icons";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { hexToRgb } from "./PageHeaderWithImage";
import { Picture } from "../utils/model";
import IconComponent from "./IconComponent";
interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

interface ContactUs {
  id: number;
  icon: string;
  description: string;
}

interface BackgroundEffect {
  isImageFixed: boolean;
  color: string;
  colorOpacity: number;
  picture: string;
}

interface greeting {
  title?: string;
  description?: string;
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <>
      <li className="flex py-3" key={text}>
        <Link
          href={url}
          className={`hover:dark:text-secondary ${
            path === url && "dark:text-secondary dark:border-secondary"
          }}`}
        >
          {text}
        </Link>
      </li>{" "}
    </>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <>
      <li className="flex py-3">
        <Link
          href={`/blog/${attributes.slug}`}
          className="hover:dark:text-secondary"
        >
          {attributes.name}
        </Link>
      </li>
    </>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <BsTwitterX />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    case "FACEBOOK":
      return <FaFacebook />;
    case "INSTAGRAM":
      return <AiOutlineInstagram />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  ContactUs,
  legalLinks,
  socialLinks,
  BackgroundEffect,
  greeting,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  ContactUs: Array<ContactUs>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
  BackgroundEffect: BackgroundEffect;
  greeting: greeting;
}) {
  const containerStyle = {
    background: `${
      BackgroundEffect.isImageFixed ? "fixed " : ""
    }linear-gradient(rgba(${hexToRgb(BackgroundEffect.color)}, ${
      BackgroundEffect.colorOpacity / 100
    }), rgba(${hexToRgb(BackgroundEffect.color)}, ${
      BackgroundEffect.colorOpacity / 100
    })), url(${BackgroundEffect.picture}) center/cover`,
  };

  return (
    <footer
      style={{
        ...containerStyle,
        backgroundAttachment: BackgroundEffect.isImageFixed ? "fixed " : "",
      }}
      className="py-6 dark:bg-black text-gray-50"
    >
      <div className="container px-6 pt-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-4 mx-auto">
            <Logo src={logoUrl}>
              {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
            </Logo>

            {greeting && (
              <>
                {" "}
                <p className="pb-1 mt-4  ml-4 text-lg font-medium">
                  {greeting?.title}
                </p>
                {greeting?.title && (
                  <div className="pb-5 ml-4 border-t-8 w-20 border-secondary flex-grow" />
                )}
                <div className={` ml-4`}>{greeting?.description}</div>{" "}
              </>
            )}
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-4 mx-auto">
            <p className="pb-1 text-lg font-medium">Quick Links</p>
            <ul>
              {menuLinks.map(
                (
                  link: FooterLink,
                  index: number //remove slice
                ) => (
                  <>
                    <FooterLink key={link.id} {...link} />
                    {index !== menuLinks.length - 1 && (
                      <div className="border-t border-gray-300 flex-grow"></div>
                    )}
                  </>
                )
              )}
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-4 mx-auto">
            <p className="pb-1 text-lg font-medium">Connect With Us</p>
            <ul>
              {ContactUs &&
                ContactUs.map((links: ContactUs, index: number) => (
                  <>
                    <li className="flex py-3" key={links.description + index}>
                      <div className="flex flex-row items-center gap-1">
                        <IconContext.Provider
                          value={{
                            color: "var(--secondary-color)",
                          }}
                        >
                          <IconComponent icon={links.icon} />
                        </IconContext.Provider>
                        {links.description}{" "}
                      </div>
                    </li>
                    {index !== ContactUs.length - 1 && (
                      <div className="border-t max-w-[115px] border-gray-300 flex-grow"></div>
                    )}
                  </>
                ))}
              <div className="flex  pt-4 space-x-2 lg:pt-0 lg:col-end-13 mt-2">
                {socialLinks.map((link: FooterLink) => {
                  return (
                    <a
                      key={link.id + link.url}
                      rel="noopener noreferrer"
                      href={link.url}
                      title={link.text}
                      target={link.newTab ? "_blank" : "_self"}
                      className="flex items-center justify-center w-8 bg-secondary h-8 rounded-full dark:bg-secondary dark:text-gray-900"
                    >
                      <IconContext.Provider
                        value={{
                          color: "var(--primary-color)",
                        }}
                      >
                        <RenderSocialIcon social={link.social} />
                      </IconContext.Provider>
                    </a>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex">
            <span className="mr-2">
              ©{new Date().getFullYear()}
              {" " + logoText} All rights reserved
            </span>
            <ul className="flex">
              {legalLinks.map((link: FooterLink) => (
                <Link
                  href={link.url}
                  className="text-gray-400 hover:text-gray-300 mr-2"
                  key={link.id + link.url}
                >
                  {link.text}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            {socialLinks.map((link: FooterLink) => {
              return (
                <a
                  key={link.id + link.url}
                  rel="noopener noreferrer"
                  href={link.url}
                  title={link.text}
                  target={link.newTab ? "_blank" : "_self"}
                  className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondary dark:text-gray-900"
                >
                  <RenderSocialIcon social={link.social} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
