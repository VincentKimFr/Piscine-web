var list,
todo_count = 0,
txt_cookie = [];
ToDoList = {};

$(function(){

	list = $("#ft_list");
	$("#id_new").click(ft_save_txt);


	if (document.cookie) {
		txt_cookie = document.cookie.split(";");
		console.log(document.cookie);
		while (todo_count < document.cookie.split("=").length - 1){
			ft_add_node(txt_cookie[todo_count].split("=")[1], txt_cookie[todo_count].split("=")[0]);
			todo_count++;
		}
	}
});

	function save_CSV() {

		var arg = "";
		children = $("#ft_list").children();

		children.each(function(i, todo){
			
			if (arg)
				arg = "&" + arg;
			arg = $(todo).attr("tabIndex") + "=" + $(todo).text() + arg;
		});
		console.log(arg);
		$.post("insert.php", arg);

	}

	function ft_save_txt() {

		var txt = prompt("Entrez une description de la tache");

		if (txt){
			ft_add_node(txt);
			todo_count++;
		}
	}

	function ft_add_node(txt) {

		var node = $("<div>" + txt + "</div>"),
		arg,
		count = 0,
		find = false;

		node.click(ft_del);
		list.prepend(node);
		node.prop("tabIndex", todo_count);
		
		var d = new Date();
  		d.setTime(d.getTime() + (365 *24*60*60*1000));
  		var expires = "expires="+ d.toUTCString();

  		todo_count = 0;
  		$.each(ToDoList, function(index, value){
  			if (todo_count < parseInt(index)){
  				find = true;
  			}
  			count++;
  			if (find == false)
  				todo_count++;
		});
		ToDoList[todo_count] = txt;
  		console.log(ToDoList);

		document.cookie = todo_count + "=" + txt + ";" + expires + ";path=/;secure;";

		arg = todo_count + "=" + node.text();
		$.post("insert.php", arg, function(data){
			console.log("DAT INS :" + data);
		});
	}

	function ft_del(event) {

		if (confirm("Êtes vous sur de vouloir supprimer le todo \"" + event.target.innerText + "\" ?")) {
			document.cookie = $(this).prop("tabIndex") + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;secure;";

			arg = 'id=' + $(this).prop("tabIndex");
			$.post("delete.php", arg, function(data){
				console.log("DAT DEL :\n" + data);
			});
			$(ToDoList).remove(parseInt($(this).prop("tabIndex")));
			console.log(ToDoList);
			$(this).remove();

			todo_count--;
		}
	}