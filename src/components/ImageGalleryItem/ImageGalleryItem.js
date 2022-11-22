import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.Styled';

const ImageGalleryItem = ({ smImg, tags, onClick }) => {
    return (
        <li>
            <Image src={smImg} alt={tags} onClick={onClick} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    smImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;