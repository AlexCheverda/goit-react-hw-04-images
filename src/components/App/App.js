import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.Styled';
import { fetchImages } from "Api/Api";
import { mapPictures } from "Api/mapPictures";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";

class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: null,
    error: null,
  };
  componentDidUpdate(_, prevState) {
    const prevSearch = prevState.inputValue;
    const currentSearch = this.state.inputValue;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevSearch !== currentSearch || prevPage !== currentPage) {
      this.updImages();
    }
  }
  async updImages() {
    const { inputValue, page } = this.state;
    this.setState({ isLoading: true });
    try {
      await fetchImages(inputValue, page).then(res => {
        if (!res.data.hits.length) {
          return toast.error(
            'There is no images with this request, please, try again'
          );
        }
        const newImg = mapPictures(res.data.hits);
        this.setState({
          images: [...this.state.images, ...newImg],
        });
      });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
    handleSearchSubmit = inputValue => {
      this.setState({
        inputValue,
        images: [],
        page: 1,
      });
    };

    loadMore = () => {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    };

    showModalImage = largeImageURL => {
      const image = this.state.images.find(
        image => image.largeImageURL === largeImageURL
      );
      this.setState({
        showModal: {
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        },
      });
    };
  
    closeModalImage = () => {
      this.setState({ showModal: null });
    };
    
    render() {
      const { images, isLoading, error, showModal } = this.state;
      const { handleSearchSubmit, showModalImage, loadMore, closeModalImage } =
        this;
      return (
        <Container>
          <Searchbar onSearch={handleSearchSubmit} />
          {error &&
            toast.warning(`Ooops, something went wrong: ${error.message}`)}
          {isLoading && <Loader />}
          {images.length > 0 && (
            <>
              <ImageGallery images={images} openModal={showModalImage} />
              <Button loadMore={loadMore} />
            </>
          )}
          {showModal && (
            <Modal
              lgImg={showModal.largeImageURL}
              tags={showModal.tags}
              closeModal={closeModalImage}
            />
          )}

          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Container>
      );
    }
  }

export default App;