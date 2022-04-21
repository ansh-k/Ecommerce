import React from "react";
import { Modal } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

export default function ProductModel({
  handleModal,
  open,
  selectedProduct,
  handleCart,
}) {
  return (
    <Modal show={open} onHide={handleModal}>
      <Modal.Header className="bg-warning text-light" closeButton>
        <Modal.Title>
          {" "}
          <strong> {selectedProduct.productName} </strong>{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body">
          <img
            className="modal-img"
            src={selectedProduct.image}
            onClick={() => handleModal}
            alt="Card"
          />
          <div className="mt-4">
            <strong>Price: ${selectedProduct.price} </strong>
            <p> Stock: {selectedProduct.stock} </p>
          </div>
          <small>
            The lorem ipsum is a placeholder text used in publishing and graphic
            design. This filler text is a short paragraph that contains all the
            letters of the alphabet. The characters are spread out evenly so
            that the reader's attention is focused on the layout of the text
            instead of its content.
          </small>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-light">
        <button
          className="btn btn-success mt-2"
          style={{ textSize: "20px" }}
          onClick={() => handleCart(selectedProduct)}
          disabled={selectedProduct.stock < 1}
        >
          <FaCartPlus />
          Add To Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
}
