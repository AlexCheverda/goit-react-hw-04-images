export function mapPictures(pictures) {
    const mappedPictures = pictures.map(
      ({ id, webformatURL, tags, largeImageURL }) => ({
            id,
            webformatURL,
            tags,
            largeImageURL,
      })
    );
    return mappedPictures;
  }