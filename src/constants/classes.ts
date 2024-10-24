type jsClassType = `js--${string}`;

export interface ClassesModel {
  [key: string]: jsClassType;
}

export const CLASSES: ClassesModel = {
	ACTIVE: 'js--active',
	UNACTIVE: 'js--unactive',
	VISIBLE: 'js--visible',
	TAB: 'js--tab',
	PANEL: 'js--panel',
	TABS_WRAPPER: 'js--tabs-wrapper',
	TAB_LIST: 'js--tab-list',
	PANEL_LIST: 'js--panel-list',
};
