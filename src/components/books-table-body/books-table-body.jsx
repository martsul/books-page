import { BodyRow } from "./body-row/body-row";

export const BooksTableBody = ({ times }) => {
    return (
        <>
            {[...new Array(times)].map((_, index) => (
                <BodyRow index={index} key={index} />
            ))}
        </>
    );
};
