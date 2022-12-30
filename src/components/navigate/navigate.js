import { display } from '../display/display';

export const navigate = {
	isSignedIn: false,
	Home() {
		this.isSignedIn = true;
		display.HomePage();
	},
	SignIn() {
		this.isSignedIn = false;
		display.SignInPage();
	},
	Register() {
		this.isSignedIn = false;
		display.RegisterPage();
	},
};
