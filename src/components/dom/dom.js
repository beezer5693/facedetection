import { image } from '../variables/variables';
import { getBoundingBoxes } from '../clarifai/clarifia';

const createBoxElements = async (url) => {
	image.src = url;
	const data = await getBoundingBoxes(url);
	const width = Number(image.width);
	const height = Number(image.height);
	data.forEach((box) => {
		const imageWrapper = document.querySelector('.image-wrapper');
		const square = document.createElement('div');
		square.classList.add('box');
		square.style.top = `${box.top_row * height}px`;
		square.style.bottom = `${height - box.bottom_row * height}px`;
		square.style.left = `${box.left_col * width}px`;
		square.style.right = `${width - box.right_col * width}px`;
		imageWrapper.appendChild(square);
	});
};

export const detectFaces = (url) => {
	createBoxElements(url);
};
