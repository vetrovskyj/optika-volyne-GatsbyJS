import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import 'react-image-lightbox/style.css';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import Layout from '../../components/Layout'

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../../img/fotky', false, /\.(png|jpe?g|svg)$/));

export const Galerie = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <Layout>
      <Helmet
        title={`Galerie | Optika Volyně`}
        meta={[
          {
            name: `description`,
            content: 'Foto produktů Optiky Volyně, které nabízí a poskytuje zákazníkům',
          },
          {
            name: "keywords",
            content: 'Optika, Optometrie, Volyně, Brýle, Produkty, Služby, Čočky, Doplňky',
          },
        ]}
      />
      <main className="products-main">
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="ilustrační foto - interier optiky" src="../../img/pano_56.jpeg" />
          <div className="slider-sale-and-text-products">
            <h1 className="slider-sale-products">Galerie</h1>
          </div>
        </div>
        <div className="fotka">
            <div className="gallery-grid">
              {images.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
                  <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
        <div className="brands-showcase">
          <div className="brand-showcase-image">
            <img src="../../img/converse-eyewear-logo-white.png" alt="converse-eyewear-logo" />
          </div>
          <div className="brand-showcase-image">
            <img src="../../img/bettybarclay_white.png" alt="bettybarclay-logo" />
          </div>
          <div className="brand-showcase-image">
            <img src="../../img/crocs-white.png" alt="crocs-logo" />
          </div>
        </div>
        <div className="info-footer-container">
          <div className="info-footer">
            <div className="info-contacts">
              <div className="info-contact">
                <img alt="person-icon" src="../../img/person-icon.png" />
                <p>Bc. Jitka Hronková</p>
              </div>
              <div className="info-contact">
                <img alt="info-icon" src="../../img/info-icon.png" />
                <p>IČO: 02835754</p>
              </div>
              <div className="info-contact">
                <img alt="location-icon" src="../../img/location-icon.png" />
                <p>nám. Svobody 14, Volyně, 387 01</p>
              </div>
            </div>
            <div className="aditional-links">
              <a href="../cookies/">Používání cookies</a>
              <a href="../autorska-prava/">Autorská práva</a>
            </div>
            <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/" target="_blank"><img className="fb-icon" alt="facebook-icon" src="../../img/facebook-icon.png" /></a>
          </div>
        </div>
      </main>
      <Helmet>
        <script src={withPrefix('../scripts/hamburger.js')} type="text/javascript" />
      </Helmet>
    </Layout>
  )
}

export default Galerie
