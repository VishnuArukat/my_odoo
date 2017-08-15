# -*- coding: utf-8 -*-
{
    'name': "Odoo DateTime",
    'summary': """
        Adds ability to use datetime in xml for defining the color in the tree view.""",
    'description': """
        This module extends the listview and the treeview to add the new comparator to it.
    """,

    'author': "Vishnu Arukat",
    'website': "https://in.linkedin.com/in/vishnuarukat",
    'license': 'AGPL-3',

    'category': 'Extra Tools',
    'version': '1.0',
    'depends': [],
    'data': [
        'views/assets.xml',
    ],
    'pre_init_hook': 'version_check',
    'demo': [
    ],
    'installable': True,
    'auto_install': False,
}
