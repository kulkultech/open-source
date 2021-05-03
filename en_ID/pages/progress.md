# Progress Tracker

**NOTE: Progress tracker helps you in monitoring how much PR you send in [this](https://github.com/kulkultech/open-source) repo**


<div class="main-form"><input id="input-username" type="text" placeholder="input github username" name="reg">

<div class="btn"><button id="btn-submit">Check</button></div>

<div class="loader" id = "loader"></div>

</div>

<div class="container-results">
<ul id="check-list">


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
    <br />
    <li>Numbers of Merged Pull Requests: ${pull_requests} / 5</li>
    <li>Numbers of Issues: ${issues} / 4</li>
    <li>Numbers of Comments: ${comments} / 4</li>
    `
  })
}
const showProgress = () => {
  var loader = document.getElementById("loader");
  loader.style.display = "block";
}
const hideProgress = () => {
  var x = document.getElementById("loader");
  loader.style.display = "none";
}

button.addEventListener('click', () => {
  showData()
})
</script>