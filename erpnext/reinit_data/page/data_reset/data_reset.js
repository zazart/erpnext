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

	// page.add_menu_item('Menu item ',() => {
	// 	frappe.msgprint("Clicked Menu Item");
	// });
    
	// page.add_action_item('Delete',() => {
	// 	frappe.msgprint("Clicked Delete");
	// });

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

	$(frappe.render_template("data_reset",{})).appendTo(page.body);
}