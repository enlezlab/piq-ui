class TextBanner extends piq {
  name() {
    return 'text-banner';
  };

  style() {
    return `
      ${this.name()} {

        display: inline-block;
        margin: 0;
        padding: 30px 20px;
        border-radius: 10px;
        background: #c032ff;
        border: 1px solid #000;
        color: #fff;
        text-align: center;
        max-width: 560px;
      }

      ${this.name()} h2 {
        font-size: calc(1rem + 2vw);
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        margin: 0;
        margin-bottom: 30px;
      }

      ${this.name()} .btn {
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        border: 1px solid #000;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 400;
        background: linear-gradient(135deg, #fa9cd1, #e9d36e);
      }

    `;
  };

  template() {
    return `
      <h2>
      ${this.props('text')}
      </h2>
      <a class="btn" href="${this.props('cta-link')}">
        ${this.props('cta-text')}
      </a>
    `;
  };
};

customElements.define('text-banner', TextBanner);
