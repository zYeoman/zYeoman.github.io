#!/usr/bin/python3
# encoding:utf-8
'''
Edit file whose name contain provide string.
'''

import os
import sys
import glob
import datetime

def help_msg():
    print('''usage: ed.py [-h] [-r] [-R] [-a] PATTERN

    Edit file whose name contain provide string.

    positional arguments:
      PATTERN       Default: Edit file with PATTERN in name

    optional arguments:
      -h, h, show this help message and exit
      -r, r, Remove file with PATTERN in name
      -R, R, Rename file with PATTERN in name
      -a, a, Add file
    ''')
def add(argv):
    head = '---\n'
    'layout: {}\n'
    'title: title\n'
    'category:\n'
    'date: %Y-%m-%d\n'
    '---\n'


    now = datetime.datetime.now()

    date = now.strftime('%Y-%m-%d')

    filename = date + '-{}.md'.format('-'.join(argv))
    head = head.format('post')

    if not os.path.exists(filename):
        with open(filename, 'w') as f:
            f.write(now.strftime(head))

    os.system('vim '+filename)

def determ_file(pattern):
    '''Determine which file to edit'''
    files = glob.glob('*.md')

    edit_files = list(filter(lambda x: all(p in x for p in pattern), files))
    index = 0

    if len(edit_files) > 1:
        for i, filename in enumerate(edit_files):
            print('{}: {}'.format(i, filename))
        index = input('Please select a file[0]: ')
        if index != '':
            index = int(index)
        else:
            index = 0
    return edit_files[index]

# TODO 正则表达式支持
# TODO 自动修改日期
if __name__ == '__main__':
    argv = sys.argv[1:]
    if len(argv) == 0 or '-h' in argv:
        help_msg()
    elif '-a' in argv or 'a'==argv[0]:
        add(argv[1:])
    elif '-r' in argv or 'r'==argv[0]:
        file_name = determ_file(argv[1:])
        answer = input('Delete {}?[y/N] '.format(file_name))
        if answer in 'yY':
            os.remove(file_name)
    elif '-R' in argv or 'R'==argv[0]:
        file_name = determ_file(argv[1:])
        answer = input('Rename {}?[y/N] '.format(file_name))
        if answer in 'yY':
            new_name = input('Input newname: ')
            new_name = file_name[:10] + '-{}.md'.format(new_name.replace(' ','-'))
            os.rename(file_name, new_name)
    else:
        file_name = determ_file(argv)
        os.system('vim ' + file_name)
