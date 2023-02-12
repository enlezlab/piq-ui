class PiqSpinner extends piq {
  name() {
    return 'piq-spinner';
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

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(1080deg);
        }
      }

      ${this.name()} {
        display: inline-block;
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        border: 4px solid var(--color-primary);
        border-bottom: 4px solid transparent;
        border-radius: 50%;
        animation-duration: 3s;
        animation-name: spin;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
      }


    `;
  };

  template() {
    return `

    `;
  };
};

customElements.define('piq-spinner', PiqSpinner);

