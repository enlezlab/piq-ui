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
        grid-template-columns: 80px auto;
        max-width: 320px;
        font-family: arial;
        position: relative;
      }

      .dialog-box__img {
        background: linear-gradient(to left, #f9f9f9, #e4e4e4, #f9f9f9);
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }

      .dialog-box__img figure {
        margin: 0;
        padding: 0;
        position: relative;
        padding-top: 100%;
      }

      .dialog-box__img figure::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      .dialog-box__img img {
        display: none;
      }

      .dialog-box__text {
        padding: .5rem;
        background: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
      }

      ${this.name()} p {
        margin: 0;
        font-size: .8rem;
      }

      ${this.name()} .title {
        margin: 0;
        margin-bottom: .5rem;
        font-size: 1rem;
      }

      .dialog-box__btn-close {
        position: absolute;
        top: -8px;
        right: -8px;
        border: 1px solid #999;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 50%;
        box-sizing: border-box;
        background: #fff;
        font-weight: bold;
        font-size: 18px;
      }
    `;
  };

  closeBtn() {
    const btn = this.querySelectorAll('.dialog-box__btn-close')[0];
    const _this = this;

    btn.addEventListener('click', function () {
      _this.outerHTML = '';
    }, false);
  };

  template() {
    return `
      <div class="dialog-box__img">
        <figure style="background-image: url('${super.props('img-src')}');">
          <img src="${super.props('img-src')}" alt="">
        </figure>
      </div>
      <section class="dialog-box__text">
        <h2 class="title">
          ${super.props('title')}
        </h2>
        <p>${super.props('summary')}</p>
      </section>
      <div class="dialog-box__btn-close">&times;</div>
    `;
  };

  connected() {
    this.closeBtn();
  };

};

customElements.define('dialog-box', DialogBox);
