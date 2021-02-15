import './Collection.scss';

export default function Collection(props) {

    return (
        <div>
            <div>
                <div style={{backgroundColor: props.couleur}} className="imageCouverture">
                    <button>Déplacer</button>
                </div>
                <div className="descCollection">
                    <p>{props.titre}</p>
                    <p>Modifié le : {props.date} </p>
                    <button>...</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>

    );
}