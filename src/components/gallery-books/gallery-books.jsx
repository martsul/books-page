import { GalleryCard } from "./gallery-card/gallery-card";

export const GalleryBooks = ({ times }) => {
    return (
        <>
            {[...new Array(times)].map((_, ind) => (
                <div key={ind} className="col-12 col-lg-3 col-md-4 col-sm-6">
                    <GalleryCard index={ind} />
                </div>
            ))}
        </>
    );
};
