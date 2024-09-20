import PropTypes from "prop-types"
import { useRef, useEffect, useState } from "react"
import '../css/card.css'

function RepoCard({repo, i, showGithubPages}) {
    const cardRef = useRef(null)
    const [position, setPosition] = useState({x:0, y:0});

    useEffect(() => {
        const changeRadialPos = (event) => {
            const {clientX, clientY} = event
            const rect = cardRef.current.getBoundingClientRect();
            setPosition({
                x: (clientX - rect.left), 
                y: (clientY - rect.top),
            })
        }
        window.addEventListener('mousemove', changeRadialPos)

        return () => {
            window.removeEventListener('mousemove', changeRadialPos)
        }
    }, [])

  return (
    <div ref={cardRef} className={`cardsection--card ${showGithubPages && (repo.has_pages ? '' : 'card__invisible')}`} key={i} style={{'--mouse-x': position.x, '--mouse-y': position.y}}>
        <a href={repo.html_url} target="_blank" className="cardsection--card__content card">
            <div className="card--header" >{repo.name}</div>
            {repo.has_pages && <a className="card--anchor" target="_blank" href={`https://${repo.owner.login}.github.io/${repo.name}`}>GitHub Page</a>}
        </a>
    </div>
  )
}

RepoCard.propTypes = {
    repo: PropTypes.object,
    i: PropTypes.number,
    showGithubPages: PropTypes.bool,
}

export default RepoCard