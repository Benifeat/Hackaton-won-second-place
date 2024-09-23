import '../../index.css';

export default function MapSection () {

    return(
        <>
<div className="relative z-10 flex items-center bg-background">
    <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
        <div className="flex flex-col">
            <h1 className="w-full text-4xl font-light text-center text-text uppercase sm:text-5xl">
                Turn Leftovers into Lifesavers: Donate Food, Fight Hunger
            </h1>
            <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-text/80">
                Donating leftover food from restaurants to those in need is a meaningful way to tackle food waste and hunger. By redirecting surplus meals to shelters and food banks, we turn potential waste into vital support for individuals and families facing food insecurity. This not only helps reduce environmental impact but also provides much-needed nourishment to those struggling to make ends meet, making a significant difference in their lives and fostering a culture of generosity within our communities.
            </h2>
            <div className="flex items-center justify-center mt-4">
                <a href="#" className="px-4 py-2 mr-4 text-background uppercase bg-primary/90 border-2 border-primary text-md hover:bg-primary">
                    Go to map
                </a>
                <a href="#" className="px-4 py-2 text-primary uppercase border-2 border-primary hover:text-background/90 hover:bg-primary/90 text-md">
                    Learn more
                </a>
            </div>
        </div>
        {/* <div className="relative block w-full mx-auto mt-6 md:mt-0">
            <img src="/images/object/12.svg" className="max-w-xs m-auto md:max-w-2xl"/>
        </div> */}
    </div>
</div>
        </>
    )
}

