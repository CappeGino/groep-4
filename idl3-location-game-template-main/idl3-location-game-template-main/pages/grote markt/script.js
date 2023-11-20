const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.22024917602539,4.401851177215576'
  const locationName = 'Kathedraal';
  const nextPage = 'Kathedraal';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
