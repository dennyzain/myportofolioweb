import { motion } from 'framer-motion';
import SubHeader from '../molecules/SubHeader';
import Card from './Card';
export default function Portofolio() {
  const logoFeatures1 = [
    { name: 'React', image: '/react.png' },
    { name: 'Firebase', image: '/firebase.png' },
    { name: 'Sass', image: '/sass.png' },
  ];
  const logoFeatures2 = [
    { name: 'Web component', image: '/webcomponent.png' },
    { name: 'Sass', image: '/sass.png' },
    { name: 'Webpack', image: '/webpack.png' },
  ];
  return (
    <motion.div exit={{ opacity: 0 }} className="animate-fadeUp flex justify-center flex-col mx-6">
      <h1 className="text-3xl">PORTOFOLIOS</h1>
      <div className="m-1">
        <Card featured={logoFeatures1} title="Notes app" thumbnail="/simple-notes-app.png" />
        <Card featured={logoFeatures2} title="MovieKu " thumbnail="/MovieKu.png" />
        <Card featured={logoFeatures2} title="Book CRUD" thumbnail="/CRUDvanillajs.png" />
      </div>
    </motion.div>
  );
}
