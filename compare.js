import {normalize} from './catalog-core.js?v=a5ced4f7122a4e678b33e6dabb98f1cbb7091b3eb78074af442f3dde95d9f6b7';

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
