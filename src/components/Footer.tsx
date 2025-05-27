'use client';

import {
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
       
        
        <div className="text-sm text-gray-400">
          Designed by <span className="text-indigo-400">Northman</span>
        </div>
      </div>
    </footer>
  );
}
