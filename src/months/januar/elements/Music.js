import ReactPlayer from 'react-player'

function Music()    
{
    return(
        <>
            <h1>Månedens musikk</h1>
            <ReactPlayer url="https://soundcloud.com/noriakinure/silent-alarm-activated" height="200px"></ReactPlayer>
            <ReactPlayer url="https://soundcloud.com/noriakinure/sne" height="200px"></ReactPlayer>
        </>
    );
}
export default Music;