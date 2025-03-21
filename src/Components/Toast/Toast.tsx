import React from "react";
import styled from "styled-components";
import { Toast as BootstrapToast } from "react-bootstrap";

interface ToastProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const Toast = ({ show, onClose, title, message }: ToastProps) => {
  return (
    <ToastContainer>
      <BootstrapToast show={show} onClose={onClose} delay={3000} autohide>
        <BootstrapToast.Header>
          <strong className="me-auto">{title}</strong>
        </BootstrapToast.Header>
        <BootstrapToast.Body>{message}</BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  );
};

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;

  .toast {
    background-color: #1f1f1f;
    color: #b8b8b8;
    border: 1px solid #484848;
  }

  .toast-header {
    background-color: #252525;
    color: #b8b8b8;
    border-bottom: 1px solid #484848;

    .me-auto {
      color: #b8b8b8;
      font-family: "Tenor Sans", sans-serif;
    }

    .btn-close {
      filter: invert(0.7);
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }

  .toast-body {
    font-family: "Quicksand", sans-serif;
  }
`;
