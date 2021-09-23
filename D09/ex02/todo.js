
	var list = document.getElementById("ft_list");
	document.getElementById("id_new").addEventListener("click", ft_save_txt);
	var todo_count = 0;
	var txt_cookie = [];

	if (document.cookie) {
		txt_cookie = document.cookie.split(";");
		while (todo_count < document.cookie.split("=").length - 1){
			ft_add_node(txt_cookie[todo_count].split("=")[1], txt_cookie[todo_count].split("=")[0]);
			todo_count++;
		}
	}

	function ft_save_txt() {

		var txt = prompt("Entrez une description de la tache");

		if (txt){
			ft_add_node(txt, todo_count);
			todo_count++;
		}
	}

	function ft_add_node(txt, number) {

		var new_todo = document.createElement("div");
		var node = document.createTextNode(txt);

		new_todo.appendChild(node);
		list.insertBefore(new_todo, list.firstChild);
		new_todo.addEventListener("click", ft_del);

		var d = new Date();
  		d.setTime(d.getTime() + (365 *24*60*60*1000));
  		var expires = "expires="+ d.toUTCString();

		document.cookie = number + "=" + txt + ";" + expires + ";path=/;secure;";
		new_todo.tabIndex = number;
	}

	function ft_del(event) {

		if (confirm("Êtes vous sur de vouloir supprimer le todo \"" + event.target.innerText + "\" ?")) {
			event.target.remove();
			document.cookie = event.target.tabIndex + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;secure;";
			todo_count--;
		}
	}