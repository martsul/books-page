import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { Random } from "../../svg/random";
import { Gallery } from "../../svg/gallery";
import { Table } from "../../svg/table";
import { useToolbar } from "../context/toolbar-context/use-toolbar";
import { useBooks } from "../context/books-context/use-books";

export const Toolbar = () => {
    const {
        setView,
        toolbarParams,
        setLanguage,
        setSeed,
        setRandomSeed,
        setLikes,
        setReviews,
    } = useToolbar();
    const { clearUsedBooks, getBooksInCSV } = useBooks();

    clearUsedBooks();

    return (
        <div className="d-flex flex-xl-row flex-column justify-content-between align-items-xl-end gap-4 mb-4">
            <div className="d-flex gap-3 justify-content-between flex-md-row flex-column">
                <div>
                    <Form.Label className="mb-1">Language</Form.Label>
                    <Form.Select
                        onChange={setLanguage}
                        value={toolbarParams.language}
                        aria-label="Default select example"
                    >
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </Form.Select>
                </div>
                <div>
                    <Form.Label className="mb-1">Seed</Form.Label>
                    <InputGroup>
                        <Form.Control
                            onChange={setSeed}
                            value={toolbarParams.seed}
                        />
                        <Button
                            onClick={setRandomSeed}
                            variant="outline-secondary"
                            id="button-addon2"
                        >
                            <Random />
                        </Button>
                    </InputGroup>
                </div>
                <div className="d-flex flex-column justify-content-between">
                    <Form.Label className="mb-0">
                        Likes{" "}
                        <span className="text-black-50">
                            {toolbarParams.likes}
                        </span>
                    </Form.Label>
                    <Form.Range
                        value={toolbarParams.likes}
                        onChange={setLikes}
                        className="mb-2"
                        min={0}
                        max={10}
                        step={0.1}
                    />
                </div>
                <div>
                    <Form.Label>Reviews</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={setReviews}
                        value={toolbarParams.reviews}
                        min={0}
                        step={0.1}
                        className="custom-number-input"
                    />
                </div>
            </div>
            <div className="d-flex gap-3">
                <ButtonGroup className="toggle-view">
                    <Button
                        variant={
                            toolbarParams.view === "table" ? "primary" : "light"
                        }
                        className="toggle-btn"
                        id="table"
                        onClick={setView}
                    >
                        <Table isActive={toolbarParams.view === "table"} />
                    </Button>
                    <Button
                        variant={
                            toolbarParams.view === "gallery" ? "primary" : "light"
                        }
                        className="toggle-btn"
                        id="gallery"
                        onClick={setView}
                    >
                        <Gallery isActive={toolbarParams.view === "gallery"} />
                    </Button>
                </ButtonGroup>
                <Button onClick={getBooksInCSV} variant="primary">
                    Export to CSV
                </Button>
            </div>
        </div>
    );
};
