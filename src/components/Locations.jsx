import LocationsBar from "./LocationsBar"
import SimpleLocation from "./SimpleLocation";
import Dormintoris from "./Dormintoris";
import Corpuses from "./Corpuses";

import library from "../img/library.jpg"
import sport from "../img/sport_compleks.jpg"
import clinic from "../img/clinic.jpg"

const locations = [
    {
        img: library, 
        title: "Бібліотека",
        info: "lorem impsum",
        location: "м.Івано-Франківськ, вул. Галицька, 7a.",
        textlink: "Дивитися на GoogleMaps",
        link: "https://www.google.com/maps/place/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%86%D0%A4%D0%9D%D0%9C%D0%A3/@48.9188515,24.6991442,16z/data=!4m6!3m5!1s0x4730c12100ef9ea5:0x8884924617a6c63a!8m2!3d48.9220073!4d24.7086888!16s%2Fg%2F11q94q8d3h?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        img: sport, 
        title: "Спортивний комплекс",
        info: "lorem impsum",
        location: "м.Івано-Франківськ, вул. Целевича, 34",
        textlink: "Дивитися на GoogleMaps",
        link: "#"
    },
    {
        img: clinic, 
        title: "Університетська клініка",
        info: "Запрошуємо вас отримати високоякісну медичну допомогу у нашій Університетській клініці! Наші висококваліфіковані лікарі та медичний персонал пропонують широкий спектр послуг для вашого здоров'я. Завдяки сучасним обладнанням та передовим методам лікування ми гарантуємо вам найкращу медичну підтримку. Нехай ваше здоров'я буде у надійних руках наших експертів. Студент, який захворів, для відпрацювання пропущених занять повинен мати підтверджену медичну довідку встановленої форми видану, або завірену Університетською клінікою",
        location: "м.Івано-Франківськ, вул. Короля Данила, 15",
        textlink: "Дивитися на GoogleMaps",
        link: "#"
    },
]

function Locations(){
    return(
        <div className="w-3/4 mx-auto mt-20">
            <h1 className="text-4xl text-center" >Локації університету</h1>
            <p className="text-center py-4">Choose what you need</p>
            <LocationsBar/>
            {locations.map(location => (
                <SimpleLocation
                    img={location.img}
                    title={location.title}
                    info={location.info}
                    location={location.location}
                    textlink={location.textlink}
                    link={location.link}
                />
            ))}
            <Dormintoris/>
            <Corpuses/>
        </div>
    )
}
export default Locations;