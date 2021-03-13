$(document).ready(function(){

	$("#create_post").submit(function(e){

		var content = tinymce.get("detail").getContent();

		$("#data-container").html(content);

		return false;

	});

});