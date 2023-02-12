class PiqRadio extends piq {
  name() {
    return 'piq-radio';
  };

  style() {
    return `

      ${this.name()} {
        --color-primary: #227c9d;
        --color-secondary: #17c3b2;
        --color-warning: #ffcb77;
        --color-danger: #f07167;
        --color-fg: #ffffff;
        --color-bg: #000000;
      }


      ${this.name()} {

      }


    `;
  };

  template() {
    return `
      <input type="radio">
    `;
  };
};

customElements.define('piq-radio', PiqRadio);

