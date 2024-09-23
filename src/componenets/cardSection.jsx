import { useState, useEffect } from "react";
import '../css/cardsection.css'
import RepoCard from "./RepoCard";

function CardSection() {
    const [repos, setRepos] = useState([])
    const [showGithubPages, setShowGithubPage] = useState(false);
    const cards = []
    useEffect(() => {
        async function fetchAllRepos(page = 1, allRepos = []) {
            try{
                let hasMorePages = true;
                while(hasMorePages){
                    const url = `https://api.github.com/users/sickkmade/repos?per_page=100&page=${page}`;
                    const response = await fetch(url)
                    const data = await response.json()
                    if (data.length === 0 || response.status === 403) {
                        setRepos(allRepos);
                        hasMorePages = false;
                    }
            
                    allRepos = allRepos.concat(data);
            
                    page++
                }
                return
                
            }
            catch (error){
                console.error(error)
                return
            }
           
        }
        fetchAllRepos()
    }, [])
    
    repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    repos.forEach((repo,i) => {
        cards.push(<RepoCard repo={repo} key={i} showGithubPages={showGithubPages}/>)
    });
    return (
        <>
        <section id="cardsection">
            <div className='cardsection--github-pages'>
                <h4>Show only github pages</h4>
                <input className="cardsection--checkbox" type="checkbox" onClick={() => {setShowGithubPage(!showGithubPages)}} />
            </div>
            {cards}
        </section>
        </>

      )
}

export default CardSection