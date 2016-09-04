#!/usr/bin/python
# encoding:utf-8
'''
ed.py string
Edit file whose name contain provide string.
'''

import os
import sys
import glob

def main():
    '''main function'''
    if len(sys.argv) == 1:
        exit()

    files = glob.glob('*.md')

    edit_files = list(filter(lambda x: sys.argv[1] in x, files))

    if len(edit_files) == 1:
        os.system('vim ' + edit_files[0])
    else:
        for i, filename in enumerate(edit_files):
            print('{}: {}'.format(i, filename))
        index = input('Please select a file[0]: ')
        if index == '':
            index = 0
        else:
            index = int(index)
        os.system('vim ' + edit_files[index])

# TODO 正则表达式支持
# TODO argparse
# TODO 自动修改日期
if __name__ == '__main__':
    main()
