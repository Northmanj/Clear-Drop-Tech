'use client';

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-400 mb-6">
            We would love to hear from you! Whether you have a question, a project, or just want to say hello.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-6 w-6 text-indigo-400" />
              <span>+254 736765273</span>
            </div>
            <div className='flex items-center gap-4'>
              < EnvelopeIcon className='h-6 text-indigo-400'/>
              <span>cleardroptech@gmail.com</span>

            </div>
           
            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-indigo-400" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/xyzwazqb" // Replace with your actual Formspree ID to be done by paul
          method="POST"
          className="bg-gray-800 p-6 rounded-lg shadow-md space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition"
          >
            Send Message
          </button>
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
        </form>
      </div>
    </section>
  );
}
