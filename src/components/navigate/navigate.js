import { displayHomePage, displaySignInPage, displayRegisterPage } from '../display/display';

export const navigate = {
	pageLocation: 'signin',
	isSignedIn: false,
	Home() {
		this.pageLocation = 'home';
		this.isSignedIn = true;
		displayHomePage();
	},
	SignIn() {
		this.pageLocation = 'signin';
		this.isSignedIn = false;
		displaySignInPage();
	},
	Register() {
		this.pageLocation = 'register';
		this.isSignedIn = false;
		displayRegisterPage();
	},
};
