var CodeMirror = function() {
	editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
	    lineNumbers: true,
	    mode:  "xml"
	});
	$('.CodeMirror').resizable({
		resize: function() {
			editor.setSize($(this).width(), $(this).height());
		}
	});
	editor.refresh();
}
