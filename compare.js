import {normalize,profileVisible} from './catalog-core.js?v=55e19b167c3d785f8e869c7ebc5c6483d86dc9b32f97b575cc61dc370317efe1';

const query = document.querySelector('#compare-query');
const environment = document.querySelector('#compare-environment');
const output = document.querySelector('#compare-results');
const rows = [...document.querySelectorAll('[data-profile-row]')].map(element => ({element, text:normalize(element.dataset.search), environments:element.dataset.environments.split(' ')}));
const initial = new URLSearchParams(location.search);
query.value = initial.get('q') || '';
const initialEnvironment = initial.get('environment') || '';
if ([...environment.options].some(option => option.value === initialEnvironment)) environment.value = initialEnvironment;
function apply() {
  const terms = normalize(query.value).split(' ').filter(Boolean);
  let count = 0;
  for (const row of rows) {
    const visible = profileVisible(row.text, row.environments, terms, environment.value);
    row.element.hidden = !visible;
    count += Number(visible);
  }
  output.textContent = `Showing ${count} of ${rows.length} profiles.`;
  const url = new URL(location.href);
  for (const [key,value] of [['q',query.value.trim()],['environment',environment.value]]) {
    if(value) url.searchParams.set(key,value); else url.searchParams.delete(key);
  }
  history.replaceState(null,'',url);
}
query.addEventListener('input',apply);
environment.addEventListener('change',apply);
apply();
