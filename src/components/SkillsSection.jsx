import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'C', icon: 'https://skillicons.dev/icons?i=c' },
    { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp' },
    { name: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=py' },
    { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html', tooltip: 'HTML' },
    { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css', tooltip: 'CSS' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind', tooltip: 'TailwindCSS' },
    { name: 'Node', icon: 'https://skillicons.dev/icons?i=nodejs', tooltip: 'Node.js' },
    { name: 'Express', icon: 'https://skillicons.dev/icons?i=express', tooltip: 'Express.js' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'mysql', icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
    { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
    { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
    { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
    { name: 'Canva', icon: 'static/canva.png', style: { borderRadius: '10px' } },
    { name: 'Render', icon: 'static/render.jpg', style: { borderRadius: '10px' } },
    { name: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase' },
    { name: 'Jenkins', icon: 'https://skillicons.dev/icons?i=jenkins' },
    { name: 'Tableau', icon: 'static/tableau.png', style: { borderRadius: '10px' } },
    { name: 'Jupyter', icon: 'static/jupyter.png', style: { borderRadius: '10px' } },
    { name: 'sklearn', icon: 'https://skillicons.dev/icons?i=scikitlearn', tooltip: 'Scikit-learn' }
  ];

  return (
    <div className="skills-section" id="skills">
      <div className="section-header">
        <h2>Skills & Toolset</h2>
        <div className="dash"></div>
        <p className="section-description">
          Here's a list of the skills I possess and the tools I work with proficiently.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skills-grid" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" data-tooltip={skill.tooltip || skill.name}>
              <img 
                src={skill.icon} 
                alt={`${skill.name} Logo`} 
                style={skill.style}
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;