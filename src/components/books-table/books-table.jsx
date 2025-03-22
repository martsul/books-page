import { useState } from "react";
import { useToolbar } from "../context/toolbar-context/use-toolbar";
import { Arrow } from "../../svg/arrow";
import styles from "./books-table.module.css";
import { Like } from "../../svg/like";

const headData = {
    english: ["", "#", "ISBN", "Title", "Author(s)", "Publisher"],
    german: ["", "#", "ISBN", "Titel", "Autor(en)", "Verlag"],
    french: ["", "#", "ISBN", "Titre", "Auteur(s)", "Éditeur"],
};

const bodyData = [
    {
        smallData: [
            "",
            "49",
            "978-1-173-59614-9",
            "Graduation",
            "Nina Simone",
            "Roob CardGroup, 2019",
        ],
        allData: {
            title: "Graduation",
            author: " NiNa Simone",
            publisher: "Roob CardGroup, 2019",
            reviews: [{ text: "text", person: "person" }],
        },
    },
    {
        smallData: [
            "",
            "50",
            "978-1-173-59614-9",
            "Graduation",
            "Nina Simone",
            "Roob CardGroup, 2019",
        ],
        allData: {
            title: "Graduation",
            author: " NiNa Simone",
            publisher: "Roob CardGroup, 2019",
            reviews: [{ text: "text", person: "person" }],
        },
    },
];

export const BooksTable = () => {
    return (
        <div className={styles.table}>
            <Head />
            <Body />
        </div>
    );
};

const Head = () => {
    const { language } = useToolbar().toolbarParams;

    return (
        <>
            {headData[language].map((e, ind) => (
                <div className={`${styles.headText} p-2`} key={ind}>
                    {e}
                </div>
            ))}
        </>
    );
};

const Body = () => {
    return (
        <>
            {bodyData.map((e) => (
                <BodyRow key={e.smallData[1]} data={e} />
            ))}
        </>
    );
};

const BodyRow = ({ data }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {data.smallData.map((e, ind) => (
                <div className="p-2" key={ind}>
                    {ind === 0 ? (
                        <button
                            className={styles.more}
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <Arrow />
                        </button>
                    ) : (
                        e
                    )}
                </div>
            ))}
            {open && (
                <div className={styles.allInfo}>
                    <Details data={data.allData} />
                </div>
            )}
        </>
    );
};

const Details = ({ data }) => {
    const { title, author, publisher, reviews } = data;

    return (
        <div>
            <div>
                <img src="" alt="book" />
                <div>
                    <span>0</span>
                    <Like />
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{publisher}</p>
                <p>Review</p>
                {reviews.map((e, ind) => (
                    <Review key={ind} data={e} />
                ))}
            </div>
        </div>
    );
};

const Review = ({ data }) => {
    const { text, person } = data;

    return (
        <div>
            <p>{text}</p>
            <p>- {person}</p>
        </div>
    );
};
