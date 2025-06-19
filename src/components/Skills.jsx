const skills = [
  { name: 'HTML5', icon: '/icons/HTML5.png' },
  { name: 'CSS3', icon: '/icons/CSS3.png' },
  { name: 'JavaScript', icon: '/icons/JavaScript.png' },
  { name: 'MongoDB', icon: '/icons/MongoDB.png' },
  { name: 'Express.js', icon: '/icons/Express.png' },
  { name: 'React.js', icon: '/icons/React.png' },
  { name: 'Redux', icon: '/icons/Redux.png' },
  { name: 'Node.js', icon: '/icons/NodeJS.png' },
  { name: 'Tailwind CSS', icon: '/icons/TailwindCSS.png' },
  { name: 'Python', icon: '/icons/Python.png' },
  { name: 'Tableau Software', icon: '/icons/TableauSoftware.png' },
  { name: 'MySQL', icon: '/icons/MySQL.png' },
  { name: 'Postman', icon: '/icons/Postman.png' },
  { name: 'Git', icon: '/icons/Git.png' },
  { name: 'AWS', icon: '/icons/AWS.png' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 inline-block">
        Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl w-full">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 group cursor-default"
          >
            <img
              src={icon}
              alt={`${name} logo`}
              className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <p className="text-sm text-gray-700">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
