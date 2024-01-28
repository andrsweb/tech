import Swiper from "swiper"
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    simpleSwiper('.popular-swiper-phones', '.swiper-next', '.swiper-prev')
})

const simpleSwiper = (selector, next, prev) => {
	if (!selector) return

	const swiper = new Swiper(selector, {
		spaceBetween: 20,
        slidesPerView: 1,

		modules: [Navigation, EffectCreative],

        navigation: {
			nextEl: next,
			prevEl: prev,
		},

        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -1000],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },

		speed: 2000
	})
}