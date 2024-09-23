import { useInView } from "react-intersection-observer"
import PropTypes from "prop-types";
import '../css/observertext.css'
function ObserverText({ innerText }) {
    const {ref, inView} = useInView({threshold: 0});
  return (
    <h2 ref={ref} className={`observertext--text ${inView ? 'app--animation' : 'observertext--text__invisible'}`}>{innerText}</h2>
  )
}

ObserverText.propTypes = {
    innerText: PropTypes.string,
}

export default ObserverText