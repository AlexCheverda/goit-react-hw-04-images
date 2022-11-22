import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalBox } from './Modal.Styled';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = element => {
        if (element.code === 'Escape') {
            this.props.closeModal();
        }
    };
    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.closeModal();
        }
    };
    render() {
        const { lgImg, tags } = this.props;
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalBox>
                    <img src={lgImg} alt={tags} />
                </ModalBox>
            </Overlay>
        );
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    lgImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default Modal;