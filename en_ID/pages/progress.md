# Progress Tracker

<style>
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  *{
    margin: 0;padding: 0;
  }
  body {
    font - family: 'Muli', sans - serif;
    background - color: whitesmoke;
    min - height: 100 vh;
  }
  .main - form {
    display: flex;
    margin - top: 40 px;
    justify - content: center;
    align - items: center;
    height: 40 px;
    border - radius: 40 px;
    padding: 10 px;
  }
  .container - results {
    margin - top: 20 px;
    margin - right: 157 px;
    display: flex;
    justify - content: center;
    align - items: center;
    flex - direction: column;
  }
  #check - list {
    margin - top: 2 px;
  }
  #check - list li {
    position: relative;list - style - type: none;padding - left: 1.5 rem;margin - bottom: 0.5 rem;
  }
  #check - list li: before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -2 px;
    width: 5 px;
    height: 11 px;
    border - width: 0 2 px 2 px 0;
    border - style: solid;
    border - color: #00a8a8; 
    transform-origin: bottom left; 
    transform: rotate(45deg); 
  } 
  # input - username {
    border: 3 px solid gray;
    height: 40 px;
    width: 300 px;
    border - radius: 50 px;
    padding: 0 px 10 px;
  }
  #btn - submit {
    background: linear - gradient(90 deg, #ef3e0f, #ffb800);
    color: white;
    margin - top: 3 px;
    margin - left: 20 px;
    border: 3 px solid salmon;
    height: 40 px;
    width: 100 px;
    border - radius: 50 px;
    padding: 0 px 10 px;
  }
  .loader {
    display: none;
    margin - left: 10 px;
    border: 5 px solid #CFC6C4;
    border - top: 5 px solid #020202;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 0.75s linear infinite;
  }
  @keyframes spin {
    0%{ 
      transform: rotate(0deg); 
    }
    100%{ 
      transform: rotate(360deg); 
    }
    }
</style>

NOTE: progress tracker helps you in monitoring how much PR you send in [this](https://github.com/kulkultech/open-source) repo


<div class= "main-form" > 
  <input id = "input-username"
    type = "text"
    placeholder = "input github username"
    name = "reg" >
  <div class = "btn" > 
    <button id = "btn-submit" > Check </button>
  </div >
  <div class = "loader"id = "loader"> </div>
</div>
<div class = "container-results" >
  <ul id = "check-list" >


<script>
  const username = document.getElementById('input-username')
  const button = document.getElementById('btn-submit')
  const resultsContainer = document.getElementById('check-list')


  const checkPullRequests = async (value) => {
    let response = await Promise.all([
        fetch(`https://api.github.com/search/issues?q=is:merged+repo:kulkultech/open-source+author:${value}`).then(value => value.json()),
        fetch(`https://api.github.com/search/issues?q=is:issue+repo:kulkultech/open-source+author:${value}`).then(value => value.json()),
        fetch(`https://api.github.com/search/issues?q=in:comments+repo:kulkultech/open-source+author:${value}`).then(value => value.json())
    ])
    hideProgress();
    return response
  }

  const showData = () => {
      showProgress();
      checkPullRequests(username.value).then((res) => {
          console.log(res)
          const pull_requests = res[0].items.length
          const issues = res[1].items.length
          const comments = res[2].items.length

          resultsContainer.innerHTML = `
                      <li>Progress for ${username.value}</li>
                      <br/>
                      <li>Numbers of Merged Pull Requests: ${pull_requests} / 5</li>
                      <li>Numbers of Issues: ${issues} / 4</li>
                      <li>Numbers of Comments: ${comments} / 4</li>
          `
          })
      }

  showProgress = () => {
      var loader = document.getElementById("loader");
      loader.style.display = "block";
  }

  hideProgress = () => {
      var loader = document.getElementById("loader");
      loader.style.display = "none";
  }

  button.addEventListener('click', () => {
      showData()
  }) 
 </script>
