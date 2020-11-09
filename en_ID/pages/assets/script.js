const username = document.getElementById('input-username')
const button = document.getElementById('btn-submit')
const resultsContainer = document.getElementById('check-list')

const checkPullRequests = async (value) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/issues?q=is:pr+repo:kulkultech/open-source+author:${value}`,
    )
    const results = await response.json()
    return results
  } catch (e) {
    throw new Error(e)
  }
}

const showData = () => {
  checkPullRequests(username.value).then((res) => {
    console.log(res)
    const loop = res.items.map((user) => {
      return `<li>${user.title}</li>`
    })
    resultsContainer.innerHTML = loop
  })
}

button.addEventListener('click', () => {
  showData()
})
