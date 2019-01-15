#! /usr/bin/env python
# -*- coding: utf-8 -*-
#
# Copyright © 2019 Yongwen Zhuang <zeoman@163.com>
#
# Distributed under terms of the MIT license.

"""
Serve Editor for Jekyll

"""

import glob
from flask import Flask, render_template, request
app = Flask(__name__, template_folder='editor',
            static_folder='editor')


@app.route('/')
def serve_index():
    files = glob.glob('_posts/*.md')
    return render_template('index.html', text='# Editor', files=files)


@app.route('/<filename>', methods=['POST', 'GET'])
def serve_file(filename=None):
    if request.method == 'POST':
        with open('_posts/' + filename, 'w') as f:
            if request.form.get('data', None) is not None:
                f.write(request.form['data'].replace('\r', ''))

    files = glob.glob('_posts/*.md')
    if filename is not None and filename.endswith('.md'):
        with open('_posts/' + filename, 'r') as f:
            return render_template('index.html', text=f.read(), files=files)
    else:
        return ""
