const fetchClarifaiData = async (url) => {
	const USER_ID = 'beezer5693';
	const PAT = 'b88cf8d298744a9b8010de68c4afd04c';
	const APP_ID = 'Face-Recognition-1';
	const MODEL_ID = 'face-detection';
	const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
	const IMAGE_URL = url;

	const raw = JSON.stringify({
		user_app_id: {
			user_id: USER_ID,
			app_id: APP_ID,
		},
		inputs: [
			{
				data: {
					image: {
						url: IMAGE_URL,
					},
				},
			},
		],
	});

	const requestOptions = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Key ${PAT}`,
		},
		body: raw,
	};

	try {
		const response = await fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`, requestOptions);
		const data = await response.json();
		return data.outputs[0].data.regions;
	} catch (error) {
		console.log('error', error);
	}
};

export const getBoundingBoxes = async (url) => {
	const boundingBoxes = [];
	const regions = await fetchClarifaiData(url);
	regions.forEach((region) => {
		boundingBoxes.push(region.region_info.bounding_box);
	});
	return boundingBoxes;
};
