import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import emailjs from "emailjs-com";
import Layout from "../../components/Layout";
//import NoSSR from "react-no-ssr";

/*export const MapyCzMap = () => {
  const API_KEY = "esUnOBPC2ANhogxVvHQwTgr17yA2GnhjZxONdrZYHGw";

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      require("leaflet/dist/leaflet.css");
      // Dynamically import Leaflet
      import("leaflet").then((L) => {
        const map = L.map("map", {
          center: [49.166, 13.88524],
          zoom: 17,
        });

        L.tileLayer(
          `https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`,
          {
            minZoom: 0,
            maxZoom: 19,
            attribution:
              '<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
          }
        ).addTo(map);

        L.marker([49.166, 13.88524])
          .addTo(map)
          .bindPopup("<b>Optika Volyně</b>")
          .openPopup();
      });
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};*/

export const ContactPage = ({}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.reservio.com/widget/button-bundle.js";
    script.async = true;
    document.body.appendChild(script);

    // Optional: Cleanup to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    const nameAlert = document.querySelector(".alert-name");
    const emailAlert = document.querySelector(".alert-email");
    const success = document.querySelector(".alert-success");

    function validateName() {
      const nameInput = document.querySelector(".name-input");
      const name = nameInput.value;

      if (!name.match(/^\W*([A-ZĚŠČŘŽÝÁÍÉa-zěščřžýáíé]+(\W+|$)){1,4}$/)) {
        nameAlert.classList.add("alert-name");
        nameAlert.innerText = "Zadejte jméno a příjmení (max 4 slova)";
        return false;
      }

      nameAlert.innerText = "";
      return true;
    }

    function validateEmail() {
      const emailInput = document.querySelector(".email-input");
      const email = emailInput.value;

      if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailAlert.classList.add("alert-email");
        emailAlert.innerText = "Prosím zadejte platný email";
        return false;
      }

      emailAlert.innerText = "";
      return true;
    }

    if (validateName() && validateEmail()) {
      success.classList.add("alert-success");
      success.innerText = "Email byl úspěšně odeslán";
      setTimeout(() => {
        success.innerText = "";
      }, 5000);

      emailjs
        .sendForm(
          "service_o8shb7p",
          "template_v13g6dh",
          e.target,
          "user_wiV7wq7ZpAMgeS9KKMtWf"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }
  return (
    <Layout>
      <Helmet
        title={`Kontakty | Optika Volyně`}
        meta={[
          {
            name: `description`,
            content:
              "Kontakty a adresa prodejny optiky a optometrických služeb ve Volyni",
          },
          {
            name: "keywords",
            content: "Optika, Optometrie, Volyně, Brýle, Kontakt",
          },
        ]}
      />
      <main className="contact-main">
        <div className="contact-first">
          <div className="basic-contacts-container">
            <div className="store-image-container">
              <img
                className="store-image"
                src="../../img/optika-zvenku.jpg"
                alt="obrázek provozovny Optika Volyně"
              />
              <div className="contact-heading">
                <p>Kontakty</p>
              </div>
            </div>
            <div className="basic-contacts-data">
              <div className="basic-contacts">
                <div className="basic-contact-container">
                  <div>
                    <img src="../../img/phone-icon.svg" alt="phone-icon" />
                  </div>
                  <div className="basic-contact">
                    <h2>Zavolejte nám</h2>
                    <a href="tel:+420604802888">+420604802888</a>
                  </div>
                </div>
                <div className="basic-contact-container">
                  <div>
                    <img src="../../img/mail-icon.svg" alt="mail-icon" />
                  </div>
                  <div className="basic-contact">
                    <h2>Napište nám</h2>
                    <a href="mailto:optikavolyne@seznam.cz">
                      optikavolyne@seznam.cz
                    </a>
                  </div>
                </div>
                <div className="basic-contact-container">
                  <div>
                    <img
                      src="../../img/location-icon.svg"
                      alt="location-icon"
                    />
                  </div>
                  <div className="basic-contact">
                    <h2>Adresa</h2>
                    <p>náměstí Svobody 14, Volyně, 387&nbsp;01</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basic-contacts-data open-time">
              <div className="basic-contact-container">
                <div>
                  <img src="../../img/time-icon.svg" alt="time-icon" />
                </div>
                <div className="basic-contact">
                  <h2>Otevírací doba</h2>
                  <div className="day">
                    <p>pondělí:</p>
                    <p>8:30–11:30, 12:30–16:00</p>
                  </div>
                  <div className="day">
                    <p>úterý:</p>
                    <p>8:30–11:30, 12:30–16:00</p>
                  </div>
                  <div className="day">
                    <p>středa:</p>
                    <p>8:30–11:30, 12:30–17:00</p>
                  </div>
                  <div className="day">
                    <p>čtvrtek:</p>
                    <p>12:30–17:00</p>
                  </div>
                  <div className="day">
                    <p>pátek:</p>
                    <p>8:30–11:30, 12:30–15:00</p>
                  </div>
                  <div className="day">
                    <p>sobota:</p>
                    <p>Po telefonické dohodě</p>
                  </div>
                  <div className="day">
                    <p>neděle:</p>
                    <p>Zavřeno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="reservio-button-container"
          data-text="Vytvořit rezervaci"
          data-size="large"
          data-color="#078788"
          data-url="https://ocni-optika-bc-jitka-hronkova.reservio.com"
        ></div>
        <section className="get-there">
          <div className="get-there-desc-container">
            <div className="get-there-desc">
              <h2>Jak se k nám dostat?</h2>
              <ul>
                <li>
                  <strong style={{ color: "#77A02E" }}>Pěšky:</strong> Nacházíme
                  se ve Volyni přímo na náměstí
                </li>
                <li>
                  <strong style={{ color: "#77A02E" }}>Autem:</strong> Před
                  optikou je možné zaparkovat. GPS souřadnice jsou: E13.8851194,
                  N49.1658592
                </li>
                <li>
                  <strong style={{ color: "#77A02E" }}>Autobusem:</strong> 50
                  metrů od optiky je volyňská autobusová zastávka, kde staví
                  lokální i dálkové spoje
                </li>
              </ul>
            </div>
          </div>
          <div className="mapa">
            <iframe
              className="mapa-iframe"
              width="640"
              height="420"
              src="https://mapy.com/cs/zakladni?x=13.8851166667&y=49.1658611111&z=17&source=firm&id=13191595&widgetFirmy=13191595&frame=1"
              frameBorder="0"
            ></iframe>
          </div>
        </section>
        <div className="business-card">
          <p>Naše vizitka ke stažení</p>
          <a href="../../img/vizitka.png" download>
            <img
              className="business-card-itself"
              alt="vizitka ke stažení"
              src="../../img/vizitka.png"
            />
            <img
              className="download-icon"
              alt="donwload-icon"
              src="../../img/download.svg"
            />
          </a>
        </div>
        <div className="contact-second">
          <div className="form-and-location">
            <div className="contact-form">
              <h2>Kontaktujte nás</h2>
              <form onSubmit={sendEmail}>
                <div className="user-data">
                  <div className="user-data-entity">
                    <label>Celé jméno</label>
                    <input
                      type="text"
                      className="name-input"
                      name="name"
                      placeholder="Jméno a příjmení"
                    />
                  </div>
                  <div className="user-data-entity">
                    <label>Email</label>
                    <input
                      type="text"
                      className="email-input"
                      name="email"
                      placeholder="Vaše emailová adresa"
                    />
                  </div>
                </div>
                <div className="message">
                  <label>Zpráva</label>
                  <textarea
                    name="zprava"
                    placeholder="Napište nám zprávu"
                    defaultValue={""}
                  />
                </div>
                <div className="send">
                  <input className="button" type="submit" name="submit" />
                  <p className="alert-name"></p>
                  <p className="alert-email"></p>
                  <p className="alert-success"></p>
                </div>
              </form>
            </div>
            <div className="location">
              <div className="tax-data">
                <h2>Fakturační údaje</h2>
                <p>Bc. Jitka Hronková</p>
                <p>
                  Na Ostrovci 25
                  <br />
                  Volyně, 387 01
                  <br />
                  IČ: 02835754
                  <br />
                  DIČ: CZ7561022326
                </p>
                <p>
                  Úřad příslušný podle §71 odst.2 živnostenského zákona: Městský
                  úřad Strakonice
                </p>
              </div>
            </div>
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
            <a
              href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/"
              target="_blank"
            >
              <img
                className="fb-icon"
                alt="facebook-icon"
                src="../../img/facebook-icon.png"
              />
            </a>
          </div>
        </div>
      </main>
      <Helmet>
        <script
          src={withPrefix("../scripts/hamburger.js")}
          type="text/javascript"
        />
      </Helmet>
    </Layout>
  );
};

export default ContactPage;
