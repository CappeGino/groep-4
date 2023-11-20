const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.2144284,4.4065395'
  const locationName = 'Botaniek';
  const nextPage = 'botaniek'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
