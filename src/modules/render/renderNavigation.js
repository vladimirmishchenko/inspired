import { DATA, navigation } from '../const';
import { createElement } from '../utils/createElement';

let flag = false;
let oldGender = 'women';
let oldCategory = '';

export const renderNavigation = ({ gender, category, render, repeat }) => {
  if (!render) {
    navigation.style.dispay = 'none';
    return;
  } else {
    navigation.style.dispay = '';
  }

  if (flag && oldGender === gender && oldCategory === category) {
    return;
  }

  if (repeat) {
    gender = oldGender;
  }

  oldGender = gender;
  oldCategory = category;

  flag = true;

  navigation.textContent = '';

  const container = createElement(
    'div',
    {
      className: 'container',
    },
    {
      parent: navigation,
    },
  );

  const genderList = createElement(
    'ul',
    {
      className: 'navigation__gender gender',
    },
    {
      parent: container,
    },
  );

  for (const genderName in DATA.navigation) {
    createElement(
      'a',
      {
        className: `gender__link
          ${gender === genderName ? 'gender__link--active' : ''}`,
        href: `#/${genderName}`,
        textContent: DATA.navigation[genderName].title,
      },
      {
        parent: createElement(
          'li',
          {
            className: 'gender__item',
          },
          {
            parent: genderList,
          },
        ),
      },
    );
  }

  const categoryElems = DATA.navigation[gender].list.map((item) =>
    createElement(
      'li',
      {
        className: 'category__item',
      },
      {
        append: createElement(
          'a',
          {
            className: `category__link
              ${category === item.slug ? 'category__link--active' : ''}`,
            textContent: item.title,
            href: `#/${gender}/${item.slug}`,
          },
          {
            cb(elem) {
              elem.addEventListener('click', () => {
                document
                  .querySelector('.category__link--active')
                  ?.classList.remove('category__link--active');

                elem.classList.add('category__link--active');
              });
            },
          },
        ),
      },
    ),
  );

  createElement(
    'ul',
    {
      className: 'navigation__category category',
    },
    {
      parent: container,
      appends: categoryElems,
    },
  );
};