
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import '../css/observertext.css'
function ObserverText({ innerText }) {
    const ref = useRef(null) 
    useEffect(() => {
        const observer = new IntersectionObserver( (entries) => {
            if(entries[0].isIntersecting){
                entries[0].target.classList.add('app--animation')
            }
        }, {threshold: 0})
        if(ref.current)
        observer.observe(ref.current)

        return () => {
            if(ref.current)
            observer.unobserve(ref.current)
        }
    }, [])
  return (
    <h2 ref={ref} className='observertext--text'>{innerText}</h2>
  )
}

ObserverText.propTypes = {
    innerText: PropTypes.string,
}

export default ObserverText