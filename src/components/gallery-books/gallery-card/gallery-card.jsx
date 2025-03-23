import { Card } from "react-bootstrap";
import { useToolbar } from "../../context/toolbar-context/use-toolbar";
import { useProbabilityCalculation } from "../../../hooks/useProbabilityCalculation.js";
import { useBooks } from "../../context/books-context/use-books.jsx";
import { foreignWords } from "../../../foreign-words/foreign-words.js";
import { BookModal } from "../../book-modal/book-modal.jsx";
import { useState } from "react";
import styles from "./gallery-card.module.css";

export const GalleryCard = ({ index }) => {
    const [show, setShow] = useState(false);
    const { seed, language, reviews, likes } = useToolbar().toolbarParams;
    const countReviews = useProbabilityCalculation(reviews);
    const countLikes = useProbabilityCalculation(likes);
    const { getBook } = useBooks();

    const { allData } = getBook(+seed + index, language, countReviews);

    const { img, title, author } = allData;

    return (
        <>
            <Card onClick={() => setShow(!show)} className={`m-3 ${styles.card}`}>
                <div className="position-relative overflow-hidden">
                    <span className={styles.imgTop}>{title}</span>
                    <Card.Img variant="top" src={img} />
                    <span className={styles.imgBottom}>{author}</span>
                </div>
                <Card.Body>
                    <Card.Title className="text-capitalize">{title}</Card.Title>
                    <Card.Text>Like: {countLikes}</Card.Text>
                    <Card.Text className="text-capitalize">
                        {foreignWords.review[language]}: {countReviews}
                    </Card.Text>
                </Card.Body>
            </Card>
            <BookModal
                show={show}
                setShow={setShow}
                data={allData}
                countLikes={countLikes}
            />
        </>
    );
};
