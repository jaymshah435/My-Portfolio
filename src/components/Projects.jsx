const projects = [
  {
    name: 'Startup KPI Tracker',
    tech: 'React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS',
    description:
      'Comprehensive KPI dashboard for SaaS companies with secure login, real-time metrics visualization (MRR, CAC, churn), smart filtering, and CSV export.',
    github: 'https://github.com/jaymshah435/KPI-Tracker',
  },
  {
    name: 'Audio Summary Generator',
    tech: 'React.js, Node.js, Express.js, AssemblyAI, Google Gemini API, Tailwind CSS',
    description:
      'Full-stack app allowing users to upload audio, transcribe with AssemblyAI, and generate Gemini-powered human-like summaries with live feedback.',
    github: 'https://github.com/jaymshah435/Audio-Summary-Generator',
  },
  {
    name: 'AI Code Reviewer',
    tech: 'React.js, Node.js, Express.js, Tailwind CSS, Google Gemini API',
    description:
      'AI-driven platform where users submit code and receive Gemini-based feedback highlighting bugs, enhancements, and best practices in clean Markdown.',
    github: 'https://github.com/jaymshah435/Code-Reviewer',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 text-gray-800 px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block">
        Projects
      </h2>
      <div className="max-w-5xl w-full space-y-12">
        {projects.map(({ name, tech, description, github }, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-700">{name}</h3>
            <p className="text-gray-600 italic mb-2">{tech}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}