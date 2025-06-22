import React from 'react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://x.com/binarycomposer', src: 'static/x.jpg', alt: 'X' },
    { href: 'https://linkedin.com/in/anuragparashar26', src: 'static/linkedin.png', alt: 'LinkedIn' },
    { href: 'https://github.com/anuragparashar26', src: 'static/github.jpg', alt: 'GitHub', style: { height: 'fit-content', marginBottom: '2px' } },
    { href: 'https://leetcode.com/anuragparashar', src: 'static/leetcode.png', alt: 'Leetcode' }
  ];

  return (
    <footer>
      <div className="footer-content">
        <div className="copyright-text">
          2025. Designed by Anurag Parashar.<br />
        </div>
      </div>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hide-link">
            <img src={link.src} alt={link.alt} style={link.style} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;