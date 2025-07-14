import React from 'react'

import Layout from '../../components/Layout'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Articles from '../../components/Articles'

export default class News extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title={`Novinky | Optika Volyně`}
          meta={[
            {
              name: `description`,
              content: 'Novinky a aktuality o vybavení, událostech, změnách a zboží optiky a optometrie ve městě Volyně',
            },
            {
              name: "keywords",
              content: 'Optika, Optometrie, Volyně, Aktuality, Novinky, Vybavení',
            },
          ]} />
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="sliderphoto" src="../../img/pano_52.jpeg" />
          <div className="slider-sale-and-text-products">
            <h1 className="slider-sale-products">Novinky</h1>
            <div className="slider-text-products">
              <h1 className="slider-text-sale-products">a další zajímavosti</h1>
            </div>
          </div>
        </div>
        <Articles />
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
        <Helmet>
          <script src={withPrefix('../scripts/hamburger.js')} type="text/javascript" />
        </Helmet>
      </Layout>
    )
  }
}