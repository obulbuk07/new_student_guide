import BigLogo from "../img/big_logo.jpg"

function Banner(){
    return(
        <div className=" flex flex-row-reverse p-4 gap-10 items-center justify-between mx-auto w-3/4 mb-8 mt-20">
            <img className="w-80" src={BigLogo} alt="" />
            <p className="text-xl pr-10" > Student Guide стане корисним для студентів, які тільки починають навчання у нашому фаховому медичному коледжі чи Університеті, а також для тих, хто вже є студентом, але хоче дізнатися більше про різні послуги та можливості, які надає Університет.</p>
        </div>
    )
}
export default Banner;