import PropTypes from "prop-types"
import '../css/header.css'

function Header({ HeaderText }) {
  return (
    <header className="header--wrapper">
        <a target="_blank" href="https://github.com/SickkMade">
            <h1 className="header">{HeaderText}</h1>
        </a>
    </header>
  )
}

Header.propTypes = {
    HeaderText: PropTypes.string,
}

export default Header