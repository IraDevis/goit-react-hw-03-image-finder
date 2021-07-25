import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

import "modern-normalize";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}

export default App;
