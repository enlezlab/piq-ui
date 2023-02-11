
class PiqButton extends piq {
  name() {
    return 'piq-button';
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
        display: inline-block;
      }

      ${this.name()} > button {
        border: none;
        background: transparent;
        padding: 0;
      }

      ${this.name()} > a {
        padding: 0;
        text-decoration: none;
        color: #000000;
      }

      ${this.name()} > button,
      ${this.name()} > a {
        border-radius: 5px;
        border: 1px solid var(--color-bg);
        background: var(--color-bg);
        color: var(--color-fg);
        width: 100%;
        display: block;
        padding: 5px 10px;
        font-family: arial;
        font-size: 1rem;
        cursor: pointer;
        text-align: center;
        transition: .3s ease;
      }

      ${this.name()}:hover > button,
      ${this.name()}:hover > a {
        filter: brightness(1.1);
      }

      /* state */

      ${this.name()}[state="primary"] > a,
      ${this.name()}[state="primary"] > button{
        border: 1px solid var(--color-primary);
        background: var(--color-primary);
        color: var(--color-fg);
      }

      ${this.name()}[state="secondary"] > a,
      ${this.name()}[state="secondary"] > button{
        border: 1px solid var(--color-secondary);
        background: var(--color-secondary);
        color: var(--color-fg);
      }

      ${this.name()}[state="outline"] > a,
      ${this.name()}[state="outline"] > button{
        border: 1px solid var(--color-primary);
        background: transparent;
        color: var(--color-primary);
      }

      ${this.name()}[state="warning"] > a,
      ${this.name()}[state="warning"] > button{
        border: 1px solid var(--color-warning);
        background: var(--color-warning);
        color: var(--color-fg);
      }

      ${this.name()}[state="danger"] > a,
      ${this.name()}[state="danger"] > button{
        border: 1px solid var(--color-danger);
        background: var(--color-danger);
        color: var(--color-fg);
      }

      ${this.name()}[state="disabled"] > a,
      ${this.name()}[state="disabled"] > button{
        cursor: not-allowed;
        opacity: .3;
      }



    `;
  };

  button() {
    return `
      <button>
        ${this.innerHTML}
      </button>
    `;
  };

  buttonLink() {
    return `
      <a href="${this.props('link')}">
        ${this.innerHTML}
      </a>
    `;
  };

  hasLink() {
    if (this.props('link')) {
      return true;
    }

    return false;
  };

  buttonType() {
    if (this.hasLink()) {
      return this.buttonLink();
    }

    return this.button();
  };

  template() {
    return this.buttonType();
  };
};

customElements.define('piq-button', PiqButton);

