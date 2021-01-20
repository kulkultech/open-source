# Progress Tracker

<style>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Muli', sans-serif;
    background-color: whitesmoke;
    min-height: 100vh;
}

.main-form {
    display: flex;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
}

.container-results {
    margin-top: 20px;
    margin-right: 157px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#check-list {
    margin-top: 2px;
}

#check-list li {
    position: relative;
    list-style-type: none;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
}

#check-list li:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -2px;
    width: 5px;
    height: 11px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    border-color: #00a8a8;
    transform-origin: bottom left;
    transform: rotate(45deg);
}

#input-username {
    border: 3px solid gray;
    height: 40px;
    width: 300px;
    border-radius: 50px;
    padding: 0px 10px;
}

#btn-submit {
    background: linear-gradient(90deg, #ef3e0f, #ffb800);
    color: white;
    margin-top: 3px;
    margin-left: 20px;
    border: 3px solid salmon;
    height: 40px;
    width: 100px;
    border-radius: 50px;
    padding: 0px 10px;
}

.loader {
    display: none;
    margin-left: 10px;
    border: 5px solid #CFC6C4;
    border-top: 5px solid #020202;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 0.75s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

NOTE: progress tracker helps you in monitoring how much PR you send in [this](https://github.com/kulkultech/open-source) repo

<div class="main-form"><input id="input-username" type="text" placeholder="input github username" name="reg">

<div class="btn"><button id="btn-submit">Check</button></div>

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
    var loader = document.getElementById("loader");
    loader.style.display = "none";
}

button.addEventListener('click', () => {
    showData()
})
</script>
