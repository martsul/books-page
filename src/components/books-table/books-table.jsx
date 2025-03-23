import styles from "./books-table.module.css";
import { BooksTableBody } from "../books-table-body/books-table-body";
import { BooksTableHead } from "./books-table-head/books-table-head";

export const BooksTable = ({ times }) => {
    return (
        <div className={styles.table}>
            <BooksTableHead />
            <BooksTableBody times={times} />
        </div>
    );
};
