function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  }
  
  function createRepo() {
    const repoName = document.getElementById('repoName').value.trim();
    if (repoName === "") {
      alert("Repository name cannot be empty!");
      return;
    }
  
    const list = document.getElementById("repoList");
    const li = document.createElement("li");
    li.textContent = repoName;
    list.appendChild(li);
  
    document.getElementById("repoName").value = "";
    toggleModal();
  }
  