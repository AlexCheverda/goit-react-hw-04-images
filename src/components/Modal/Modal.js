import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalBox } from './Modal.Styled';

const Modal = ({ lgImage, tags, closeModal }) => {
    const handleKeyDown = element => {
        if (element.code === 'Escape') {
            closeModal();
        }
    };

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            closeModal();
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    return (
        <Overlay onClick={handleBackdropClick}>
            <ModalBox>
                <img src={lgImage} alt={tags} />
            </ModalBox>
        </Overlay>
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    lgImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default Modal;