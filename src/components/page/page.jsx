import { Container, Row } from "react-bootstrap";
import { Toolbar } from "../toolbar/toolbar";
import { BooksTable } from "../books-table/books-table";
import { useToolbar } from "../context/toolbar-context/use-toolbar";
import { GalleryBooks } from "../gallery-books/gallery-books";
import { useEffect, useState } from "react";

export const Page = () => {
    const { view } = useToolbar().toolbarParams;
    const [times, setTimes] = useState(20);

    useEffect(() => {
        const handlerScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            if (scrollTop + windowHeight === documentHeight) {
                setTimes(times + 10);
            }
        };

        window.addEventListener("scroll", handlerScroll);

        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, [times]);

    return (
        <Container className="mt-3 mb-5">
            <Row>
                <Toolbar />
            </Row>
            <Row>
                {view === "table" && <BooksTable times={times} />}
                {view === "gallery" && <GalleryBooks times={times} />}
            </Row>
        </Container>
    );
};
