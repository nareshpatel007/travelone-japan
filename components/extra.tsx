import Image from "next/image";
import Heading from "./common/heading";

// Define interface
interface CategoryCard {
    id: number
    label: string
    image: string
}

const categories: CategoryCard[] = [
    {
        id: 1,
        label: "Destinations",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-7.jpg",
    },
    {
        id: 2,
        label: "Road Trips",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-8.jpg",
    },
    {
        id: 3,
        label: "Secret Gems",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-026.jpg",
    },
    {
        id: 4,
        label: "Tips & Tricks",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-9.jpg",
    },
];

const cities = [
    { name: "Teneriffe", category: "Low budget", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-3.jpg" },
    { name: "Georgia", category: "Hiking", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-5.jpg" },
    { name: "Istanbul", category: "Food tours", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-7.jpg" },
    { name: "Maldives", category: "Low budget", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-img-24.jpg" },
    { name: "Jordan", category: "Hiking", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-2.jpg" },
    { name: "Istanbul", category: "Food tours", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-7.jpg" },
];

// Define array
const populorDestination = [
    {
        id: 1,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-08.jpg",
        name: "Giza"
    },
    {
        id: 2,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-01.jpg",
        name: "Mexico"
    },
    {
        id: 3,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-04.jpg",
        name: "Paris"
    },
    {
        id: 4,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-07.jpg",
        name: "Lagos"
    },
    {
        id: 5,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-03.jpg",
        name: "Notodden"
    },
    {
        id: 1,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-08.jpg",
        name: "Giza"
    }
];

export default function ExtraCard() {
    return (
        <>
            {/* Section */}
            <div>
                <Heading main="Quick Type Pick" sub="Nulla massa nisl, aliquam sed ante porta, suscipit facilisis nulla." />

                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    {categories.map((category) => (
                        <div key={category.id} className="relative h-48 md:h-72 rounded-lg !text-center overflow-hidden group cursor-pointer">
                            <Image
                                src={category.image || "/placeholder.svg"}
                                alt={category.label}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="!bg-white px-5 py-2 rounded">
                                    <h3 className="text-md md:text-xl text-black">{category.label}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section */}
            <div>
                <Heading main="Top Cities" sub="Lorem ipsum dolor sit amet cons ectetur adipi." />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {cities.map((destination, index) => (
                        <div key={index} className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                src={destination?.image || "/placeholder.svg"}
                                alt={destination?.name || "Image"}
                                fill
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                            <div className="!absolute !bottom-0 !left-0 !right-0 !p-6 !text-white !flex !flex-col !justify-end !h-full">
                                <h3 className="!text-2xl !font-semibold !text-white !mb-1">{destination.name}</h3>
                                <p className="!text-sm !font-light">{destination.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section */}
            <div>
                <Heading main="Favourite Destinations" sub="Vestibulum id neque varius, loreet nisi ut, pharetra metus." />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {populorDestination.map((destination, index) => (
                        <div key={index} className="flex-shrink-0 flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 flex-shrink-0">
                                <Image
                                    src={destination?.image || "/placeholder.svg"}
                                    alt={destination?.name || "Destination"}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="!text-lg !font-semibold !text-black">{destination?.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section */}
            <div className="py-3 px-5 md:px-10">
                <Heading
                    main="Showcased Tales"
                    sub="Suspendisse efficitur, tellus vel auctor viverra, tellus"
                />
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10 items-start">
                    {[
                        "home-5-img-4.jpg",
                        "home-5-img-6.jpg",
                        "home-5-img-1.jpg",
                        "home-5-img-3.jpg",
                        "home-5-img-5.jpg",
                        "home-5-img-2.jpg",
                    ].map((img, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:h-80 mb-4 sm:mb-6 overflow-hidden">
                                <Image
                                    src={`https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/${img}`}
                                    alt="Image"
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="text-center px-2">
                                <h3 className="text-base sm:text-lg lg:text-xl font-light leading-tight">
                                    Culinary journeys reveal the heart of a destination’s culture.
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section */}
            <div className="relative w-full h-150 overflow-hidden">
                <Image
                    src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-6.jpg"
                    alt="Travel worth reading about"
                    fill
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
                />
                <div className="relative h-full flex items-center justify-center px-8">
                    <div className="text-center max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
                            For Travels Worth<br />
                            Reading About
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
