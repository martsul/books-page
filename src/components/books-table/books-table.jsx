import { useState } from "react";
import { useToolbar } from "../context/toolbar-context/use-toolbar";
import { Arrow } from "../../svg/arrow";
import styles from "./books-table.module.css";
import { Like } from "../../svg/like";
import classNames from "classnames";

const headData = {
    english: ["", "#", "ISBN", "Title", "Author(s)", "Publisher"],
    german: ["", "#", "ISBN", "Titel", "Autor(en)", "Verlag"],
    french: ["", "#", "ISBN", "Titre", "Auteur(s)", "Éditeur"],
};

const otherWords = {
    review: {
        english: "review",
        german: "gästebewertungen",
        french: "commentaires",
    },
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
            reviews: [
                { text: "text", person: "person" },
                { text: "text", person: "person" },
                { text: "text", person: "person" },
            ],
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
                <div
                    className={classNames("p-2", { "bg-primary": open })}
                    key={ind}
                >
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
    const { language } = useToolbar().toolbarParams;

    return (
        <div className="d-flex p-2">
            <div className="p-3 d-flex flex-column align-items-center gap-3">
                <img src="" alt="book" />
                <div className="rounded-pill py-1 px-2 bg-primary d-flex align-items-center gap-2">
                    <span className="text-white fw-bold lh-1">0</span>
                    <Like />
                </div>
            </div>
            <div className="d-flex flex-column gap-2">
                <h2 className="m-0 fw-semibold">{title}</h2>
                <p className="fst-italic fw-semibold fs-4 m-0">{author}</p>
                <p className="fw-semibold text-black-50 m-0">{publisher}</p>
                <p className="fs-4 fw-semibold text-capitalize m-0">
                    {otherWords.review[language]}
                </p>
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
        <div className="">
            <p className="m-0 fw-semibold">{text}</p>
            <p className="text-black-50">- {person}</p>
        </div>
    );
};
