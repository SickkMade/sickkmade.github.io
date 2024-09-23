import { useInView } from "react-intersection-observer"
import PropTypes from "prop-types";
function ObserverText({ innerText }) {
    const {ref, inView} = useInView({threshold: 0});
  return (
    <h2 ref={ref} className={inView ? 'app--animation' : 'app--invisible'}>{innerText}</h2>
  )
}

ObserverText.propTypes = {
    innerText: PropTypes.string,
}

export default ObserverText