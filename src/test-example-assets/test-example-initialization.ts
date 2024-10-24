import { Marquee } from '../index';

const marquee = new Marquee({
	matchMediaRule: window.matchMedia('(max-width: 991px)'), // will prevent the tab changing if window.matchMedia doesn't match
	duration: 1,
	devMode: true,
});

marquee.init();
