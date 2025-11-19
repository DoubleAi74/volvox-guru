"use client";

import Image from "next/image";
import DestinationLink from "@/components/DestinationLink";
import { destinations } from "@/components/DestinationLink";

export default function Page() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div
        className="min-h-screen relative p-6"
        style={{ backgroundColor: "#222222" }}
      >
        <div className="flex flex-col px-6">
          {/* Top Left Text */}
          <div className="text-xl font-semibold text-white">
            <h1 className="font-extrabold text-4xl text-[#fdff85] mb-2">
              Bali Loca
            </h1>
            Bespoke tours and personal transport to the gems of Bali. <br />
            Your driver to all the best places.
            <div className="mt-3 pl-5 text-[#fef68c]">
              <ul>
                <li>✅ Full day tours</li>
                <li>✅ Half day tours</li>
                <li>✅ Sunrise Hikes</li>
                <li>✅ Honeymoon packages</li>
              </ul>
            </div>
            <div className="text-sm mt-4">
              (we only charge for transport and you get local prices for
              everything else)
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://wa.me/6281568458973"
              target="_blank"
              className="flex justify-center items-center bg-[#187015] text-white px-4 py-2 rounded-lg hover:bg-[#47af27c2] transition shadow"
              rel="noopener noreferrer"
            >
              Add my WhatsApp
            </a>
            <a
              href="#destinations"
              className="flex justify-center items-center bg-[#0e3357] text-white px-4 py-2 rounded-lg hover:bg-[#317891] transition shadow"
            >
              Destinations
            </a>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-24 px-4 mt-[30px]">
          {images.map((num) => (
            <div
              key={num}
              className="w-full aspect-[4/3] bg-gray-300 rounded-md overflow-hidden shadow cursor-pointer hover:scale-105 transition-transform"
              onClick={() => document.getElementById(`img-${num}`).showModal()}
            >
              <Image
                src={`/temp-images/Image ${num}.jpg`}
                alt={`Image ${num}`}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Modals */}
        {images.map((num) => (
          <dialog
            id={`img-${num}`}
            key={`modal-${num}`}
            className="p-0 rounded-xl backdrop:bg-black/60"
          >
            <Image
              src={`/temp-images/Image ${num}.jpg`}
              alt={`Image ${num}`}
              width={1200}
              height={900}
              className="w-full h-auto rounded-t-xl"
            />
            <form method="dialog">
              <button className="w-full py-2 bg-gray-800 text-white rounded-b-xl">
                Close
              </button>
            </form>
          </dialog>
        ))}

        <div className="text-xl font-semibold text-white pl-7">
          <div id="destinations" className="text-sm mt-6">
            {"Hi my name's Mike 👋, and I'll be your guy on the inside."}
            <br />
            {
              "I'll help you cut through the information, so you can smoothly get to all the places which best suit your personal interests."
            }
            <br />
            <div className="mt-3">
              {
                "Just send me a message on WhatsApp, or an email (mybalioption@gmail.com), and we'll discuss your needs."
              }
            </div>
          </div>
        </div>

        <div className="text-white pl-7">
          <h1 className="font-extrabold text-2xl mb-3 mt-7">Destinations</h1>

          <ul className="list-none p-0 space-y-2">
            {destinations.map((dest, index) => (
              <DestinationLink key={index} name={dest.name} href={dest.href} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
