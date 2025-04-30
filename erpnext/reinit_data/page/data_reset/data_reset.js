frappe.pages['data-reset'].on_page_load = function(wrapper) {
    const page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Data Reset',
        single_column: true
    });
	
	
	page.set_indicator('Done','red')

	

	let btn = page.set_primary_action('Réinit Data', () => {
		frappe.msgprint("Réinitialisation en cours...");
	}, 'refresh');

	let btn2 = page.set_secondary_action('Refresh', () => {
		frappe.msgprint("Clicked Refresh");
	});

	page.add_menu_item('Send Email',() => {
		frappe.msgprint("Clicked Send Email");
	});
    
	page.add_action_item('Delete',() => {
		frappe.msgprint("Clicked Delete");
	});

	// Field ID
	let id_field = page.add_field({
		label: 'ID',
		fieldtype: 'Data',
		fieldname: 'id',
		change() {
			// Action on change
		}
	});

	// Field Module
	let module_field = page.add_field({
		label: 'Module',
		fieldtype: 'Data',
		fieldname: 'module',
		change() {
			// Action on change
		}
	});

	// Checkbox: Is Child Table
	let is_child_table_field = page.add_field({
		label: 'Is Child Table',
		fieldtype: 'Check',
		fieldname: 'is_child_table',
		change() {
			console.log('Is Child Table:', is_child_table_field.get_value());
		}
	});

	// Checkbox: Is Single
	let is_single_field = page.add_field({
		label: 'Is Single',
		fieldtype: 'Check',
		fieldname: 'is_single',
		change() {
			console.log('Is Single:', is_single_field.get_value());
		}
	});

	
	// // Ajoute plusieurs champs
	// let status_field = page.add_field({
	// 	label: 'Statut',
	// 	fieldtype: 'Select',
	// 	fieldname: 'status',
	// 	options: ['Open', 'Closed', 'Canceled'],
	// 	change() {
	// 		frappe.msgprint('Statut : ' + status_field.get_value());
	// 	}
	// });


	// // Bouton de filtrage
	// let filter_btn = $('<button class="btn btn-primary ml-2">Filtrer</button>');
	// page.page_form.append(filter_btn);

	// filter_btn.on('click', () => {
	// 	const statut = status_field.get_value();
	// 	const utilisateur = utilisateur_field.get_value();

	// 	frappe.msgprint(`Filtrage avec : ${utilisateur}, ${statut}`);
	// });

	// $(frappe.render_template("data_reset",{})).appendTo(page.body);
	// $(frappe.render_template("data_reset", {
	// 	data: "Hi Frappe"
	// })).appendTo(page.body);
	

	// // Ajout des vues
    // page.add_view("users", `
	// 	<div style='padding:20px;'>Liste des utilisateurs</div>
	// `);
    // page.set_view("users");

    // // Manipuler layout-side-section : Ajouter du contenu dans la sidebar
    // const sideSection = page.wrapper.find(".layout-side-section");
    
    // // Ajouter un titre et un bouton dans la sidebar
    // sideSection.append(`
    //     <div class="p-3">
    //         <h5>Actions rapides</h5>
    //         <button class="btn btn-sm btn-secondary mb-2" onclick="frappe.msgprint('Import lancé')">Importer données</button>
    //         <button class="btn btn-sm btn-danger" onclick="frappe.msgprint('Données réinitialisées')">Réinitialiser</button>
    //     </div>
    // `);
};
