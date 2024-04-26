import NavigationDots from "@components/home/NavigationDots";
import SocialMedia from "@components/home/SocialMedia";

const AppWrap = ({Component,idName,classNames})=> function HOC(){
    return(
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia/>
            <div className="app__wrapper flex items-center justify-center">
                <Component/>
                <div className="copyright bg-gray-100">
                    <p className="text-sm text-gray-500 font-semibold">@2024 MUSONDA MAKENA</p>
                    <p className="text-sm text-gray-500 font-semibold">All rights reserved</p>
                </div>
            </div>
            <NavigationDots/>
        </div>
    )

}
export default AppWrap;