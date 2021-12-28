import React from 'react';
import { motion } from 'framer-motion';

const Wrapper = (props) => {
  return <span>{props.children}</span>;
};

const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

const AnimatedCharacters = (props) => {
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = props.text.split(' ');

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(' '));
  }

  words.map((word) => {
    return word.push('\u00A0');
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];
  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            <span className="overflow-hidden inline-block " key={index}>
              <motion.span className={`inline-block ${props.style}`} variants={item}>
                {word}
              </motion.span>
            </span>
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;
