``
import React, { useState, useEffect } from 'react';

function TypingText() {
  const text = "Amplify Your SocialMedia Reach in Just 3 Months!";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (i < text.length) {
          setTypedText(text.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setTypedText("");
            i = 0;
          }, 95000); // pause before restarting
        }
      }
    }, 150); // adjust typing speed

    return () => clearInterval(typingInterval);
  }, [isTyping, text]);

  return (
    <section>
      <p>{typedText}</p>
    </section>
  );
}

export default TypingText;