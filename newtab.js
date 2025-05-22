const display = document.getElementById('display');
const editor = document.getElementById('editor');
const customTextEl = document.getElementById('customText');
const textInput = document.getElementById('textInput');
const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');

function loadText() {
  chrome.storage.sync.get(['customText'], ({ customText }) => {
    const text = customText || 'Carpe diem';
    customTextEl.textContent = text;
    textInput.value = text;
  });
}

editBtn.addEventListener('click', () => {
  display.style.display = 'none';
  editor.style.display = 'flex';
});
saveBtn.addEventListener('click', () => {
  const newText = textInput.value;
  chrome.storage.sync.set({ customText: newText }, () => {
    loadText();
    editor.style.display = 'none';
    display.style.display = 'flex';
  });
});

loadText();