import './Appli.scss';
import Entete from './Entete';
import LesCollections from './LesCollections';
import BasDePage from './BasDePage';



export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section>
          <LesCollections />
        </section>
        <BasDePage />
        
        
    </div>
  );
}