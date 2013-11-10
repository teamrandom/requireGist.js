function requireGist(id, requestedFileNames, callback)
{
	function sent() {

			var contents = {},
				callbackArgs = [],
				response = this.responseText,
				json = JSON.parse(response);


			for (var file in json.files) {
				file = json.files[file];

				if(requestedFileNames.indexOf(file.filename) > -1) {
					contents[file.filename] = file.content
				}
			}
			
			requestedFileNames.forEach(function(name) {
				callbackArgs.push(new Function(contents[name]));
			});

			callback.apply(window, callbackArgs);

    }

    xhr = new XMLHttpRequest();
    xhr.onload = sent;
    xhr.open("get", "https://api.github.com/gists/" + id, true);
    xhr.send();
    
}
