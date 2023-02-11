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
  const cfnIn = conf.callback.in;
  const cfnOut = conf.callback.out;
  const pos = window.scrollY;

  let triggered = false;

  window.addEventListener('scroll', function () {
    const r = inRange({
      start: 500,
      end: 5000
    });

    if (r === true && triggered === false) {
      cfnIn();
      triggered = true;
    }

    if (r === false && triggered === true) {
      cfnOut();
      triggered = false;
    }

  }, false);

};

