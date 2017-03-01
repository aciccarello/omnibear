import microformat from 'microformat-shiv';

const CLASS_NAME = '__omnibear-selected-item';
let currentItem;
let currentItemUrl;

export function clearItem() {
  if (currentItem) {
    chrome.runtime.sendMessage({
      action: 'clear-entry',
    });
    removeHighlight();
  }
}

export function removeHighlight() {
  if (currentItem) {
    currentItem.classList.remove(CLASS_NAME);
    currentItem = null;
    currentItemUrl = null;
  }
}

export function focusClickedEntry(e) {
  clearItem();
  let element;
  let url;
  let entry;
  if (document.location.hostname === 'twitter.com') {
    entry = findTweet(e.target);
  } else {
    entry = findHEntry(e.target);
  }

  if (!entry.url) {
    return;
  }
  chrome.runtime.sendMessage({
    action: 'select-entry',
    payload: { url: entry.url },
  });
  entry.element.classList.add(CLASS_NAME);
  currentItem = entry.element;
  currentItemUrl = entry.url;
}

function findTweet(el) {
  while(!el.classList.contains('tweet') && el.tagName != 'BODY') {
    el = el.parentElement;
  }

  if (!el.classList.contains('tweet')) {
    return {};
  }

  const url = `https://twitter.com${el.getAttribute('data-permalink-path')}`;
  return {
    element: el,
    url,
  };
}

function findHEntry(el) {
  while(!el.classList.contains('h-entry') && el.tagName != 'BODY') {
    el = el.parentElement;
  }

  if (!el.classList.contains('h-entry')) {
    return {};
  }

  const mf = microformat.get({node: el});
  let url;
  if (mf.items.length && mf.items[0].properties && mf.items[0].properties.url) {
    url = mf.items[0].properties.url[0];
  }

  return {
    element: el,
    url
  };
}

export function getCurrentItemUrl() {
  return currentItemUrl;
}