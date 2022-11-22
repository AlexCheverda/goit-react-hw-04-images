import ImageGalleryItem from '../ImageGalleryItem/index';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.Styled';

const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <Gallery>
        {images
          ? images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                tags={tags}
                smImg={webformatURL}
                onClick={() => openModal(largeImageURL)}
              />
            ))
          : null}
      </Gallery>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;