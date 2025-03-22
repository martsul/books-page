import { Container, Row } from "react-bootstrap";
import { Toolbar } from "../toolbar/toolbar";
import { BooksTable } from "../books-table/books-table";

export const Page = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Toolbar />
            </Row>
            <Row>
                <BooksTable />
            </Row>
        </Container>
    );
};
