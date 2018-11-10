const RESEND_REQUEST_TIMEOUT = 60 * 1000;

const DATA_PREFIX = 'data:';

export const createMeasurementsClient = (targetUrl, cb) => {
  let xhttp;
  let prevData;
  let timer;
  const reStartClient = () => {
    prevData = '';
    if (xhttp) {
      xhttp.abort();
    }
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      const updates = this.responseText
        .substr(prevData.length)
        .substr(DATA_PREFIX.length)
        .trim();
      prevData = this.responseText;
      if (updates) {
        const data = JSON.parse(updates);
        cb(data);
      }
    };

    xhttp.open('GET', targetUrl, true);
    xhttp.send();
  };

  timer = setInterval(reStartClient, RESEND_REQUEST_TIMEOUT);

  reStartClient();

  return () => {
    if (xhttp) {
      xhttp.abort();
    }
    clearInterval(timer);
  };
};
