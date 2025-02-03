import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-5 mt-10 pb-5 pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Analytics Dashboard
            </h3>
            <p className="text-gray-600">
              Comprehensive analytics solution for tracking and analyzing your
              website's performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Analytics Dashboard. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
