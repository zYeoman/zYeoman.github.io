#!/usr/bin/python3
# encoding:utf-8
'''
Edit file whose name contain provide string.
'''

import os
import re
import sys
import glob
import codecs
import datetime


def help_msg():
    """Print help message"""
    print('''
    usage: ed.py [hotvrRa] PATTERN

    Edit file whose name contain provide string.

    positional arguments:
      PATTERN       Default: Edit file with PATTERN in name

    optional arguments:
      -h, show this help message and exit
      o, output filename
      v, view file without change
      r, remove file with PATTERN in name
      R, rename file with PATTERN in name
      a, add file
    ''')


def add(argv):
    """Add new file"""
    categories = ['乱七八糟', '知识技巧', '折腾记录', '数学研究', '学习笔记']
    head = '---\nlayout: {}\n' \
        'title: {}\n' \
        'category: {}\n' \
        'date: %Y-%m-%d %H:%M:%S +0800\n' \
        'create: %Y-%m-%d %H:%M:%S +0800\n' \
        'tags: \n'\
        '  - \n'  \
        '---\n\n' \
        '- TOC\n' \
        '{{:toc}}'

    now = datetime.datetime.now()
    date = now.strftime('%Y-%m-%d')

    filename = '_posts' + os.path.sep + date + '-{}.md'.format('-'.join(argv))

    for num, category in enumerate(categories):
        print('{}: {}'.format(num, category))

    index = input('Please select a category[0]: ')

    if index != '':
        index = int(index)
    else:
        index = 0

    title = input('Input title: ')

    if not os.path.exists(filename):
        with codecs.open(filename, 'w', 'utf-8') as file_write:
            file_write.write(now.strftime(head).format('post',
                                                       title,
                                                       categories[index]))

    os.system('vim "' + filename + '"')


def determ_file(patterns, case=re.I):
    '''Determine which file to edit'''
    files = glob.glob('_posts' + os.path.sep + '*.md')
    pattern = '.*'.join(patterns)

    edit_files = list(filter(lambda x: re.findall(pattern, x, case), files))

    index = 0

    if len(edit_files) > 1:
        for i, filename in enumerate(edit_files):
            print('{}: {}'.format(i, filename))
        index = input('Please select a file[0]: ')
        if index != '':
            index = int(index)
        else:
            index = 0
        return '"' + edit_files[index] + '"'
    elif len(edit_files) == 1:
        return '"' + edit_files[index] + '"'
    else:
        return None


def main(argv):
    """Main function"""
    if not argv or '-h' in argv:
        help_msg()
    elif argv[0] == 'a':
        add(argv[1:])
    elif argv[0] == 'r':
        file_name = determ_file(argv[1:])
        answer = input('Delete {}?[y/N] '.format(file_name))
        if answer in 'yY':
            os.remove(file_name)
    elif argv[0] == 'R':
        file_name = determ_file(argv[1:])
        answer = input('Rename {}?[y/N] '.format(file_name))
        if answer in 'yY':
            new_name = input('Input newname: ')
            new_name = file_name[:10] + '-{}.md'.format(
                new_name.replace(' ', '-'))
            os.rename(file_name, new_name)
    elif argv[0] == 'v':
        file_name = determ_file(argv[1:])
        os.system('vim -M ' + file_name)
    elif argv[0] == 'o':
        file_name = determ_file(argv[1:])
        print(file_name)
    else:
        file_name = determ_file(argv)
        if file_name is not None:
            os.system('vim ' + file_name)
        else:
            add(argv)


if __name__ == '__main__':
    main(sys.argv[1:])
