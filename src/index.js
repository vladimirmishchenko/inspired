import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage';
import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createCssColors } from './modules/createCssColors';
import { categoryPage } from './modules/categoryPage';
// import { searchPageController } from './modules/controllers/searchController';

const init = async () => {
	try {
		DATA.navigation = await getData(`${API_URL}/api/categories`);
		DATA.colors = await getData(`${API_URL}/api/colors`);

		router.on('*', () => {
			renderHeader();
			renderFooter();
		});

		createCssColors(DATA.colors);

		router.on('/', () => {
			mainPage();
		});

		router.on('women', () => {
			mainPage('women');
		});

		router.on('men', () => {
			mainPage('men');
		});

		router.on('/:gender/:category', categoryPage);

		router.on('search', (data) => console.log(data.params.value));

	} catch(e) {
		console.warn(e);
    createElement('h2',
      {
        textContent: 'Что-то пошло не так, попробуйте позже...',
      },
      {
        parent: main,
        cb(h2) {
          h2.style.textAlign = 'center';
        },
      },
    );
	} finally {
		router.resolve();
	}
}

init();