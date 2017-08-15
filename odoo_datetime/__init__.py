# -*- encoding: utf-8 -*-
##############################################################################
#
#    DateTime module for Odoo
#    Copyright (C) 2016- Vishnu Arukat (http://www.vishnuarukat.github.io)
#    @author Vishnu Arukat (https://in.linkedin.com/in/vishnuarukat)
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
#
##############################################################################


def version_check(cr):
    from openerp.service import common
    from openerp.exceptions import Warning
    version_info = common.exp_version()
    server_series = version_info.get('server_serie')
    if server_series != '9.0': raise Warning('Module support Odoo series 9.0 found {}'.format(server_series))
    return True
