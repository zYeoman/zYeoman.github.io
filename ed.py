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
    print('''
    usage: ed.py [-h] [-r] [-R] [-a] PATTERN

    Edit file whose name contain provide string.

    positional arguments:
      PATTERN       Default: Edit file with PATTERN in name

    optional arguments:
      -h, h, show this help message and exit
      -o, o, output filename
      -t, t, touch file change its time
      -v, v, view file without change
      -r, r, remove file with PATTERN in name
      -R, R, rename file with PATTERN in name
      -a, a, add file
    ''')
def add(argv):
    head = ''.join(['---\n',
    'layout: {}\n',
    'title: title\n',
    'category:\n',
    'date: %Y-%m-%d\n',
    '---\n'])

    now = datetime.datetime.now()
    date = now.strftime('%Y-%m-%d')

    filename = date + '-{}.md'.format('-'.join(argv))
    head = head.format('post')

    if not os.path.exists(filename):
        with open(filename, 'w') as f:
            f.write(now.strftime(head))

    os.system('vim '+filename)

def determ_file(pattern, case=False):
    '''Determine which file to edit'''
    files = glob.glob('*.md')

    if not case:
        pattern = [p.lower() for p in pattern]

    edit_files = list(filter(lambda x: all(p in x.lower() for p in pattern), files))
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
    elif len(edit_files) == 1:
        return edit_files[index]
    else:
        return None

def touch(file_name):
    now = datetime.datetime.now()
    date = now.strftime('%Y-%m-%d')
    sed_msg = "sed -b -i '5s/[0-9]*-[0-9]*-[0-9]*/{}/' "
    os.system(sed_msg.format(date) + file_name)


# TODO 正则表达式支持
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
    elif '-v' in argv or 'v'==argv[0]:
        file_name = determ_file(argv[1:])
        os.system('vim -M ' + file_name)
    elif '-t' in argv or 't'==argv[0]:
        file_name = determ_file(argv[1:])
        touch(file_name)
    elif '-o' in argv or 'o'==argv[0]:
        file_name = determ_file(argv[1:])
        print(file_name)
    else:
        file_name = determ_file(argv)
        if file_name is not None:
            touch(file_name)
            os.system('vim ' + file_name)
        else:
            add(argv)
