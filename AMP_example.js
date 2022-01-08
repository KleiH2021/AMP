define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [ 
					{image : 'instalogo.jpeg'}, 
					{image : 'instalogo2.jpeg'}, 
					{image : 'sc2.jpeg'}, 
					//{image : 'S04.bmp'}, 
					//{image : 'S05.bmp'}, 
					//{image : 'S06.bmp'}, 
					//{image : 'S07.bmp'}, 
					//{image : 'S08.bmp'}, 
					//{image : 'S09.bmp'}, 
					//{image : 'S10.bmp'}, 
					//{image : 'S11.bmp'},
					//{image : 'S12.bmp'}
							]
			

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'instalogo.jpeg'}, 
					{image : 'instalogo2.jpeg'}, 
					{image : 'sc2.jpeg'}, 
					//{image : 'w04.jpg'}, 
					//{image : 'w05.jpg'}, 
					//{image : 'w06.jpg'}, 
					//{image : 'w07.jpg'}, 
					//{image : 'w08.jpg'}, 
					//{image : 'w09.jpg'}, 
					//{image : 'w10.jpg'}, 
					//{image : 'w11.jpg'}, 
					//{image : 'w12.jpg'}
				]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'instalogo.jpeg'}, {image : 'instalogo2.jpeg'}, {image : 'sc2.jpeg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://github.com/KleiH2021/AMP/tree/main/stimuli'
		}
	});
});

