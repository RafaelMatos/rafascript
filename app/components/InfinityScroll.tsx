import React from "react";

const InfinityScroll = () => {
  const logos = [
    { 
      // src: Facebook
      alt: 'Facebook' },
    { 
      // src: Disney
      alt: 'Disney' },
    { 
      // src: Airbnb
      alt: 'Airbnb' },
    { 
      // src: Apple
      alt: 'Apple' },
    { 
      // src: Spark
      alt: 'Spark' },
    { 
      // src: Samsung
      alt: 'Samsung' },
    { 
      // src: Quora
      alt: 'Quora' },
    { 
      // src: Sass
      alt: 'Sass' },
  ]

  return (
    <div className="w-full flex flex-col overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex flex-col items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            {/* <Image src={logo.src} alt={logo.alt} /> */}
            <p>{logo.alt}</p>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            {/* <Image src={logo.src} alt={logo.alt} /> */}
            <p>{logo.alt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfinityScroll;
