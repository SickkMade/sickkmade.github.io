document.addEventListener('DOMContentLoaded', function() {
    fetchRepos();
});

function fetchRepos() {
    fetch('https://api.github.com/users/sickkmade/repos')
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('repo-list');
        data.forEach(repo => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = repo.html_url;
            link.textContent = repo.name;
            listItem.appendChild(link);
            repoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));
}
