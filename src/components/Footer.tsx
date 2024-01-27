"use client";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container bg-white my-10">
      <div className="flex justify-between md:flex-row flex-col pb-8 border-b">
        <div className="items-end">
          <NameLogo />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col md:justify-start px-4 w-40">
            <div className="text-2xl font-bold py-2 text-[#D6D3CC]">Pages</div>
            <Link href="/template" className="text-lg">
              Template
            </Link>
            <Link href="/about" className="text-lg">
              About
            </Link>
            <Link href="/submit" className="text-lg">
              Submit
            </Link>
            <Link href="/contact" className="text-lg">
              Contact
            </Link>
          </div>
          <div className="flex flex-col justify-start px-4 w-40">
            <div className="text-2xl font-bold py-2 text-[#D6D3CC]">
              Resources
            </div>
            <Link href="/resources" className="text-lg">
              Hire an expert
            </Link>
            <Link href="/resources" className="text-lg">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start px-4 w-[34rem] mt-6 md:mt-0">
          <div className="text-2xl font-bold py-2 text-[#D6D3CC]">
            Subscribe
          </div>
          <div className="py-2 text-lg">
            Get the best help center design tips and inspiration and idea to
            provide world class support to your customers.
          </div>
          <div className="flex items-center space-x-2">
            <Input className="text-lg p-6" type="email" placeholder="Email" />
            <Button type="submit" className="text-lg p-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="pt-4 md:flex md:items-center md:justify-between">
        <p className="text-base text-muted-foreground">
          &copy; {currentYear} HelpCenter Design. All screenshots &copy; of their
          respective owners.
        </p>
        <div className="socials flex justify-center items-center sm:justify-end mt-3 md:mt-0">
          <div className="text-xl">Follow Us:</div>
          <Link href="/">
            <FaLinkedin className="text-4xl mx-4" />
          </Link>
          <Link href="/">
            <FaTwitter className="text-4xl" />
          </Link>
        </div>

        </div>
       
      </div>
    </footer>
  );
};
function NameLogo() {
  return (
    <Link
      href="/"
      className="flex flex-row items-center md:justify-center justify-start"
    >
      <Image
        src="/HelpCenterDesignsLogo.svg"
        width="50"
        height="50"
        alt="Help Center Designs Logo"
      />
      <h1 className="md:text-4xl text-xl">HCD</h1>
    </Link>
  );
}
export default Footer;