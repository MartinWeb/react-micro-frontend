const result = await fetch('/remotes.json');

const configuration = await result.json();

export default configuration;