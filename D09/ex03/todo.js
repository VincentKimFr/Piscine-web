var list,
ToDoList = {};

$(function(){
	var tmp,
	data;

	list = $("#ft_list");
	$("#id_new").click(ft_save_txt);

	$.get("select.php", function(data){
			if (data)
			{
				console.log("DAT SEL :\n" + data);
				data = data.replace(/\ufeff/g, '');
				tmp = data.split('\n');
				tmp.pop();
				$(tmp).each(function(i, val){

					console.log(val);
					i = val.split(';')[0];
					val = val.split(';')[1];
					ToDoList[i] = val;

				});
				ft_print_txt();
			}
			else
				console.log("NO DATA SEL\n");
	});
});

function ft_save_txt() {

	var txt = prompt("Entrez une description de la tache"),
	node,
	arg,
	count = 0,
	find = false,
	keys;

	if (txt){

		node = $("<div>" + txt + "</div>");
		node.click(ft_del);
		list.prepend(node);
		keys = Object.keys(ToDoList);

		$(keys).each(function(i, val){

			if (count < parseInt(val.replace('_', '')))
				find = true;
			if (find == false)
				count++;

		});

		count = '_' + count;
		node.prop("CSV_ID", count);
		ToDoList[count] = txt;
		arg = count + "=" + txt;

		$.post("insert.php", arg, function(data){
			console.log("DAT INS :\n" + data);
		});
	}
}

function ft_del(event) {

	if (confirm("Êtes vous sur de vouloir supprimer le todo \"" + event.target.innerText + "\" ?")) {

		arg = 'id=' + $(this).prop("CSV_ID");

		$.post("delete.php", arg, function(data){
			console.log("DAT DEL :\n" + data);
		});

		delete ToDoList[$(this).prop("CSV_ID")];
		$(this).remove();
	}
}

function ft_print_txt(){

	var node,
	keys;

	keys = Object.keys(ToDoList);

	$(keys).each(function(i, val){

		node = $("<div>" + ToDoList[val] + "</div>");
		node.click(ft_del);
		list.prepend(node);
		node.prop("CSV_ID", val);
		
	});
}