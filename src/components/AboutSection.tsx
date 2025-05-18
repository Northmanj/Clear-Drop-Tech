import { 
    CodeBracketIcon, 
    CpuChipIcon, 
    ChartBarIcon, 
    PaintBrushIcon, 
    ShieldCheckIcon, 
    MagnifyingGlassIcon, 
    DocumentTextIcon 
  } from '@heroicons/react/24/outline';
  
  const services = [
    {
      title: 'Web Development',
      description: 'Responsive, fast, and scalable websites using modern frameworks like React and Next.js.',
      icon: CodeBracketIcon,
    },
    {
      title: 'Software Development',
      description: 'Custom desktop and mobile software tailored to your business needs.',
      icon: CpuChipIcon,
    },
    {
      title: 'Digital Marketing',
      description: 'Strategies that drive traffic and increase engagement across digital platforms.',
      icon: ChartBarIcon,
    },
    {
      title: 'Graphic Design',
      description: 'Designing banners, posters, logos, branding kits, and custom landing pages.',
      icon: PaintBrushIcon,
    },
    {
      title: 'Cyber Security',
      description: 'Security audits, threat protection, and digital safety for your business.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search visibility and rank higher in search engine results.',
      icon: MagnifyingGlassIcon,
    },
    {
      title: 'Article Design & Writing',
      description: 'Visually appealing article layouts and engaging, tailored content.',
      icon: DocumentTextIcon,
    },
  ];
  
  export default function AboutSection() {
    return (
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Merging innovation with style — we provide end-to-end solutions for modern digital success.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:scale-[1.02] transition-all border border-gray-700"
              >
                <Icon className="h-10 w-10 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  