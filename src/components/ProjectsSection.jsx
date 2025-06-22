const ProjectsSection = () => {
  const projects = [
    {
      title: 'Lost and Found Platform',
      description: 'A seamless digital platform that reconnects people with lost belongings through intuitive matching, real-time updates, and user-friendly tools.',
      image: '/static/snaps/lostfound.png',
      link: 'https://lostandfoundmini.netlify.app/',
      status: 'live'
    },
    {
      title: 'CyberTron',
      description: 'CyberTron empowers you with tools and games to master cybersecurity, train, defend, and conquer digital threats.',
      image: '/static/snaps/cyber.png',
      link: 'https://github.com/anuragparashar26/CyberTron/',
      status: 'live'
    },
    {
      title: 'Hostel Management System',
      description: 'A Java-based Hostel Management System with a MongoDB backend, offering secure login, student record management, and a user-friendly GUI for efficient categorization and seamless data handling.',
      image: '/static/snaps/jdbc.jpeg',
      link: 'https://github.com/anuragparashar26/java-swing-jdbc',
      status: 'live'
    },
    {
      title: 'VTU SGPA Calculator',
      description: 'The SGPA calculator was designed with a user-friendly interface, removing predefined credit points to support flexible grading systems and simplifying input for marks and credit points for a seamless experience.',
      image: '/static/snaps/calc.png',
      link: 'https://anuragparashar26.github.io/vtu-sgpa-calculator/',
      status: 'live'
    }
  ]

  return (
    <div className="pg3" id="pg3">
      <br /><br />
      <div className="section-header-project">
        <h2>Projects</h2>
        <div className="dash-project"></div>
        <p className="project-section-description">
          Collection of projects that demonstrate my expertise and the solutions I've built using a variety of technologies and tools.
        </p>
      </div>
      <br />
      
      {projects.map((project, index) => (
        <div key={index} className="project-showcase">
          <div className="image-section" data-aos="fade-up-right">
            <img src={project.image} alt="snapshot" className="snapshot-image" />
          </div>
          <div className="text-section" data-aos="fade-up">
            <h2 className="project-title">
              {project.title}
              <span className={`project-status ${project.status}`}>
                <i className="status-icon fas fa-circle"></i>
                {project.status === 'live' ? 'Live' : 'In Progress'}
              </span>
            </h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="case-study-btn" target="_blank" rel="noopener noreferrer">
              PROJECT LINK
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsSection