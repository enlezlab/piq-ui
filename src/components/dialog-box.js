import piq from '/src/libs/piq/dist/piq.dist.js';

class DialogBox extends piq {
  static attr = () => {
    return [
      'title'
    ];
  };

  name() {
    return 'dialog-box'
  };

  style() {
    return `
      ${this.name()} {
        border: 1px solid #e4e4e4;
        width: 100%;
        display: block;
        padding: .2rem;
        box-sizing: border-box;
        border-radius: 5px;
        background: #f4f4f4;
        display: grid;
        grid-gap: .2rem;
        grid-template-columns: 1fr 4fr;
        max-width: 400px;
      }

      ${this.name()} > * {
        // border: 1px solid red;
      }

      ${this.name()} > figure {
        margin: 0;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
        position: relative;
      }

      ${this.name()} > figure::after {
        content: '';
        background: linear-gradient(to left, #f9f9f9, #f9f9f9, #f9f9f9);
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      ${this.name()} > section {
        padding: 1rem;
        background: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
      }

      ${this.name()} p {
        margin: 0;
        font-size: clamp(.9rem, 3vw, 1rem);
      }

      ${this.name()} .title {
        margin: 0;
        margin-bottom: .5rem;
        font-size: clamp(1.2rem, 4vw, 1.5rem);
      }
    `;
  };

  template() {
    return `
      <figure>
        <img src="${super.props('img-src')}" alt="">
      </figure>
      <section>
        <h2 class="title">
          ${super.props('title')}
        </h2>
        <p>${super.props('summary')}</p>
      </section>
    `;
  };

};

customElements.define('dialog-box', DialogBox);
