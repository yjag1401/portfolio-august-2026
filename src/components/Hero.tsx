export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      {/* Name */}
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Yash Jagwan
      </h1>
      
      {/* Role */}
      <h2 className="mt-4 text-2xl font-medium text-gray-300">
        Software Development Engineer
      </h2>
      
      {/* Tagline */}
      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Building high-performance, scalable web applications and intuitive user experiences.
      </p>

      {/* 
        TODO FOR YASH: Add a Call to Action button below.
        Create an <a> tag that says "View Projects".
        Style it to look like a button using these Tailwind classes:
        - mt-8 (margin top)
        - px-6 (padding x-axis)
        - py-3 (padding y-axis)
        - bg-white (background color)
        - text-black (text color)
        - rounded-full (rounded corners)
        - font-semibold (font weight)
        aaaaassADDDCDC
        
      */
      }
      <a href="#" className="hover:bg-gray-200 transition-colors duration-200 mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold">
        View Projects
      </a>
    
    </section>
  );
}
