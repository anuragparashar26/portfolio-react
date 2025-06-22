import React, { useState, useEffect } from 'react';

const SocialStrip = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let socialTimeout;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
      lastScrollY = window.scrollY;

      clearTimeout(socialTimeout);
      socialTimeout = setTimeout(() => {
        setHideOnScroll(false);
      }, 1200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(socialTimeout);
    };
  }, []);

  const socialLinks = [
    { href: 'https://x.com/binarycomposer', src: 'static/x.jpg', alt: 'Twitter' },
    { href: 'https://linkedin.com/in/anuragparashar26', src: 'static/linkedin.png', alt: 'LinkedIn' },
    { href: 'https://github.com/anuragparashar26', src: 'static/github.png', alt: 'GitHub' },
    { href: 'https://leetcode.com/anuragparashar', src: 'static/leetcode.png', alt: 'LeetCode' }
  ];

  return (
    <div className={`social-strip ${hideOnScroll ? 'hide-on-scroll' : ''}`}>
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <img src={link.src} alt={link.alt} className="social-icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialStrip;