'use client';

import {
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center space-x-6">
          <a
            href="https://linkedin.com/in/gregory-john-b48b45365"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/Northmanj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          
        </div>

        
        <div className="text-sm text-gray-400">
          Designed by <span className="text-indigo-400">Northman</span>
        </div>
      </div>
    </footer>
  );
}
