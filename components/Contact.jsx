import React from 'react';

export function Contact() {
  return (
    <section className="bg-brown-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-serif text-brown-900 mb-6">来这里找我们</h2>
          <div className="space-y-4 text-brown-600">
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <p>1086, Road Hejian, Yangpu District, Shanghai</p>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email *"
              className="w-full p-2 bg-white border border-brown-200 rounded"
              required
            />
            <button type="submit" className="w-full p-2 bg-brown-900 hover:bg-brown-800 text-white rounded">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

