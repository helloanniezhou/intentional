const display    = document.getElementById('display');
const editor     = document.getElementById('editor');
const customText = document.getElementById('customText');
const textInput  = document.getElementById('textInput');
const setBtn     = document.getElementById('setBtn');
const randomBtn  = document.getElementById('randomBtn');
const saveBtn    = document.getElementById('saveBtn');

// Load saved text or fallback
function loadText() {
  chrome.storage.sync.get(['customText'], ({ customText: t }) => {
    const txt = t || 'Carpe Diem';
    customText.textContent = txt;
    textInput.value       = txt;
  });
}

// Open editor
setBtn.addEventListener('click', () => {
  display.style.display = 'none';
  editor.style.display  = 'flex';
});

// (Optional) simple random inspo
const sampleQuotes = [
  'Seize the day',
  'Make it happen',
  'Stay curious',
  'Be the light',
  'Trust the process'
];
randomBtn.addEventListener('click', () => {
  const pick = sampleQuotes[Math.floor(Math.random()*sampleQuotes.length)];
  chrome.storage.sync.set({ customText: pick }, loadText);
});

// Save and go back
saveBtn.addEventListener('click', () => {
  chrome.storage.sync.set({ customText: textInput.value }, () => {
    loadText();
    editor.style.display  = 'none';
    display.style.display = 'flex';
  });
});

loadText();
