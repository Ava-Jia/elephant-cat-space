import React from 'react';
import { FaPaw } from "react-icons/fa";
// import { Header } from '../components/Header';
// import { Hero } from '../components/Hero';
// import { PhotoGallery } from '../components/PhotoGallery';
// import { Contact } from '../components/Contact';

function App() {
  const images = [
    '/images/OurPhoto1.jpg',
    '/images/OurPhoto2.jpg',
    '/images/OurPhoto3.jpg',
    '/images/OurPhoto4.jpg',
    '/images/OurPhoto5.jpg',
    '/images/OurPhoto6.jpg',
  ];    

  return (
    <div className="min-h-screen bg-brown-600">

      {/* <Header /> */}
      <header className="flex items-center justify-between p-6">
      <a href="/" className="text-brown-200 text-xl font-serif">
        Elephant & Cat's Website
      </a>
      <button className="flex items-center gap-2 text-sm text-brown-600">
        <span>中文</span>
      </button>
    </header>
      <main>

      {/* <Hero /> */}
      <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-serif text-brown-900 mb-8">
        欢迎来到
        <br />
        小向和小贾的世界
      </h1>
      <FaPaw className="text-brown-200" size={64} />   
      <p className='text-brown-200 text-xl font-serif leading-8 m-4'>     
      ​小向 -- 没头脑，小贾 -- 不高兴。
        <br />
        小向 -- 吴彦祖，小贾 -- 张曼玉。
        <br />
        ​小向 -- 阿古保镖，小贾 -- 小猫公主。
        </p>
      <p className='text-brown-200 text-xl font-serif leading-8 m-4'>     
        在这里，你将发现小向和小贾的美好瞬间和难忘的回忆。
        <br />
        希望你离开时也带着快乐和甜蜜的记忆。
      </p>
      </div>

        {/* <PhotoGallery /> */}
      <section className="py-20 px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery image ${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
    </section>
    
    {/* <Contact /> */}
    <section className="bg-brown-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-serif text-brown-900 mb-6">如果你想和我们做朋友</h2>
          <div className="space-y-4 text-brown-600">
            <p>086-152-3619-5207</p>
            <p>xiangzmcr@163.com</p>
            <p>1086, Road Hejian, Yangpu District, Shanghai</p>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="给我们留言 *"
              className="w-full p-2 bg-white border border-brown-200 rounded"
              required
            />
            <a 
              href="mailto:xiangzmcr@163.com"
              className="block w-full p-2 text-center bg-brown-900 hover:bg-brown-800 text-white rounded"
            >
              Contact Us
            </a>
          </form>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
}

export default App;

