const startButton = document.querySelector('#start-button');

startButton.onclick = () => {
  const coordinates = '51.22890188533434,4.404884792331236'
  const locationName = 'Het Mas Museum';
  const nextPage = 'mas';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}

