import { PhoneIcon, AtSymbolIcon, GlobeAltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const teamMembers = [
  {
    name: 'Gregory John',
    role: 'Full Stack Developer',
    image: '/team/john.jpg',
    whatsapp: 'https://wa.me/0793789339',
    
    instagram: 'https://instagram.com/Gregory Oundo',
  },
  {
    name: 'Dan Wahome',
    role: 'Graphic Designer',
    image: '/team/dan.jpg',
    whatsapp: 'https://wa.me/0987654321',
    twitter: 'https://twitter.com/Dante',
    instagram: 'https://instagram.com/Dante',
  },
  {
    name: 'Paul Wekulo',
    role: 'Web Developer and Graphic Designer',
    image: '/team/paul.jpg',
    whatsapp: 'https://wa.me/0987654321',
    twitter: 'https://twitter.com/Paul',
    instagram: 'https://instagram.com/Paul',
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Clear Drop Tech</h2>
        <p className="text-lg text-gray-400 mb-12">
          At Clear Drop Tech, we specialize in merging innovative code with beautiful design. Our team is dedicated to delivering cutting-edge solutions that empower businesses to thrive in the digital age.
        </p>

        <h3 className="text-2xl font-semibold mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-lg p-6">
              <img src={member.image} alt={member.name} className="h-32 w-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-gray-400 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href={member.whatsapp} target="_blank" rel="noopener noreferrer">
                  <PhoneIcon className="h-6 w-6 text-green-400 hover:text-green-500" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <AtSymbolIcon className="h-6 w-6 text-blue-400 hover:text-blue-500" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <GlobeAltIcon className="h-6 w-6 text-pink-400 hover:text-pink-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
