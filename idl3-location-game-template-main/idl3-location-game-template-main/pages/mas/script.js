const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.2211799621582,4.39976692199707'
  const locationName = 'Grote Markt';
  const nextPage = 'grote markt';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
