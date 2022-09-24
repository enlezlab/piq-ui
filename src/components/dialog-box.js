import piq from '/src/libs/piq/dist/piq.dist.js';

class DialogBox extends piq {
  static attr = () => {
    return [];
  };

  name() {
    return 'dialog-box'
  };

  style() {
    return ``;
  };

  template() {
    return `dialog box`;
  };

};

customElements.define('dialog-box', DialogBox);
