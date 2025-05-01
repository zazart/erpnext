import frappe
from frappe import _

@frappe.whitelist()
def get_doctypes(limit=20, start=0):
    doctypes = frappe.get_list('DocType',
                               fields=['name', 'module', 'istable', 'issingle'],
                               limit=limit,
                               start=start,
                               order_by='modified desc')
    return doctypes
