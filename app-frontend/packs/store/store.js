import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mutations = {
	setBanner(state, banner) {
		state.banner.title = banner.title
		state.banner.content = banner.content
		state.banner.style = banner.style
		state.banner.product_id = banner.product_id
	},
	FETCH_BANNERS(state, banners) {
		state.bannersData.push(banners);
	}
}

const state = {
	banner: {
		bannerId: 7,
		title: 'title',
		content: 'new content',
		style: { key: '#hhfdfjhd' },
		product_id: 6806344794283,
	},
	bannersData: []
}

const getters = {
	getBannersData: state => {
		return state.bannersData
	}
}

const actions = {
	getBannerById({ commit }, bannerId) {
		fetch("api/v1/banners/" + bannerId).then((response) =>
			console.log(response)
		)
	},

	getBanners({ commit }) {
		fetch("api/v1/banners")
			.then(response => response.json())
			.then((response) => {
				console.log(response.data[0]);
				commit("FETCH_BANNERS", response.data);
			});
	},

	createBanner({ commit }, data) {
		const { title, content, bannerColor, productId } = data;
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				banner: {
					title: title,
					content: content,
					style: { key: bannerColor },
					product_id: productId,
				},
			}),
		};
		fetch("api/v1/banners", requestOptions).then((response) =>
			console.log(response)
		);
	},

	updateBanner({ commit }, data) {
		const { bannerId, title, content, bannerColor, productId } = data;
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				banner: {
					title: title,
					content: content,
					style: { key: bannerColor },
					product_id: productId,
				},
			}),
		}
		fetch(`api/v1/banners/${bannerId}`, requestOptions).then(
			(response) => console.log(response)
		);
	},

	deleteBanner({ commit }) {
		const requestOptions = {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		};
		console.log(state.banner.bannerId);
		fetch("api/v1/banners/" + state.banner.bannerId, requestOptions).then(
			(response) => console.log(response)
		);
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
