import PropTypes from "prop-types"
// import { useEffect } from "react"
import '../css/thincenterbar.css'

function ThinCenterBar({children}) {

  return (
    <section className="thincenterbar--wrapper">
        {children}
        <div className='thincenterbar--bar'></div>
    </section>
  )
}

ThinCenterBar.propTypes = {
    children: PropTypes.any,
}

export default ThinCenterBar