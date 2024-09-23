import '../../index.css';
import logoSvg from '../../assets/EzratHaverLogo.svg'

export default function HeadSection () {

    return(
        <>
        <div className="relative z-10 flex items-center overflow-hidden bg-background">
    <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-10 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-accent">
            </span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-text uppercase font-bebas-neue sm:text-7xl">
                EZRATHAVER
                <span className="text-5xl sm:text-6xl">Do somthing good</span>
            </h1>
            <p className="text-sm text-text/80 sm:text-base">
            Experience a new level of productivity with our comprehensive task management solution. Our app is designed to help you manage tasks with precision, from setting priorities to tracking progress. Share tasks with your team, set deadlines, and watch as your productivity soars.
            </p>
            <div className="flex mt-8">
                <a href="#" className="px-4 py-2 mr-4 text-background uppercase bg-accent border-2 border-transparent rounded-lg text-md hover:bg-primary/90">
                    Get started
                </a>
                <a href="#" className="px-4 py-2 text-accent uppercase bg-transparent border-2 border-accent rounded-lg hover:bg-accent hover:text-background text-md">
                    Explore for exemples
                </a>
            </div>
        </div>
        <div className="md:relative hidden bottom-0 sm:w-1/3 md:flex lg:w-3/5">
            <img src={logoSvg} className="max-w-xs md:items-center md:justify-center md:m-auto mb-0 md:max-w-sm"/>
        </div>
    </div>
</div>
        </>
    )
}

