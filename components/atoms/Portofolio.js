import Card from './Card';
import style from '../../styles/animate.module.css';
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
    <div className="flex justify-center flex-col mx-6">
      <h1 className="text-3xl mt-5 mb-1">PORTOFOLIOS</h1>
      <div>
        <Card featured={logoFeatures1} title="Notes app" thumbnail="/simple-notes-app.png" />
        <Card featured={logoFeatures2} title="MovieKu " thumbnail="/MovieKu.png" />
        <Card featured={logoFeatures2} title="BookshelfApps" thumbnail="/CRUDvanillajs.png" />
      </div>
    </div>
  );
}
