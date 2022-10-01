let website = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ website });
  console.log('Default background color set to %cgreen', `color: ${website}`);
});