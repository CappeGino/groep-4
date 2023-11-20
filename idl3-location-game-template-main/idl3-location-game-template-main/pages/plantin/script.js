const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.2159843,4.4073301'
  const locationName = 'Bourlaschouwburg';
  const nextPage = 'bourlaschouwburg'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
