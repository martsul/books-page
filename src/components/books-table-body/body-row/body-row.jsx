import { useState } from "react";
import { useToolbar } from "../../context/toolbar-context/use-toolbar";
import { Details } from "../../details/details.jsx";
import classNames from "classnames";
import styles from "./body-row.module.css";
import { useBooks } from "../../context/books-context/use-books.jsx";
import { useProbabilityCalculation } from "../../../hooks/useProbabilityCalculation.js";
import { Arrow } from "../../../svg/arrow.jsx";

export const BodyRow = ({ index }) => {
    const [open, setOpen] = useState(false);
    const { seed, language, reviews, likes } = useToolbar().toolbarParams;
    const countReviews = useProbabilityCalculation(reviews);
    const countLikes = useProbabilityCalculation(likes);
    const { getBook } = useBooks();

    const data = getBook(+seed + index, language, countReviews);

    return (
        data && (
            <>
                <div
                    className={classNames(
                        "p-2",
                        { [styles.even]: index % 2 },
                        { [styles.active]: open }
                    )}
                >
                    <button
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className={styles.more}
                    >
                        <Arrow />
                    </button>
                </div>
                <div
                    className={classNames(
                        "p-2",
                        { [styles.even]: index % 2 },
                        { [styles.active]: open }
                    )}
                >
                    {index + 1}
                </div>
                {data.smallData.map((e, ind) => (
                    <div
                        className={classNames(
                            "p-2 text-capitalize",
                            { [styles.even]: index % 2 },
                            {
                                [styles.active]: open,
                            }
                        )}
                        key={ind}
                    >
                        {e}
                    </div>
                ))}
                {open && (
                    <div className={styles.allInfo}>
                        <Details data={data.allData} countLikes={countLikes} />
                    </div>
                )}
            </>
        )
    );
};
