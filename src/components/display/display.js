import {
	registerHeaderButton,
	registerForm,
	signInHeaderButton,
	signInForm,
	signOutHeaderButton,
	cardContainer,
} from '../variables/variables';

const display = {
	hideElement(element) {
		element.style.display = 'none';
	},
	showElement(element, displayType) {
		element.style.display = displayType;
	},
};

const displayHomePage = () => {
	display.showElement(cardContainer, 'flex');
	display.showElement(signOutHeaderButton, 'inline-block');
	display.hideElement(registerForm);
	display.hideElement(registerHeaderButton);
	display.hideElement(signInForm);
	display.hideElement(signInHeaderButton);
};

const displaySignInPage = () => {
	display.showElement(signInForm, 'flex');
	display.showElement(registerHeaderButton, 'inline-block');
	display.hideElement(signInHeaderButton);
	display.hideElement(registerForm);
	display.hideElement(cardContainer);
	display.hideElement(signOutHeaderButton);
};

const displayRegisterPage = () => {
	display.showElement(registerForm, 'flex');
	display.showElement(signInHeaderButton, 'inline-block');
	display.hideElement(registerHeaderButton);
	display.hideElement(signInForm);
	display.hideElement(cardContainer);
};

export { displayHomePage, displaySignInPage, displayRegisterPage };
