/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
import events from "events";

export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

/* Меню второго порядка */
export function subMenu(){
	const subMenuToggle = document.querySelectorAll('.header .toggle_item');

	if (subMenuToggle) {
		subMenuToggle.forEach(function (item) {
			item.addEventListener("click", toggleSubMenu);
			return true;
		});

		function toggleSubMenu () {
			if (this.classList.contains("open")) {
				this.classList.remove("open");
			} else {
				this.classList.add("open");
			}
		}
	}

}

/* Открытие/Скритие меню в шапке */
export function openMenu(){
	const openMenuButton = document.querySelector('.header .openMenu');
	const menuElement = document.querySelector('.main-menu');

	if (openMenuButton) {
		openMenuButton.addEventListener("click", toggleMenu);

		function toggleMenu () {
			if (menuElement.classList.contains("open")) {
				this.classList.remove("open");
				menuElement.classList.remove("open");
			} else {
				this.classList.add("open");
				menuElement.classList.add("open");
			}
		}
	}

}

/* Меню второго порядка */
export function sidebarToggles(){
	const sidebarItems = document.querySelectorAll('.sidebar .item .drop');

	if (sidebarItems) {
		sidebarItems.forEach(function (item) {
			item.addEventListener("click", toggleItem);
			return true;
		});

		function toggleItem () {
			let itemParent = this.closest('.item');
			if (itemParent.classList.contains("open")) {
				itemParent.classList.remove("open");
			} else {
				itemParent.classList.add("open");
			}
		}
	}

}

/* Открытие/Скритие меню в шапке */
export function openFilter(){
	const sidebar = document.querySelector('.sidebar');
	const openCatalog = document.querySelector('.openCatalog');
	const closeButton = document.querySelector('.sidebar .close');

	if (openCatalog) {
		openCatalog.addEventListener("click", toggleMenu);

		openCatalog.addEventListener("click", toggleMenu);

		function toggleMenu () {
			if (sidebar.classList.contains("open")) {
				sidebar.classList.remove("open");
			} else {
				sidebar.classList.add("open");
			}
		}
	}

}