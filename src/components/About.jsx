import { useEffect, useState } from 'react';

const About = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 5) {
          return prevDots + '.';
        } else {
          return '';
        }
      });
    }, 500); // Pisteet ilmestyvät 500 ms välein

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center text-white text-xl py-20 font-pixel">
      <p className="text-xl font-pixel">
        Under construction
        {dots.split('').map((dot, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fadeIn"
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {dot}
          </span>
        ))}
      </p>
    </div>
  );
};

export default About;





// const About = () => {
//     return (
//     <div className="flex items-center justify-center text-white text-xl py-20 font-pixel">
//         <p>Under construction...</p>
//     </div>
//     )
// };

// export default About;