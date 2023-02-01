import { API_URL, cart } from '../const';
import {
  addProductCart,
  calcTotalPrice,
  cartGoodsStore,
  getCart,
  removeCart,
} from '../controllers/cartController';
import { createElement } from '../utils/createElement';
import { renderCount } from './renderCount';

export const renderCart = ({ render }) => {
  cart.textContent = '';

  if (!render) {
    return;
  }

  const container = createElement(
    'div',
    {
      className: 'container',
      innerHTML: '<h2 class="cart__title">Корзина</h2>',
    },
    {
      parent: cart,
    },
  );

  const cartList = createElement(
    'ul',
    {
      className: 'cart__list',
    },
    {
      parent: container,
    },
  );

  getCart().forEach((product) => {
    const data = cartGoodsStore.getProduct(product.id);

    const li = createElement(
      'li',
      {
        className: 'cart__item',
      },
      { parent: cartList },
    );

    const article = createElement(
      'article',
      {
        className: 'item',
      },
      {
        parent: li,
      },
    );

    article.insertAdjacentHTML(
      'beforeend',
      `
      <img src="${API_URL}/${data.pic}" alt="${data.title}" class="item__image">

      <div class="item__content">
        <h3 class="item__title">${data.title}</h3>

        <p class="item__price">руб ${data.price}</p>

        <div class="item__vendor-code">
          <span class="item__subtitle">Артикул</span>
          <span class="item__id">${product.id}</span>
        </div>
      </div>

      <div class="item__prop">
        <div class="item__color">
          <p class="item__subtitle item__color-title">Цвет</p>

          <div class="item__color-item color color--${product.color} color--check"></div>
        </div>

        <div class="item__size">
          <p class="item__subtitle item__size-title">Размер</p>

          <div class="item__size-item size">${product.size}</div>
        </div>
      </div>
    `,
    );

    createElement(
      'button',
      {
        className: 'item__del',
        ariaLabel: 'Удалить товар из корзины',
      },
      {
        parent: article,
        cb(btn) {
          btn.addEventListener('click', () => {
            const isRemove = removeCart(product);
            if (isRemove) {
              li.remove();
              calcTotalPrice.updateTotalPrice();
              calcTotalPrice.updateCount();
            }
          });
        },
      },
    );

    const countBlock = renderCount(product.count, 'item__count', (count) => {
      product.count = count;
      addProductCart(product, true);
      calcTotalPrice.updateTotalPrice();
      calcTotalPrice.updateCount();
    });

    article.insertAdjacentElement('beforeEnd', countBlock);
  });

  const cartTotal = createElement(
    'div',
    {
      className: 'cart__total',
      innerHTML: '<p class="cart__total-title">Итого:</p>',
    },
    {
      parent: container,
    },
  );

  createElement(
    'p',
    {
      className: 'cart__total-price',
      textContent: 'руб '
    },
    {
      parent: cartTotal,
      append: createElement(
        'span',
        {},
        {
          cb(elem) {
            calcTotalPrice.updateTotalPrice();
            calcTotalPrice.writeTotal(elem);
          },
        },
      ),
    },
  );
};