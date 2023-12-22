document.addEventListener('DOMContentLoaded', function() {
    fetchRepos();
});

function fetchRepos() {
    fetch('https://api.github.com/users/sickkmade/repos')
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('repo-list');
        // Sort repositories by creation date, newest first
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        data.forEach(repo => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = repo.html_url;
            link.textContent = repo.name;
            listItem.appendChild(link);

            // Check if the repository has GitHub Pages enabled
            if (repo.has_pages) {
                const pagesLink = document.createElement('a');
                pagesLink.href = `https://${repo.owner.login}.github.io/${repo.name}`;
                pagesLink.textContent = ' [GitHub Page]';
                pagesLink.style.marginLeft = '10px';
                listItem.appendChild(pagesLink);
            }

            repoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));
}
