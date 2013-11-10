# requireGist.js

**No time for cmd-c cmd-v? requireGist to the rescue!**

Copy the following snippet and just replace gistId and gist-files you want to use:

    requireGist('7390481', ['file two', 'file one'], function(first, second) {
	    first();
	    second();
	});
	
	
requireGist.js will wrap the content of each file into a function and provide it to your callback in the order you've defined. This way, you're able to invoke them later.

requireGist.js is thoroughly tested in high traffic projects and ready for production!

###### Disclaimer

Do not use!