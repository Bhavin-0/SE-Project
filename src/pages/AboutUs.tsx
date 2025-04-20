// src/pages/AboutUs.tsx
import React from 'react';
import { GallerySection } from '../pages/gallerySection'; 



export const AboutUs = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gray-100 p-10 rounded-2xl shadow-md text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Rukmini Enterprises</h1>
        <p className="text-xl text-gray-700">Delivering Quality Welding Electrodes Since 1997</p>
      </div>

      {/* Company Overview */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="../images/factory_pic_5.jpeg" //  Use public/images path for accessibility
            alt="Manufacturing Unit"
            className="rounded-xl shadow-lg w-full max-w-[600px] mx-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About the Company</h2>
          <p className="text-lg text-gray-700 mb-4">
            Rukmini Enterprises has been manufacturing welding electrodes since 1997 with our
            production plant based in Nashik. We proudly supply high-quality electrodes under
            the brand names <strong>Pilot</strong>, <strong>Marshal</strong>,
            <strong> Supersparc</strong>, and <strong>Maharaja</strong> throughout India.
          </p>
          <p className="text-lg text-gray-700">
            Our primary raw materials include Mild Steel Electrode Quality Wire, Minerals, Rutile,
            Ferromanganese, and Potassium Silicate — ensuring reliable performance and strength in
            every product.
          </p>
        </div>
      </section>

      {/* 📸 Sliding Gallery Section */}
      <GallerySection />

      {/* BIS Section */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">BIS Certified Products</h3>
        <p className="text-lg text-gray-800">
          All our products are covered under the BIS Mark, promising consistency and quality to our customers.
        </p>
        <p className="text-md text-blue-700 font-medium mt-2">License Number: <strong>CM/L - 7726081</strong></p>
      </section>

      {/* Combined Photo Section for Owner */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Owner</h2>
        <div className="flex justify-center gap-10">
          <div className="text-center">
            <img
              src="../images/Ashwin_Mishra.jpeg" 
              alt="Avinash Mishra"
              className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Avinash Mishra</h4>
            <p className="text-gray-600">Co-Founder & Partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};
