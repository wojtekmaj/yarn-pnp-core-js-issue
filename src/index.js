import { foo } from '@acme-inc/utils';

document.body.innerHTML = `
  <button id="btn">Click me</button>
`

btn.addEventListener('click', () => {
  foo();
  alert('Clicked');
});
