import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';

Array.from($accordions.children).forEach((accordion, index, accordions) => {
  accordion.addEventListener('plus-expand', (event) => {
    accordions.forEach((accordion) => {
      accordion.open = event.target == accordion;
    });
  });
});
