import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
       <div className="bg-footer  relative">
          <div className="absolute inset-0 bg-black opacity-70"></div>
       <div className="footer sm:footer-horizontal  text-white p-10 relative">
  {/* Navigation Links */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
            <nav>
              <h6 className="footer-title text-lg font-extrabold mb-3">
                Services
              </h6>
              <a className="link link-hover block">Hepling</a>
              <a className="link link-hover block">Donating</a>
              <a className="link link-hover block">Funding</a>
              <a className="link link-hover block">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title text-lg font-extrabold mb-3">
                Company
              </h6>
              <a className="link link-hover block">About us</a>
              <a className="link link-hover block">Contact</a>
              <a className="link link-hover block">Jobs</a>
              <a className="link link-hover block">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title text-lg font-extrabold mb-3">
                Legal
              </h6>
              <a className="link link-hover block">Terms of use</a>
              <a className="link link-hover block">Privacy policy</a>
              <a className="link link-hover block">Cookie policy</a>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/sh.rubina?mibextid=ZbWKwL"
              >
                <FaFacebook className="text-3xl text-blue-700 dark:text-blue-400" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/rubinaakter4321"
              >
                <FaTwitter className="text-3xl text-sky-400 dark:text-sky-200" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rubina02akter"
              >
                <FaGithub className="text-3xl  dark:text-gray-100" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaInstagram className="text-3xl text-red-400 dark:text-red-300" />
              </a>
            </div>
          
          </div>
        </div>

</div>

    </div>
  
  )
}
