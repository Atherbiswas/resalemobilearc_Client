import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF,FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-base-200 text-base-content mt-7">
      <div>
        <span className="footer-title">Social Link</span>
        <Link className="link link-hover"><FaFacebookF className="text-3xl"></FaFacebookF> </Link>
        <Link className="link link-hover"><FaWhatsapp className="text-3xl"></FaWhatsapp></Link>
        <Link className="link link-hover"><FaInstagram className="text-3xl"></FaInstagram></Link>
        <Link className="link link-hover"><FaLinkedinIn className="text-3xl"></FaLinkedinIn></Link>
      </div>
      <div>
        <span className="footer-title">Company Address</span>
        <Link className="link link-hover text-xl font-semibold">About us</Link>
        <Link className="link link-hover text-xl font-semibold">48/4, north badda, gulshan, 1212</Link>
        <Link className="link link-hover text-xl font-semibold">Dhaka</Link>
        <Link className="link link-hover text-xl font-semibold">Mob: +8809638328417</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover text-xl">Terms of use</Link>
        <Link className="link link-hover text-xl">Privacy policy</Link>
        <Link className="link link-hover text-xl">Cookie policy</Link>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
    <div className="text-center mb-7"> 
    <p>Copyright © 2022 - All right reserved by Resalemobilearc</p>
  </div>
    </div>

  );
};

export default Footer;
