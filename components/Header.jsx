import React from 'react';

export function Header() {
  return (
    <header className="flex items-center justify-between p-6">
      <a href="/" className="text-brown-900 text-xl font-serif">
        Elephant & Cat's Website
      </a>
      <button className="flex items-center gap-2 text-sm text-brown-600">
        <span>中文</span>
      </button>
    </header>
  );
}

