const tab = () => {
	const tabTriggers = document.querySelectorAll('.js-tab-trigger');

	if (!tabTriggers.length) {
		return;
	}

	const tabSwitch = e => {
		const thisTab = e.currentTarget; // クリックしたタブ
		const tabParent = thisTab.closest('.js-tab-parent'); // クリックしたタブの親
		const groupTriggers = tabParent.querySelectorAll('.js-tab-trigger'); // クリックしたタブのグループの要素
		const thisIndex = Array.prototype.slice.call(groupTriggers).indexOf(thisTab); // クリックしたタブがグループの何番目か

		// タブの切り替え
		tabParent.querySelector('.is-active').classList.remove('is-active');
		thisTab.classList.add('is-active');

		// コンテンツ部分の切り替え
		tabParent.querySelector('.is-show').classList.remove('is-show');
		tabParent.querySelectorAll('.js-tab-content')[thisIndex].classList.add('is-show');
	}

	tabTriggers.forEach(tabTrigger => {
		tabTrigger.addEventListener('click', tabSwitch);
	});

}

tab();
