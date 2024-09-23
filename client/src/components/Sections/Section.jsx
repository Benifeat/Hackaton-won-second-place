import '../../index.css';

export default function Section () {

    return(
        <>
    <div className="bg-background">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-10">
            <h2 className="text-3xl font-extrabold text-text sm:text-4xl">
                <span className="block">
                Together, We Can Build 
                </span>
                <span className="block text-accent">
                Stronger Communities. 
                </span>
            </h2>
            <p className="text-xl mt-4 max-w-4xl mx-auto text-text/40">
            Volunteering and giving back to the community are powerful ways to create lasting change. When we come together to support those who are less fortunate, we not only address immediate needs but also foster a spirit of solidarity and collective responsibility. Each contribution, no matter how small, helps to build a stronger, more resilient community. By sharing our time, resources, and kindness, we can make the world a better place for everyone.</p>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                    <button type="button" className="py-4 px-6  bg-primary/85 hover:bg-primary focus:ring-accent/50 focus:ring-offset-secondary text-background w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Explore more
                    </button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}