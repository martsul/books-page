import { allLocales, Faker } from "@faker-js/faker";
import { BooksContext } from ".";
import { unparse } from "papaparse";

const storage = new Map();
let usedBooks = new Set();

const generateBook = (seed, language, reviews) => {
    const faker = new Faker({ locale: allLocales[language], seed: seed });

    const title = `${faker.word.adjective()} ${faker.word.noun()}`;
    const isbn = faker.commerce.isbn();
    const author = faker.person.fullName();
    const publisher = faker.company.name();
    const img = `https://picsum.photos/seed/${seed}/200/300`;

    return {
        smallData: [isbn, title, author, publisher],
        allData: {
            title,
            author,
            publisher,
            img,
            reviews: [...new Array(reviews)].map(() => ({
                text: faker.lorem.sentences(1),
                person: faker.person.fullName(),
            })),
        },
    };
};

const generateReviews = (seed, language, reviews) => {
    const faker = new Faker({ locale: allLocales[language], seed: +seed });
    const newReviews = [...new Array(reviews)].map(() => ({
        text: faker.lorem.sentences(1),
        person: faker.person.fullName(),
    }));
    const book = storage.get(seed + language);
    storage.set(seed + language, {
        ...book,
        allData: { ...book.allData, reviews: newReviews },
    });
};

const checkBook = (seed, language, reviews) => {
    if (!storage.has(seed + language)) {
        const book = generateBook(seed, language, reviews);
        storage.set(seed + language, book);
    }
};

const checkReviews = (seed, language, reviews) => {
    const currentCountReviews = storage.get(seed + language).allData.reviews
        .length;
    if (currentCountReviews !== reviews) {
        generateReviews(seed, language, reviews);
    }
};

const clearUsedBooks = () => {
    usedBooks = new Set();
};

const getUsedBooks = () => {
    return Array.from(usedBooks).map((key) => {
        const value = storage.get(key).allData;
        return {
            ...value,
            reviews: JSON.stringify(value.reviews),
        };
    });
};

const downloadCSV = (csv) => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "data.csv";
    link.click();
};

export const BooksContextProvider = ({ children }) => {
    const getBook = (seed, language, reviews) => {
        checkBook(seed, language, reviews);
        checkReviews(seed, language, reviews);
        usedBooks.add(seed + language);

        return storage.get(seed + language);
    };

    const getBooksInCSV = () => {
        const usedBooks = getUsedBooks();

        const csv = unparse(usedBooks);

        downloadCSV(csv);
    };

    return (
        <BooksContext.Provider
            value={{ getBook, clearUsedBooks, getUsedBooks, getBooksInCSV }}
        >
            {children}
        </BooksContext.Provider>
    );
};
