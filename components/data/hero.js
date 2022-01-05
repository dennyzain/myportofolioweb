import style from '../../styles/animate.module.css';

const hero = [
  {
    type: 'paragraph',
    text: 'Hi there, im',
    style: 'md:text-xl text-white ',
  },
  {
    type: 'heading1',
    text: 'Denny Abbas Zain',
    style: `text-xl md:text-2xl ${style.animate}`,
  },
  {
    type: 'paragraph',
    text: 'a web developer based in Bogor, Indonesian.',
    style: 'md:text-xl',
  },
];

export default hero;
