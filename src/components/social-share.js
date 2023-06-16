class SocialShare extends piq {
  name() {
    return 'social-share';
  };

  style() {
    return `

      ${this.name()} {
        font-family: arial;
        font-weight: bold;
        background: ${this.props('bg-color')};
        color: ${this.props('fg-color')};
        font-size: .9rem;
      }

      ${this.name()} a {
        text-decoration: none;
        color: ${this.props('fg-color')}
      }

      ${this.name()} .btn-share {
        display: inline-grid;
        grid-template-columns: 1fr auto;
        align-items:  center;
        border-radius: 50px;
        border: 2px solid ${this.props('fg-color')};
        cursor: pointer;
        padding: 2px;
      }

      ${this.name()} svg {
        width: 100%;
        height: 100%;
      }

      ${this.name()} .icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 5px;
        background: ${this.props('fg-color')};
        color: ${this.props('bg-color')};
      }

      ${this.name()} .text {
        padding: 5px;
      }

      ${this.name()} .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .8);
        z-index: 10000;
        display: none;
        justify-content: center;
        align-items: center;
      }

      ${this.name()} .modal.modal--active {
        display: flex;
      }

      ${this.name()} .share-widget {
        background: #fff;
        display: inline-grid;
        padding: 10px;
        border-radius: 10px;
        grid-gap: 10px;
        grid-template-columns: 1fr 20px;
        align-items: center;
      }

      ${this.name()} .share-widget ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-gap: 20px;
        grid-column: 1 / 3;
      }

      ${this.name()} .share-widget li a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }

      ${this.name()} .icon-wrapper {
        display: block;
        border: 2px solid ${this.props('fg-color')};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background: ${this.props('fg-color')};
        color: ${this.props('bg-color')};
      }

      ${this.name()} .share-widget svg {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        display: block;
        fill: currentColor;
      }

      ${this.name()} .btn-close {
        cursor: pointer;
      }

      ${this.name()} .btn-close svg {
        margin: 0 auto;
        width: 20px;
        height: 20px;
      }

    `;
  };

  iconShare() {
    return `
    <span class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
    </span>
    `;
  };

  iconClose() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    `;
  };

  iconFacebook() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
    `;
  };

  iconTwitter() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
    `;
  };

  iconReddit() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"/></svg>
    `;
  };

  iconCopy() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>
    `;
  };

  textShare() {
    if (this.props('btn-text')) {
      return `
        <span class="text">
          ${this.props('btn-text')}
        </span>
      `;
    }

    return '';
  };

  getMetaTitle() {
    return document.title;
  };

  getShareLink() {
    return window.location;
  };

  shareModal() {
    return `
      <div class="modal">
        <div class="share-widget">
          <div>
            ${this.props('widget-title')}
          </div>
          <div class="btn-close">
            ${this.iconClose()}
          </div>
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/sharer.php?u=${this.getShareLink()}">
                <span class="icon-wrapper">
                  ${this.iconFacebook()}
                </span>
                <span>
                  Facebook
                </span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/intent/tweet?url=${this.getShareLink()}&text=${this.getMetaTitle()}">
                <span class="icon-wrapper">
                  ${this.iconTwitter()}
                </span>
                <span>
                  Twitter
                </span>
              </a>
            </li>
            <li>
              <a target="_target" href="https://reddit.com/submit?url=${this.getShareLink()}&title=${this.getMetaTitle()}">
                <span class="icon-wrapper">
                  ${this.iconReddit()}
                </span>
                <span>
                  Reddit
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
  };

  openModal() {
    const modal = this.querySelectorAll('.modal')[0];
    this.addEventListener('click', function () {
      modal.classList.add('modal--active');
    }, false);
  };

  closeModal() {
    const modal = this.querySelectorAll('.modal')[0];
    const btnClose = this.querySelectorAll('.btn-close')[0];
    btnClose.addEventListener('click', function () {
      event.stopImmediatePropagation();
      modal.classList.remove('modal--active');
    }, false);

  };

  template() {
    return `
      <div class="btn-share">
        ${this.iconShare()}
        ${this.textShare()}
      </div>
      ${this.shareModal()}
    `;
  };

  connected() {
    this.openModal();
    this.closeModal();
  };
};

customElements.define('social-share', SocialShare);
