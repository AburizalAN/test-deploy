import React, { useRef, useEffect } from 'react';
import {
  MAGENTO_BASE_URL,
  MAGENTO_PASS,
  MAGENTO_USERNAME,
  WEBSITE_URL,
} from 'utils/constant';
import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';

/* eslint-disable no-useless-escape */

/**
 * Capitalize Word
 * @param {string} word - The word want to capitalize
 * @return {string} - Capitalized word
 */
export function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

export function capitalizeEachWord(word) {
  return word
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}

export function toBase64(file) {
  if (!file) return;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Push Notification
 * @constructor
 * @param {string} message - The message of notification.
 */
export function notifyMe(message) {
  // Let's check if the browser supports notifications
  if (typeof window === 'undefined') return;
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    new Notification(message ?? 'Hi there!');
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        new Notification(message ?? 'Hi there!');
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

/**
 * Copy Text to Clipboard
 * @constructor
 * @param {string} text - The text want to copy
 */
export async function copyTextToClipboard(text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}
// decode html special char
export function escapeHtml(text) {
  let map = {
    '&amp;': '&',
    '&#038;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&#8217;': '’',
    '&#8216;': '‘',
    '&#8211;': '–',
    '&#8212;': '—',
    '&#8230;': '…',
    '&#8221;': '”',
  };

  return text.replace(/\&[\w\d\#]{2,5}\;/g, function (m) {
    return map[m];
  });
}

export function checkIos() {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}

export function convertDateForIos(date) {
  // Thanks to https://stackoverflow.com/questions/26657353/date-on-ios-device-returns-nan#:~:text=It%20probably%20means%20that%20the,all%20the%20APIs%20return%20NaN%20.
  const arr = date.split(/[- :]/);
  date = new Date(
    parseInt(arr[0]),
    parseInt(arr[1] - 1),
    parseInt(arr[2]),
    parseInt(arr[3]),
    parseInt(arr[4]),
    parseInt(arr[5])
  );
  return date;
}

export function dateTimeToString(dataDate, withTime = false, separator = ',') {
  if (!dataDate) return null;

  const isIos = checkIos();
  let dateFixForIos = dataDate;

  if (isIos) {
    dateFixForIos = convertDateForIos(dataDate);
  }

  const date = new Date(dateFixForIos);

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const formatDate = (date) => {
    let formatted_date =
      date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

    if (withTime) {
      let hours = date.getHours();
      let minutes = date.getMinutes();

      hours = ('0' + hours).slice(-2);
      minutes = ('0' + minutes).slice(-2);

      formatted_date =
        date.getDate() +
        ' ' +
        months[date.getMonth()] +
        ' ' +
        date.getFullYear() +
        separator +
        ' ' +
        hours +
        ':' +
        minutes +
        ' WIB';
    }

    return formatted_date;
  };
  return formatDate(date);
}

export function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}

export async function fetchAdminToken() {
  const user = {
    username: MAGENTO_USERNAME,
    password: MAGENTO_PASS,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const url = MAGENTO_BASE_URL + '/integration/admin/token';
  const respond = await fetch(url, options).then((res) => res.json());

  return respond;
}

export async function fetchQuoteId(auth) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  };

  const url = MAGENTO_BASE_URL + '/carts/mine/generate-quote';
  const respond = await fetch(url, options).then((res) => res.json());

  return parseInt(respond);
}

export function debounce(func, { timeout = 1500 }) {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, timeout);
  };
}

export function dateRange(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);

  if (startDate <= endDate) {
    return true;
  } else {
    return false;
  }
}

export function useDidMount() {
  const didMountRef = useRef(true);

  useEffect(() => {
    didMountRef.current = false;
  }, []);
  return didMountRef.current;
}

export function get_browser_info() {
  let ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE ', version: tem[1] || '' };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem != null) {
      return { name: 'Opera', version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1],
  };
}

// crypto encrypt
export function encryptDataCrypto(dataObj, token) {
  let encryptData = AES.encrypt(JSON.stringify(dataObj), token).toString();

  return encryptData;
}

export function decryptDataCrypto(data, token) {
  let bytes = AES.decrypt(data, token);
  let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
}
