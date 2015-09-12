function setupCustomStyle() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.pun div.preview { ' +
		'white-space: pre-line;' +
		'margin: -1px;' +
		'padding: 1em;' +
		'}';
	document.getElementsByTagName('head')[0].appendChild(style);
}

function displayPreview() {
	if (! displayPreviewCheckbox.checked) {
		previewBox.style.display = "none";
		return;
	}
	previewBox.style.display = "block";
	preview.innerHTML = converter.process(postForm.req_message.value)
}

function main() {
	postForm = false;
	for (var i = 0; i < document.forms.length; i++) {
		if (document.forms[i].req_message && 
			document.forms[i].req_message.tagName.toLowerCase() == "textarea") {
			postForm = document.forms[i];
			break;
		}
	}

	if (! postForm) 
		return;

	setupCustomStyle();

	converter = new Markdown(),
		previewBox = document.createElement("div"),
		preview = document.createElement("div"),
		displayPreviewItem = document.createElement("li"),
		displayPreviewLabel = document.createElement("label"),
		displayPreviewCheckbox = document.createElement("input");

	previewBox.setAttribute("class", "box preview");
	previewBox.appendChild(preview);

	postForm.parentNode.appendChild(previewBox);

	postForm.getElementsByClassName("bblinks")[0].appendChild(displayPreviewItem);
	displayPreviewItem.appendChild(displayPreviewLabel);
	displayPreviewLabel.appendChild(displayPreviewCheckbox);
	displayPreviewLabel.appendChild(document.createTextNode("Show markdown → BBcode preview"));
	displayPreviewLabel.style.display = "inline";
	displayPreviewCheckbox.type = "checkbox";
	displayPreviewCheckbox.name = "display_preview";
	displayPreviewCheckbox.checked = true;

	postForm.addEventListener("input", displayPreview, true);
	postForm.addEventListener("change", displayPreview, true);
	postForm.addEventListener("submit", function(){
		postForm.req_message.value = converter.process(postForm.req_message.value);
	}, true)
}

main();
