import { useToolbar } from "../context/toolbar-context/use-toolbar.jsx";
import { foreignWords } from "../../foreign-words/foreign-words.js";
import { BodyReview } from "../books-table-body/body-review/body-review.jsx";
import { Like } from "../../svg/like.jsx";
import styles from "./details.module.css";
import classNames from "classnames";

export const Details = ({ data, countLikes, transform }) => {
    const { title, author, publisher, reviews, img } = data;
    const { language } = useToolbar().toolbarParams;

    return (
        <div className={classNames("d-flex p-2", {"flex-column": transform})}>
            <div className="p-3 d-flex flex-column align-items-center gap-3">
                <div className="position-relative overflow-hidden">
                    <span className={styles.imgTop}>{title}</span>
                    <img src={img} alt="book" />
                    <span className={styles.imgBottom}>{author}</span>
                </div>
                <div className="rounded-pill py-1 px-2 bg-primary d-flex align-items-center gap-2">
                    <span className="text-white fw-bold lh-1">
                        {countLikes}
                    </span>
                    <Like />
                </div>
            </div>
            <div className="d-flex flex-column gap-2">
                <h2 className="m-0 fw-semibold text-capitalize">{title}</h2>
                <p className="fst-italic fw-semibold fs-4 m-0">{author}</p>
                <p className="fw-semibold text-black-50 m-0">{publisher}</p>
                {Boolean(reviews.length) && <p className="fs-4 fw-semibold text-capitalize m-0">
                    {foreignWords.review[language]}
                </p>}
                {reviews.map((e, ind) => (
                    <BodyReview key={ind} data={e} />
                ))}
            </div>
        </div>
    );
};
