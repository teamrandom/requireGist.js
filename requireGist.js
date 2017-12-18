async function requireGist(id, requestedFileNames, callback) {
  const fetchResult = await fetch(`https://api.github.com/gists/${id}`);
  const json = await fetchResult.json();

  return Object.keys(json.files).reduce((funcs, fileName) => {
    if (requestedFileNames.includes(fileName)) {
      funcs.push(new Function(json.files[fileName].content));
    }
    return funcs;
  }, []);
}
