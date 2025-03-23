import { foreignWords } from "../../../foreign-words/foreign-words";
import { useToolbar } from "../../context/toolbar-context/use-toolbar";
import styles from "./books-table-head.module.css"

export const BooksTableHead = () => {
    const { language } = useToolbar().toolbarParams;

    return (
        <>
            {foreignWords.head[language].map((e, ind) => (
                <div className={`${styles.headText} p-2`} key={ind}>
                    {e}
                </div>
            ))}
        </>
    );
};
