import React from 'react'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <>
        <header>
          <div className="topandbottom">
            <p className="topandbottom-text"><i className="fa fa-home" />nám. Svobody 14, Volyně, 387 01</p>
            <div className="contact">
              <a href="mailto:optikavolyne@seznam.cz"><i className="fa fa-envelope" />optikavolyne@seznam.cz</a>
              <a href="tel:+420604802888"><i className="fa fa-phone" />+420604802888</a>
            </div>
          </div>
        </header>
        <div className="logo-and-nav-container">
          <div className="logo-and-nav">
            <span className="logo"><a href="/">Optika Volyně</a></span>
            <nav>
              <ul>
              <li>
                  <a href="/galerie/">Galerie</a>
                </li>
                <li>
                  <a href="/novinky/">Novinky</a>
                </li>
                <li className="dropdown-line">
                  <a href="/sluzby/">Sortiment</a>
                  <div className="dropdown-pages">
                    <a href="/sluzby/optometrie/">Optometrie</a>
                    <a href="/sluzby/bryle/">Brýle</a>
                    <a href="/sluzby/cocky/">Kontatkní čočky</a>
                    <a href="/sluzby/doplnky/">Doplňky</a>
                  </div>
                </li>
                <li>
                  <a href="/reference/">Reference</a>
                </li>
                <li>
                  <a href="/kontakt/">Kontakt</a>
                </li>
              </ul>
              <div className="hamburger">
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
              </div>
            </nav>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar
