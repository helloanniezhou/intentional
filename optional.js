const apiInput = document.getElementById('apiKey');
const saveBtn = document.getElementById('saveApiKey');

function loadKey() {
  chrome.storage.sync.get(['apiKey'], ({ apiKey }) => {
    apiInput.value = apiKey || '';
  });
}

saveBtn.addEventListener('click', () => {
  chrome.storage.sync.set({ apiKey: apiInput.value });
});

document.addEventListener('DOMContentLoaded', loadKey);

