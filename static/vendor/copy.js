// Copy to clipboard functionality
if (document.querySelector(".pattern-code-copy-btn")) {
	var clipboard = new Clipboard('.pattern-code-copy-btn');

	clipboard.on('success', function(e) {
	    e.trigger.textContent = 'Copied';
	});
}
