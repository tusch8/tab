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
		const contentCount = tabParent.querySelectorAll('.js-tab-content').length; // グループにコンテンツはいくつあるか(上下連動タブで使用)

		// いくつめのタブを切り替えるのか
		let switchTabIndex;
		if (thisIndex > contentCount - 1) { // クリックしたタブが、コンテンツより大きいとき(連動している下部のタブをクリックしたとき)
			switchTabIndex = thisIndex - contentCount;
		} else {
			switchTabIndex = thisIndex;
		}

		// タブの切り替え
		tabParent.querySelectorAll('.is-active').forEach(el => {
			el.classList.remove('is-active');
		});

		groupTriggers.forEach((el, i) => {
			if (i === switchTabIndex || i === switchTabIndex + contentCount) {
				el.classList.add('is-active');
			}
		});

		// コンテンツ部分の切り替え
		tabParent.querySelector('.is-show').classList.remove('is-show');
		tabParent.querySelectorAll('.js-tab-content')[switchTabIndex].classList.add('is-show');

	}

	tabTriggers.forEach(tabTrigger => {
		tabTrigger.addEventListener('click', tabSwitch);
	});

}

tab();
