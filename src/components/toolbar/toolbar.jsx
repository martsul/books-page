import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { Random } from "../../svg/random";
import { Book } from "../../svg/book";
import { Table } from "../../svg/table";
import { useToolbar } from "../context/toolbar-context/use-toolbar";

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

    return (
        <div className="d-flex justify-content-between align-items-end gap-4 mb-4">
            <div className="d-flex gap-3">
                <div>
                    <Form.Label className="mb-1">Language</Form.Label>
                    <Form.Select
                        onChange={setLanguage}
                        value={toolbarParams.language}
                        aria-label="Default select example"
                    >
                        <option value="english">English</option>
                        <option value="german">German</option>
                        <option value="french">French</option>
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
                    <Form.Label className="mb-0">Likes</Form.Label>
                    <Form.Range
                        value={toolbarParams.likes}
                        onChange={setLikes}
                        className="mb-2"
                        min={0}
                        max={10}
                        step={1}
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
                        toolbarParams.view === "book" ? "primary" : "light"
                    }
                    className="toggle-btn"
                    id="book"
                    onClick={setView}
                >
                    <Book isActive={toolbarParams.view === "book"} />
                </Button>
            </ButtonGroup>
        </div>
    );
};
