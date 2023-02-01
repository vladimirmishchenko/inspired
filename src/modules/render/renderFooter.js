import { DATA, footer } from '../const';
import { createElement } from '../utils/createElement';

const createFooterCategory = () => {
  const footerCategory = createElement('div', {
    className: 'footer__item footer__item_category footer-category',
  });

  createElement(
    'h2',
    {
      className: 'footer__title footer-category__title',
      textContent: 'Каталог',
    },
    { parent: footerCategory },
  );

  const footerCategoryList = createElement(
    'ul',
    {
      className: 'footer-category__list'
    },
    {
      parent: footerCategory,
    }
  );

  for (const key in DATA.navigation) {
    const footerCategoryItem = createElement(
      'li',
      {
        className: 'footer-category__item'
      },
      {
        parent: footerCategoryList,
        append: createElement(
          'h3',
          {
            className: 'footer-category__subtitle',
          },
          {
            append: createElement('a', {
              className: 'footer__link',
              href: `#/${key}`,
              textContent: DATA.navigation[key].title
            })
          }
        )
      }
    );

    createElement(
      'ul',
      {
        className: 'footer-category__sublist',
      },
      {
        parent: footerCategoryItem,
        appends: DATA.navigation[key].list.map(item =>
          createElement(
            'li',
            {
              className: 'footer__link'
            },
            {
              append: createElement('a', {
                className: 'footer__link',
                href: `#/${key}/${item.slug}`,
                textContent: item.title,
              }),
            }
          )
        )
      }
    )
  };

  return footerCategory;
};

export const renderFooter = () => {
  footer.textContent = '';

  const container = createElement(
    'div',
    {
      className: 'container',
    },
    { parent: footer },
  );

  const footerContainer = createElement(
    'div',
    {
      className: 'footer__container',
    },
    { parent: container, append: createFooterCategory() },
  );

  footerContainer.insertAdjacentHTML(
    'beforeend',
    `
		<div class="footer__item footer__item--social footer-social">
			<h2 class="footer__title footer-social__title">Связаться с нами</h2>

			<p class="footer-social__subtitle">Контакты и адреса магазинов</h3>

			<ul class="footer-social__list">
				<li class="footer-social__item">
					<a href="#" class="footer-social__link footer-social__link--vk footer__link">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 13.2978C18.6463 13.8441 19.2381 14.3583 19.7402 14.961C19.9626 15.2277 20.1723 15.5034 20.3319 15.8135C20.5597 16.2557 20.354 16.7406 19.9582 16.7669L17.4997 16.7664C16.8648 16.8189 16.3595 16.5628 15.9335 16.1287C15.5935 15.7828 15.278 15.4133 14.9505 15.0556C14.8167 14.9087 14.6757 14.7705 14.5078 14.6617C14.1726 14.4437 13.8815 14.5105 13.6895 14.8606C13.4938 15.2169 13.4491 15.6117 13.4304 16.0082C13.4037 16.5879 13.2288 16.7394 12.6472 16.7666C11.4044 16.8248 10.2251 16.6362 9.12908 16.0097C8.16221 15.457 7.41385 14.677 6.76174 13.7938C5.49189 12.0722 4.51937 10.1826 3.64554 8.23881C3.44888 7.80104 3.59276 7.56681 4.0757 7.55773C4.87808 7.54226 5.68045 7.54423 6.48282 7.55699C6.80937 7.56215 7.02543 7.74899 7.1509 8.05713C7.58449 9.12393 8.11605 10.1389 8.78216 11.0803C8.95967 11.3309 9.14087 11.5809 9.39892 11.7579C9.68372 11.9534 9.90077 11.8888 10.0351 11.5708C10.121 11.3688 10.1581 11.1527 10.1767 10.9361C10.2406 10.1944 10.2482 9.45293 10.1377 8.71415C10.069 8.25183 9.80894 7.95327 9.34809 7.86586C9.11337 7.82142 9.14774 7.73451 9.26191 7.60045C9.46005 7.36868 9.64567 7.22529 10.0167 7.22529L12.7943 7.2248C13.232 7.31073 13.3303 7.50715 13.3897 7.94811L13.3921 11.0348C13.387 11.2055 13.4778 11.7113 13.7842 11.823C14.0297 11.904 14.1918 11.7071 14.3386 11.5517C15.0047 10.8448 15.4793 10.0105 15.9043 9.14701C16.0919 8.7662 16.2537 8.37213 16.4108 7.97733C16.5277 7.6854 16.7094 7.54177 17.0389 7.54668L19.7136 7.54987C19.7924 7.54987 19.8725 7.55061 19.9506 7.56411C20.4014 7.64121 20.5248 7.83517 20.3854 8.27491C20.1659 8.96581 19.7394 9.54132 19.3225 10.1183C18.8757 10.736 18.3991 11.3322 17.9567 11.9526C17.5501 12.5198 17.5822 12.8053 18.087 13.2978Z"/>
						</svg>
					</a>
				</li>
				<li class="footer-social__item">
					<a href="#" class="footer-social__link footer-social__link--tg footer__link">
						<svg width="29" height="29" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z"></path>
						</svg>
					</a>
				</li>
			</ul>

		</div>

		<div class="footer__item footer__item--contacts footer-contacts">
			<a class="footer__link" href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
			<a class="footer__link" href="tel:89304902620">8 930 490 26 20</a>
		</div>

		<div class="footer__item footer__item--copyright footer-copyright">
			<p>© INSPIRED, 2023</p>
		</div>

		<div class="footer__item footer__item--development footer-development">
				<ul class="footer-development__list">
					<li class="footer-development__item">
						Designer: <a class="footer__link" href="https://t.me/Mrshmallowww">Anastasia Ilina</a>
					</li>

					<li class="footer-development__item">
						Developer: <a class="footer__link" href="#">Vladimir Mishchenko</a>
					</li>
				</ul>
		</div>
    `,
  );
};