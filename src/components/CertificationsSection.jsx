import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Cybersecurity Specialization',
      issuer: 'Google and Coursera',
      issued: 'Oct,2024',
      credentialId: 'RJO9Y8VL6CWF',
      description: 'Earned the Google Cybersecurity Professional Certificate, showcasing expertise in threat detection, incident response, and system security for cybersecurity roles.',
      link: 'https://coursera.org/share/906663465d385b6dad931ae9c3115ea4',
      image: 'static/google.png'
    },
    {
      title: 'AI Essentials',
      issuer: 'Google and Coursera',
      issued: 'Jun,2024',
      credentialId: 'QGY95GSDNG2C',
      description: 'Gained expertise in using generative AI tools to boost productivity, craft effective prompts, and apply AI responsibly by addressing biases and ensuring ethical integration into workflows.',
      link: 'https://coursera.org/share/1b36fa8c44299b051803be4f67673ead',
      image: 'static/google.png'
    },
    {
      title: 'Digital Skills: User Experience',
      issuer: 'Accenture and Future Learn',
      issued: 'Feb,2024',
      credentialId: '0wzqu2l',
      description: 'Completed Accenture\'s UX Certification, mastering user journeys, information architecture, and prototyping, showcasing expertise in designing intuitive, user-centered interfaces for impactful digital experiences.',
      link: 'https://www.futurelearn.com/certificates/0wzqu2l',
      image: 'static/acc.png'
    }
  ];

  return (
    <div className="pg4" id="pg4">
      <br /><br />
      <div className="section-header">
        <h2>Certifications</h2>
        <div className="dash"></div>
        <p className="section-description">
          List of Certifications I've earned, reflecting my commitment to continuous learning and professional growth.
        </p>
      </div>
      <br />
      <section id="certs">
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certs-card" data-aos="fade-up">
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <h4>
                by <b>{cert.issuer}</b> <br />
                <b>Issued</b> {cert.issued} <br />
                <b>Credential ID</b> {cert.credentialId}
              </h4>
              <p className="cert-description">{cert.description}</p>
              <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                View Certification
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CertificationsSection;