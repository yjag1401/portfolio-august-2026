export default function About() {
  return (
    <section id="about" className="flex min-h-screen flex-col items-start justify-center p-8 bg-zinc-950 text-white">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          About <span className="text-purple-400">Me.</span>
        </h2>
        
        {/* Introduction Paragraphs */}
        <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
          <p>
            I am a Computer Engineering undergraduate at Thapar Institute with a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.
          </p>
          <p>
            I specialize in building full-stack applications and automation tooling. My recent work involves engineering multi-agent LLM pipelines (Anthropic API), building AI-powered security scanners, and developing robust data-collection systems.
          </p>
        </div>
        
        {/* Skills Flexbox Container */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-200">Core Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {["C++", "Python", "React", "Next.js", "Node.js", "SQL", "LLM APIs", "Playwright"].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 border border-purple-500/30 bg-purple-500/10 text-purple-400 rounded-full font-medium text-sm transition-colors hover:bg-purple-500/20 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
