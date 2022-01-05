import { motion } from 'framer-motion';

function Wrapper({ children }) {
  return <span>{children}</span>;
}

const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

function AnimatedCharacters(props) {
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

  const { text, type, style } = props;

  const splitWords = text.split(' ');

  const words = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(' '));
  }

  words.map((word) => word.push('\u00A0'));

  // Get the tag name from tagMap
  const Tag = tagMap[type];
  return (
    <Tag>
      {words.map((word, index) => (
        <Wrapper key={index}>
          <span className="overflow-hidden inline-block " key={index}>
            <motion.span className={`inline-block ${style}`} variants={item}>
              {word}
            </motion.span>
          </span>
        </Wrapper>
      ))}
    </Tag>
  );
}

export default AnimatedCharacters;
