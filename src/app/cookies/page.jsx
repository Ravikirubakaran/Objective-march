"use client";
import { data } from "../../data/cardData";
import Image from "next/image";
import ContactForm from "./form";
import CookieBanner from "./cookies";
import { useState } from "react";
export default function Home() {
  const [showCookiesModal, setShowCookiesModal] = useState(true);

  const handleCookiesAccept = () => {
    setShowCookiesModal(false);
  };

  const handleCookiesDecline = () => {
    setShowCookiesModal(false);
  };
  return (
    <>
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundImage: "url(/assets/images/eat-and-drink-banner.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((item, index) => (
              <div key={index} className="xl:w-1/2 md:w-1/2 p-6">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    {item.icon}
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Employee contact type when receiving information from a coworker.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {showCookiesModal && (
        <CookieBanner
          onAccept={handleCookiesAccept}
          onDecline={handleCookiesDecline}
        />
      )}
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-16 lg:p-24">
    //   <div className="flex flex-wrap justify-center gap-8">
    //     {cardsData.map((card) => (
    //       <div
    //         key={card.id}
    //         className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md mb-8 md:w-1/2 lg:w-1/4"
    //       >
    //         <div className="h-48 md:h-64 lg:h-80 overflow-hidden">
    //           <Image
    //             src={card.image}
    //             alt={`Card ${card.id}`}
    //             width={300}
    //             height={200}
    //             className="w-full h-full object-cover"
    //           />
    //         </div>
    //         <div className="p-4">
    //           <h3 className="text-xl font-bold mb-2">{card.title}</h3>
    //           <p className="text-gray-600">{card.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </main>
  );
}
