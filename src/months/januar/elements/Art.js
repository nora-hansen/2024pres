import './Art.css';
// import Image from './Image';

function Art()  
{
    return(
        <>
            <h2>Månedens kunstverk</h2>
            <div className="art-grid">
                <div class="row">
                    <div class="column">
                        <img
                            src="art/jan/01jan01.png"
                            alt="To bitcher om natta idk"
                            className="artwork"
                            />
                        <img
                            src="art/jan/03jan02.png"
                            alt="Blå med regn oo"
                            className="artwork"
                            />
                        <img
                            src="art/jan/03jan03.png"
                            alt="Blomster dame"
                            className="artwork"
                            />
                        <img
                            src="art/jan/06jan01.png"
                            alt="Tuttifrutti kis"
                            className="artwork"
                            />
                    </div>
                    <div class="column">
                        <img
                            src="art/jan/02jan01.png"
                            alt="Grønn kis"
                            className="artwork"
                            />
                        <img
                            src="art/jan/02jan03.png"
                            alt="Rosa og lilla"
                            className="artwork"
                            />
                        <img
                            src="art/jan/04jan01.png"
                            alt="Blå pia"
                            className="artwork"
                            />
                    </div>
                    <div class="column">
                        <img
                            src="art/jan/02jan02.png"
                            alt="Luka men jeg hater perspektiv"
                            className="artwork"
                            />
                        <img
                            src="art/jan/03jan01.png"
                            alt="Veldig veldig gul"
                            className="artwork"
                            />
                        <img
                            src="art/jan/05jan01.png"
                            alt="Mikmik"
                            className="artwork"
                            />
                        <img
                            src="art/jan/06jan02.png"
                            alt="Mørkt"
                            className="artwork"
                            />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Art;