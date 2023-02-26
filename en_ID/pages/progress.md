# Progress Tracker

**NOTE: Progress tracker helps you in monitoring how much PR you send in [this](https://github.com/kulkultech/open-source) repo**


<div class="main-form">
	<input id="input-username" type="text" placeholder="input github username" name="reg">
	<div class="btn"><button id="btn-submit">Check</button></div>
	<div class="loader" id = "loader"></div>
</div>
	
<div class="container-results">
	<ul id="check-list"></ul>
</div>


<script>
	const username = document.getElementById('input-username');
	const button = document.getElementById('btn-submit');
	const resultsContainer = document.getElementById('check-list');

	const target_pull_request = 5;
	const target_issues = 4;
	const target_comments = 4;
	
	
	const checkPullRequests = async (value) => {
		let response = await Promise.all([
			fetch(`https://api.github.com/search/issues?q=is:merged+repo:kulkultech/open-source+author:${value}`).then(value => value.json()),
			fetch(`https://api.github.com/search/issues?q=is:issue+repo:kulkultech/open-source+author:${value}`).then(value => value.json()),
			fetch(`https://api.github.com/search/issues?q=in:comments+repo:kulkultech/open-source+author:${value}`).then(value => value.json())
		]);
		hideProgress();
		return response;
	}
	
	const showData = () => {
		// Ensure empty input cannot be processed
		if (username.value == "") return;
		
		showProgress();
		checkPullRequests(username.value).then((res) => {
			console.log(res);

			// Ensure to not continue if error occured on previous step
			if (res[2].message !== undefined) return;

			const pull_requests = res[0].items.length;
			const issues = res[1].items.length;
			const comments = res[2].items.length;

			let color_pull_requests = "red";
			let color_issues = "red";
			let color_comments = "red";

			// Check if requirements have been satisfied
			let total = target_pull_request + target_issues + target_comments;
			let curr_progress = 0;
			if (pull_requests >= target_pull_request) {
				color_pull_requests = "green"; 
				curr_progress += target_pull_request;
			}
			else curr_progress += pull_requests;

			if (issues >= target_issues) {
				color_issues = "green";
				curr_progress += target_issues;
			}
			else curr_progress += issues;

			if (comments >= target_comments) {
				color_comments = "green";
				curr_progress += target_comments;
			}
			else curr_progress += comments;
		
			resultsContainer.innerHTML = `
				<li>Progress for ${username.value}</li>
				<br/>
				<li>Numbers of Merged Pull Requests: <span style="color:${color_pull_requests}">${pull_requests}</span> / ${target_pull_request}</li>
				<li>Numbers of Issues: <span style="color:${color_issues}">${issues}</span> / ${target_issues}</li>
				<li>Numbers of Comments: <span style="color:${color_comments}">${comments}</span> / ${target_issues}</li>
				<br/>
				<li>Total progress: ${Math.round(curr_progress / total * 10000) / 100}%</br>
			`;
		});
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
		showData();
	});
	username.addEventListener("keypress", () => {
		if (event.key === "Enter") {
			event.preventDefault();
			showData();
		}
	});
</script>