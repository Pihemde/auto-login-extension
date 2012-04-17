/**
 * Renvoie les données de l'image passé en paramètre encodées en base64
 */
function img2base64(img) {
	var canvas = getCanvas(img);
	var image = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
	var data = image.data;
	var dataStr = "";
	for ( var i = 0; i < data.length; i++) {
		dataStr += String.fromCharCode(data[i]);
	}
	var base64 = Base64.encode(dataStr);

	return base64;
}

/**
 * Renvoie un object Canvas a partir de l'image passé en paramètre
 */
function getCanvas(img) {
	// Create an empty canvas element
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;

	// Copy the image contents to the canvas
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);

	return canvas;
}

/*
 * Classe de logging
 */
function Logger() {
};

// Change to false to turn off debugging
Logger.debugEnabled = true;

Logger.debug = function() {
	if (Logger.debugEnabled) {
		try {
			console.debug.apply(console, arguments);
		} catch (e) {
			var message = '';
			for ( var a in arguments) {
				if (!!message)
					message += ', ';
				message += arguments[a];
			}
			console.debug(message);
		}
	}
}

Logger.log = function() {
	try {
		console.log.apply(console, arguments);
	} catch (e) {
		var message = '';
		for ( var a in arguments) {
			if (!!message)
				message += ', ';
			message += arguments[a];
		}
		console.log(message);
	}
}

Logger.error = function() {
	try {
		console.error.apply(console, arguments);
	} catch (e) {
		var message = '';
		for ( var a in arguments) {
			if (!!message)
				message += ', ';
			message += arguments[a];
		}
		console.error(message);
	}
}

Logger.dir = function() {
	try {
		console.dir.apply(console, arguments);
	} catch (e) {
		Logger.log.apply(LOGGER, arguments);
	}
}

/*
 * </logging>
 */
