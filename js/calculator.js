const technologiesSelect = document.querySelector('#calculator-form-technologes');

const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});
const calculatorForm = document.querySelector('.calculator-form');

calculatorForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Selectors
  const websiteTypeSelect = document.querySelector('#calculator-form-website-type');
  const websiteCart = document.querySelector('.calculator-form-radio-container input:checked');
  const websiteReception
  // Values
  const websiteTypeValue = websiteTypeSelect.value;
  const technologiesValue = technologiesMultiSelect.getValue();

    
});


