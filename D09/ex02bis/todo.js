var list,
todo_count = 0,
txt_cookie = [];

$(function(){

	list = $("#ft_list");
	$("#id_new").click(ft_save_txt);

	if (document.cookie) {
		txt_cookie = document.cookie.split(";");
		while (todo_count < document.cookie.split("=").length - 1){
			ft_add_node(txt_cookie[todo_count].split("=")[1], txt_cookie[todo_count].split("=")[0]);
			todo_count++;
		}
	}
});

	function ft_save_txt() {

		var txt = prompt("Entrez une description de la tache");

		if (txt){
			ft_add_node(txt, todo_count);
			todo_count++;
		}
	}

	function ft_add_node(txt, number) {

		var node = $("<div>" + txt + "</div>");
		node.click(ft_del);
		list.prepend(node);
		node.attr("tabIndex", number);
		
		var d = new Date();
  		d.setTime(d.getTime() + (365 *24*60*60*1000));
  		var expires = "expires="+ d.toUTCString();

		document.cookie = number + "=" + txt + ";" + expires + ";path=/;secure;";
	}

	function ft_del(event) {

		if (confirm("Êtes vous sur de vouloir supprimer le todo \"" + event.target.innerText + "\" ?")) {
			document.cookie = $(this).attr("tabIndex") + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;secure;";
			$(this).remove();
			todo_count--;
		}
	}