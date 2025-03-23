import { useContext } from "react";
import { BooksContext } from ".";

export const useBooks = () => useContext(BooksContext);
