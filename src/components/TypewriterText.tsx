import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 0 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
};

export default TypewriterText;
