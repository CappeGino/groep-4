const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.218929290771484,4.42124080657959'
  const locationName = 'Centraal station';
  const nextPage = 'centraal station'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
