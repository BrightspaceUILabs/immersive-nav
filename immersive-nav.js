import 'd2l-navigation/d2l-navigation-immersive';
import 'd2l-navigation/d2l-navigation-link-back';

import { css, html, LitElement } from 'lit-element/lit-element';

class ImmersiveNav extends LitElement {
	static get properties() {
		return {
			orgUnitId: { type: Number, attribute: 'org-unit-id' },
			navTitle: { type: String, attribute: 'nav-title' },
			navBackTitle: { type: String, attribute: 'nav-back-title' },
			navBackTitleShort: { type: String, attribute: 'nav-back-title-short' },
			navBackLink: { type: String, attribute: 'nav-back-link' },
			_backLinkClickHandler: { attribute: false }
		};
	}

	static get styles() {
		return [css`
			.d2l-immersive-nav-title {
				align-items: center;
				display: flex;
			}
			.d2l-link-back-default {
				display: inline-block;
			}
			.d2l-link-back-responsive {
				display: none;
			}
			@media screen and (max-width: 615px) {
				.d2l-link-back-default {
					display: none;
				}
				.d2l-link-back-responsive {
					display: inline-block;
				}
			}
		`];
	}

	constructor() {
		super();
		this.orgUnitId = 0;
	}

	render() {
		return html`
			<d2l-navigation-immersive width-type="fullscreen">
				<div slot="left">
					<d2l-navigation-link-back
						text="${this.navBackTitle}"
						href="${this.navBackLink}"
						class="d2l-link-back-default"
						@click=${this._backLinkClickHandler}>
					</d2l-navigation-link-back>
					<d2l-navigation-link-back
						text="${this.navBackTitleShort || this.navBackTitle}"
						href="${this.navBackLink}"
						class="d2l-link-back-responsive"
						@click=${this._backLinkClickHandler}>
					</d2l-navigation-link-back>
				</div>
				<div slot="middle" class="d2l-immersive-nav-title">
					${this.navTitle}
				</div>
			</d2l-navigation-immersive>
		`;
	}

}
customElements.define('d2l-labs-immersive-nav', ImmersiveNav);
