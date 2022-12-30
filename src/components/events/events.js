import { navigate } from '../navigate/navigate';
import {
	registerHeaderButton,
	registerFormButton,
	registerButtonOnSignInform,
	signInHeaderButton,
	signInFormButton,
	signOutHeaderButton,
} from '../variables/variables';
import { detectButton, imageUrlInput } from '../variables/variables';
import { detectFaces } from '../dom/dom';

export const initEvents = () => {
	registerHeaderButton.addEventListener('click', navigate.Register);
	registerFormButton.addEventListener('click', navigate.Home);
	registerButtonOnSignInform.addEventListener('click', navigate.Register);
	signInHeaderButton.addEventListener('click', navigate.SignIn);
	signInFormButton.addEventListener('click', navigate.Home);
	signOutHeaderButton.addEventListener('click', navigate.SignIn);
	detectButton.addEventListener('click', () => detectFaces(imageUrlInput.value));
};
