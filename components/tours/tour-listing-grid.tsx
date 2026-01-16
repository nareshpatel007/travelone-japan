import { TourCard } from "./tour-card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Define props
type Props = {
    tourList: any
}

export function TourListingGrid({ tourList }: Props) {
    return (
        <>
            {tourList && tourList.length !== 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    {tourList.map((tour: any) => (
                        <TourCard key={tour.id} {...tour} />
                    ))}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                        <Skeleton height={300} />
                        <div className="hidden lg:block"><Skeleton height={300} /></div>
                        <div className="hidden lg:block"><Skeleton height={300} /></div>
                        <div className="hidden lg:block"><Skeleton height={300} /></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                        <div className="hidden lg:block"><Skeleton height={300} /></div>
                        <div className="hidden lg:block"><Skeleton height={300} /></div>
                        <div className="hidden lg:block"><Skeleton height={300} /></div>
                        <div className="hidden lg:block"><Skeleton height={300} /></div>
                    </div>
                </>
            )}
        </>
    )
}
