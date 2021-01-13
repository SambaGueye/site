import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Tweet from './components/Tweet';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h3 style={{textAlign:'center'}}>Les dernières publications</h3>
      <div className="tweets">
      <Tweet className='hey' title='Election presidentielles 2024' message='Je vous invite tou à voter pour SONKO parce que on en a marre de Mack Sall, il est la que pour son interet et exécute les règles dictées par la France.' likes='100k' img='https://upload.wikimedia.org/wikipedia/commons/d/d4/Candidat-ousmane-sonko.png'/>
      <Tweet className='hey' title='Corona virus en France' message='Le gouvernement annonce letat durgence Un régime dexception qui nen finit plus. Le gouvernement va présenter au prochain conseil des ministres, le 13 janvier, un projet visant à proroger dun an, jusquau 31 décembre 2021, le régime actuel de létat durgence sanitaire, a indiqué à LCI une source gouvernementale, confirmant une information de Libération.'  likes='100k' img='https://www.wgcdn.net/juritravail/image/tinymec/e096ea704e7e0a6df1bc95746cfbd5ac.jpg' />
      <Tweet className='hey' title='Un nouvel an comme pas les autre' message='Personne na le droit de sortir' likes='100k' img='https://creer-son-tshirt.fr/wp-content/uploads/2020/11/masque-nouvel-an-2021-lavabme.jpg' />
      <Tweet className='hey' title='Vaccin contre le covid19' message='La Russie a trouvé un vaccni tester sur la fille de Poutine' likes='100k' img='https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/4/7/84720bb8d8_50168921_vaccin-russe-feydzhet-shabanov-adobe-stock.jpg' />
      <Tweet className='hey' title='Vaccin contre le covid19' message='La Russie a trouvé un vaccni tester sur la fille de Poutine' likes='100k' img='https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/4/7/84720bb8d8_50168921_vaccin-russe-feydzhet-shabanov-adobe-stock.jpg' />
      </div>

      <div className='contact'>
        
      </div>
    </div>
  );
}

export default App;
