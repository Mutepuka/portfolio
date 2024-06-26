import NavigationDots from "@components/home/NavigationDots";
import SocialMedia from "@components/home/SocialMedia";

const AppWrap = (Component,idName,classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Component/>
            <div className="copyright bg-gray-100">
            <p className="text-sm text-gray-500 font-semibold">@2024 MUSONDA MAKENA</p>
            <p className="text-sm text-gray-500 font-semibold">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap