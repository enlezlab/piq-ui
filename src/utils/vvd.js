/*
* Viewport Visibilaty Detection
* element to motitor
* scroll context
* callback
* */
const inRange = (range) => {
  const start = range.start;
  const end = range.end;
  const pos = window.scrollY;

  if (pos >= start && pos <= end) {
    return true
  }

  return false;
};

const VVD = function (conf) {
  // const threshold = conf.threshold;
  // const cfn = conf.callback
  const pos = window.scrollY;

  let triggered = false;

  window.addEventListener('scroll', function () {
    const r = inRange({
      start: 500,
      end: 5000
    });

    if (r === true && triggered === false) {
      console.log('trigger.......');
      triggered = true;
    }

    if (r === false && triggered === true) {
      console.log('untrigger.......');
      triggered = false;
    }

  }, false);

};

const V = new VVD();
