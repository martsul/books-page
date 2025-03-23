export const BodyReview = ({ data }) => {
    const { text, person } = data;

    return (
        <div className="">
            <p className="m-0 fw-semibold">{text}</p>
            <p className="text-black-50">- {person}</p>
        </div>
    );
};
