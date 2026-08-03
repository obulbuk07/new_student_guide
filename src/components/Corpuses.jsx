import CorpusesGallery from "./CorpusesGallery"
import Corpuse from "./Corpuse"
const corpuses = [
    {
        name: "dsds",
        link: "#"
    },
    {
        name: "dsds",
        link: "#"
    },
    {
        name: "dsds",
        link: "#"
    },
    {
        name: "dsds",
        link: "#"
    },
]

function Corpuses(){
    return(
        <div>
            <h1>Corpuses</h1>
            <CorpusesGallery/>
            <div>
                {corpuses.map(corpuse => (
                    <Corpuse
                        name={corpuse.name}
                        link={corpuse.link}
                    />
                ))}
            </div>
        </div>
        
    )
}
export default Corpuses