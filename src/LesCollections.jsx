import Collection from './Collection';
import tabCollections from './Data/donnes.json';

function LesCollections() {

  return (
    <div className="listeCollections">
        <ul>
        {tabCollections.map((clt) => (
          <Collection 
            id={clt.id}
            titre={clt.titre}
            couleur={clt.couleur}
            date={clt.date}
            />
          ))}
        </ul>
    </div>
  );
}

export default LesCollections;