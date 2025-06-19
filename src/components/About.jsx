export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-6 py-20 text-gray-800 flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mt-4">
          I’m a passionate Full Stack Developer with over 2.5 years of hands-on
          experience at Marketix. I specialize in building scalable and
          responsive web applications using the MERN stack.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Currently, I’m pursuing a Master of Science in Information Technology
          at <strong>Arizona State University</strong>. I previously earned my
          Bachelor's in Electrical Engineering from Vishwakarma Government
          Engineering College.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I love solving real-world problems with clean code and modern
          frameworks like React, Node, and Express. I’m always eager to learn,
          grow, and contribute to impactful projects.
        </p>
      </div>
    </section>
  );
}
