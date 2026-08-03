import Dormintory from "./Dormitory"

const dorms = [
    {
        location: "ass",
        link: "#"
    },
    {
        location: "ass",
        link: "#"
    },
    {
        location: "ass",
        link: "#"
    },
]
function Dormintoris(){
    return(
        <div>
            <h1></h1>
            <img src="" alt="" />
            {dorms.map(dorm => (
                <Dormintory
                    location={dorm.location}
                    link={dorm.link}
                />
            ))}
        </div>
    )
}
export default Dormintoris