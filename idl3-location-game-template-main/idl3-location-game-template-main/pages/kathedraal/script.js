const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.218502044677734,4.398022651672363'
  const locationName = 'Plantin';
  const nextPage = 'plantin';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
