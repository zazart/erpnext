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

	let id_field = page.add_field({
		label: 'ID',
		fieldtype: 'Data',
		fieldname: 'id',
		change() {
			
		}
	});

	let module_field = page.add_field({
		label: 'Module',
		fieldtype: 'Data',
		fieldname: 'module',
		change() {
			console.log('coucou:', module_field.get_value());
		}
	});

	let is_child_table_field = page.add_field({
		label: 'Is Child Table',
		fieldtype: 'Check',
		fieldname: 'is_child_table',
		change() {
			console.log('Is Child Table:', is_child_table_field.get_value());
		}
	});

	let is_single_field = page.add_field({
		label: 'Is Single',
		fieldtype: 'Check',
		fieldname: 'is_single',
		change() {
			console.log('Is Single:', is_single_field.get_value());
		}
	});


	
	frappe.call({
		method: 'erpnext.reinit_data.page.data_reset.data_reset.get_doctypes',
		callback: function(response) {
			let doctypes = response.message;
			let html = frappe.render_template("data_reset", { doctypes });
			$(html).appendTo(page.body);

			$(page.body).on('click', '.btn-group .btn', function () {
				$('.btn-group .btn').removeClass('btn-info').prop('disabled', false);
				$(this).addClass('btn-info').prop('disabled', true);

				frappe.msgprint({
					message: __('Vous avez choisi la limite : ') + $(this).text(),
				});
			});
		}
	});


	$(document).on('change', '.list-check-all', function () {
		const isChecked = $(this).is(':checked');
		$('.list-row-checkbox').prop('checked', isChecked);
	});

	$(document).on('change', '.list-row-checkbox', function () {
		const total = $('.list-row-checkbox').length;
		const checked = $('.list-row-checkbox:checked').length;
		$('.list-check-all').prop('checked', total === checked);
	});

		

}

