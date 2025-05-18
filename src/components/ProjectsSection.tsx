'use client'; 

import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  PencilSquareIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Modern Dashboard with Next.js',
    description: 'A sleek, real-time dashboard built using Next.js and Tailwind CSS.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Website Creation with React',
    description: 'Responsive websites developed using React.js and modern design principles.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Chatbots',
    description: 'AI-powered chatbots to enhance customer interaction and support.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Identity and Access Management',
    description: 'Secure systems for managing user identities and access controls.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Logo Design',
    description: 'Custom logo designs that reflect your brand identity.',
    icon: PencilSquareIcon,
  },
  {
    title: 'School & Inventory Systems',
    description: 'Custom management systems tailored for schools and inventory tracking.',
    icon: ClipboardDocumentListIcon,
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Projects</h2>
        <p className="text-lg text-gray-400 mb-12">
          We've successfully delivered a range of projects that showcase our expertise in various technologies and design principles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition duration-300"
            >
              <project.icon className="h-12 w-12 text-indigo-400 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
