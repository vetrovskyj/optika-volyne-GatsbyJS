import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../components/Layout'

export const ServicesPage = ({ }) => {
  return (
    <Layout>
      <Helmet
        title={`Produkty a služby | Optika Volyně`}
        meta={[
          {
            name: `description`,
            content: 'Služby a produkty Optiky Volyně, které nabízí a poskytuje zákazníkům',
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
            <h1 className="slider-sale-products">Nabídka</h1>
            <div className="slider-text-products">
              <h1 className="slider-text-sale-products">produktů a služeb</h1>
            </div>
          </div>
        </div>
        <div className="product-cards">
          <section className="product-card" id="optometrie">
            <img src="../../img/eyewear2_optimised.jpg" alt="foto přístroje na měření zraku" />
            <a href="./optometrie/">
              <h2>Optometrie</h2>
            </a>
            <ul>
              <li>měření dioptrií kvalifikovaným optometristou</li>
              <li>při nákupu brýlí zdarma</li>
              <li>bez nutnosti objednání</li>
            </ul>
            <a href="./optometrie/" className="card-btn">více</a>
          </section>
          <section className="product-card" id="bryle">
            <img src="../../img/eyewear3_optimised.jpg" alt="Foto ženy s brýlemi" />
            <a href="./bryle/">
              <h2>Brýle</h2>
            </a>
            <ul>
              <li>prodej dioptrických obrub</li>
              <li>široký sortiment dioptrických skel</li>
              <li>odborné poradenství</li>
              <li>záruční i pozáruční servis</li>
              <li>opravy</li>
            </ul>
            <a href="./bryle/" className="card-btn">více</a>
          </section>
          <section className="product-card">
            <img src="../../img/kontaktni-cocky.jpg" alt="Foto kontaktních čoček" />
            <a href="./cocky/">
              <h2>Kontaktní čočky</h2>
            </a>
            <ul>
              <li>vstupní vyšetření</li>
              <li>konzultace a výběr optimálních čoček</li>
              <li>aplikace</li>
              <li>nácvik</li>
            </ul>
            <a href="./cocky/" className="card-btn">více</a>
          </section>
          <section className="product-card" id="doplnky">
            <img src="../../img/eyewear1_optimised.jpg" alt="Foto slunečních brýlí" />
            <a href="./doplnky/">
              <h2>Doplňkový prodej</h2>
            </a>
            <ul>
              <li>sluneční brýle</li>
              <li>pouzdra</li>
              <li>čistící prostředky</li>
              <li>roztoky na kontaktní čočky</li>
            </ul>
            <a href="./doplnky/" className="card-btn">více</a>
          </section>
        </div>
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

export default ServicesPage
