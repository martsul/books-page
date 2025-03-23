import { Modal } from "react-bootstrap";
import { Details } from "../details/details.jsx";

export const BookModal = ({ data, countLikes, show, setShow }) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(!show)}
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Body>
                <Details transform={true} data={data} countLikes={countLikes} />
            </Modal.Body>
        </Modal>
    );
};
