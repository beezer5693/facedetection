import {
	registerHeaderButton,
	registerForm,
	signInHeaderButton,
	signInForm,
	signOutHeaderButton,
	cardContainer,
} from '../variables/variables';

export const display = {
	hideElement(element) {
		element.style.display = 'none';
	},
	showElement(element, displayType) {
		element.style.display = displayType;
	},
	HomePage() {
		this.showElement(cardContainer, 'flex');
		this.showElement(signOutHeaderButton, 'inline-block');
		this.hideElement(registerForm);
		this.hideElement(signInForm);
		this.hideElement(registerHeaderButton);
		this.hideElement(signInHeaderButton);
	},

	SignInPage() {
		this.showElement(signInForm, 'flex');
		this.showElement(registerHeaderButton, 'inline-block');
		this.showElement(signInHeaderButton, 'inline-block');
		this.hideElement(registerForm);
		this.hideElement(cardContainer);
		this.hideElement(signOutHeaderButton);
	},

	RegisterPage() {
		this.showElement(registerForm, 'flex');
		this.showElement(signInHeaderButton, 'inline-block');
		this.hideElement(signInForm);
		this.hideElement(cardContainer);
	},
};
