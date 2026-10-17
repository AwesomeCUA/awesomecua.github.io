import {normalize} from './catalog-core.js?v=26a0332cfe6b1b63a869f489dbad64a3d5921e78f2b28ce0ec0c7c428d709f33';

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
    const visible = (!environment.value || row.environments.includes(environment.value)) && terms.every(term => row.text.includes(term));
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
