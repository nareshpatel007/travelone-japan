import { TourCard } from "./tour-card";

const tours = [
    {
        id: 1,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
        badge: "Likely to sell out",
        tourType: "DAY TRIP",
        rating: 4.4,
        reviews: 899,
        title: "Stingray City and Starfish Experience with Coral Reef Snorkeling",
        duration: "3 hours 30 minutes",
        price: "$6,005",
    },
    {
        id: 2,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-4.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.6,
        reviews: 390,
        title: "Stingray City Sandbar, Coral Gardens Snorkeling & Blue Fish Point",
        duration: "3 hours",
        price: "$6,005",
    },
    {
        id: 3,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-7.jpg",
        tourType: "WATER ACTIVITY",
        rating: 4.5,
        reviews: 99,
        title: "Stingray Sandbar, Snorkeling, and Starfish Point",
        duration: "3 hours 45 minutes",
        price: "$5,005",
    },
    {
        id: 4,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-8.jpg",
        tourType: "DAY TRIP",
        badge: "Likely to sell out",
        rating: 4.6,
        reviews: 988,
        title: "Stingray City, Snorkeling, & Starfish Adventure",
        duration: "3 hours 30 minutes",
        price: "$6,005",
    },
    {
        id: 5,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-9.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.8,
        reviews: 2447,
        title: "Stingray City Experience Plus Two Snorkeling Stops on Grand Cayman",
        duration: "3 hours",
        price: "$7,260",
        originalPrice: "$8,500",
    },
    {
        id: 6,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-5.jpg",
        tourType: "ADVENTURE",
        rating: 5.0,
        reviews: 85,
        title: "Grand Cayman Exotic Jet Car Experience in 7 Mile Beach",
        duration: "40 minutes",
        price: "$23,714",
    },
    {
        id: 7,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/11/Destination-img-24.jpg",
        tourType: "WATER ACTIVITY",
        rating: 4.7,
        reviews: 649,
        title: "Starfish Point, Stingray City & Coral Garden (3-STOP Adventure)",
        duration: "3 hours 30 minutes",
        price: "$7,560",
    },
    {
        id: 8,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/11/Destination-img-23.jpg",
        tourType: "DAY TRIP",
        rating: 4.6,
        reviews: 594,
        title: "Starfish Point, Stingray City Sandbar & Coral Gardens",
        duration: "3 hours 45 minutes",
        price: "$6,005",
        originalPrice: "$7,200",
    },
    {
        id: 9,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/11/Destination-list-026.jpg",
        tourType: "PRIVATE TOUR",
        rating: 5.0,
        reviews: 894,
        title: "Private Boat Tours: Customize Your Grand Cayman Adventure",
        duration: "2 to 8 hours",
        price: "$48,007",
        extraInfo: "Per group",
    },
    {
        id: 10,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-2.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.6,
        reviews: 259,
        title: "Stingray City, Coral Reef, Starfish Point & 7 Mile Beach",
        duration: "4 hours 30 minutes",
        price: "$7,852",
    },
    {
        id: 11,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
        tourType: "WATER ACTIVITY",
        badge: "Likely to sell out",
        rating: 4.8,
        reviews: 904,
        title: "Stringrays, Starfish, Stingray City, & Snorkeling Tour",
        duration: "3 hours",
        price: "$7,260",
    },
    {
        id: 12,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-5.jpg",
        tourType: "DAY TRIP",
        rating: 4.9,
        reviews: 979,
        title: "Stingray City Experience Plus One Snorkeling Stop",
        duration: "2 hours 45 minutes",
        price: "$5,505",
    },
]

export function TourListingGrid() {
    return (
        <div className="!max-w-7xl !mx-auto px-4 md:px-8 py-6 md:py-8 !mb-15">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
                {tours.map((tour) => (
                    <TourCard key={tour.id} {...tour} />
                ))}
            </div>
        </div>
    )
}
