'use client';

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyzwazqb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setStatus('✅ Message sent successfully!');
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatus(result.errors.map((e: any) => e.message).join(', '));
        } else {
          setStatus('⚠️ Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      setStatus('❌ Network error. Please try again later.');
    }

    setLoading(false);
  };

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
              <span>+254 736765273  / +254 793789339</span>
            </div>
            <div className="flex items-center gap-4">
              <EnvelopeIcon className="h-6 text-indigo-400" />
              <span>cleardroptech@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-indigo-400" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-md space-y-6"
        >
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
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className="text-sm text-green-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
