import { css, html, LitElement } from 'lit-element/lit-element.js';
import { LocalizeDynamicMixin } from '@brightspace-ui/core/mixins/localize-dynamic-mixin.js';

class ImmersiveNav extends LocalizeDynamicMixin(LitElement) {

	static get properties() {
		return {
			prop1: { type: String },
		};
	}

	static get styles() {
		return css`
			:host {
				display: inline-block;
			}
			:host([hidden]) {
				display: none;
			}
		`;
	}

	static get localizeConfig() {
		return {
			importFunc: async lang => (await import(`./lang/${lang}.js`)).default
		};
	}

	constructor() {
		super();

		this.prop1 = 'immersive-nav';
	}

	render() {
		return html`
			<h2>${this.localize('hello')} ${this.prop1}!</h2>
		`;
	}
}
customElements.define('d2l-labs-immersive-nav', ImmersiveNav);
