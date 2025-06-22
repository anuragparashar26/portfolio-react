import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrases = ["Web Development", "AI", "Open Source", "Cybersecurity", "Design", "Problem Solving"]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[currentPhrase]
      
      if (!isDeleting) {
        if (currentIndex < current.length) {
          setCurrentText(current.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(current.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentPhrase((currentPhrase + 1) % phrases.length)
        }
      }
    }, isDeleting ? 100 : 150)

    return () => clearTimeout(timeout)
  }, [currentIndex, currentPhrase, isDeleting, phrases])

  return (
    <div className="pg1" id="pg1">
      <div className="title">
        <b>Hey, I am Anurag Parashar</b>
        <h2>Passionate about <span id="dynamicText">{currentText}</span></h2>
      </div>
    </div>
  )
}

export default HeroSection