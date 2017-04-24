---
layout: post
title: 周刊魔法道具与咒语：第 IV 辑—VIM
category: 知识库
date: 2017-04-24
create: 2017-04-21 20:41:15
---

## vim

### 自动安装 vim-plug

```vim
let vimplug_path=expand('~/.vim/autoload/plug.vim')
if !filereadable(vimplug_path)
    echo "Installing vim-plug"
    echo ""
    silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
        \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
endif
```

## vim 插件

```vim
" ============================================================================
" Active plugins
" You can disable or add new ones here:

" Plugins from github repos:

call plug#begin('~/.vim/plugged')
" 我自己的一些默认设置
Plug 'zyeoman/vim-better-default'
" 新文件模板
Plug 'aperezdc/vim-template'
" vim8 异步运行
Plug 'skywind3000/asyncrun.vim'
" TAB 自动完成，运行<c-n>
Plug 'ervandew/supertab'
" 更多的主题
Plug 'flazz/vim-colorschemes'
" 文件管理（其实我不用，主要还是用：Vexplore
Plug 'scrooloose/nerdtree'
" 注释工具，使用 gcc 注释
Plug 'scrooloose/nerdcommenter'
" Class/module browser
Plug 'majutsushi/tagbar'
" 代码、文件模糊搜索
Plug 'kien/ctrlp.vim'
" Ctrlp 增强，命令模糊搜索
Plug 'fisadev/vim-ctrlp-cmdpalette'
" Zen coding
Plug 'mattn/emmet-vim'
" GIT
Plug 'tpope/vim-fugitive'
" Tab list panel
Plug 'kien/tabman.vim'
" Airline
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
" Consoles as buffers
" REPL，使用：ConqueTerm bash
" :ConqueTerm mysql -h localhost -u joe -p sock_collection
" :ConqueTerm Powershell.exe
" :ConqueTerm C:\Python27\python.exe
" 特别好用！！！
Plug 'rosenfeld/conque-term'
" eclipse 的任务列表，查看 TODO、FIXME 等
Plug 'fisadev/FixedTaskList.vim'
" 下面两个是用于括号引号的自动完成和编辑
" Surround
Plug 'tpope/vim-surround'
" Autoclose
Plug 'Townk/vim-autoclose'
" Indent text object
Plug 'michaeljsmith/vim-indent-object'
" Python mode (indentation, doc, refactor, lints, code checking, motion and
" operators, highlighting, run and ipdb breakpoints)
Plug 'klen/python-mode'
" Better autocompletion
Plug 'Shougo/neocomplcache.vim'
" Snippets manager (SnipMate), dependencies, and snippets repo
Plug 'MarcWeber/vim-addon-mw-utils'
Plug 'tomtom/tlib_vim'
Plug 'honza/vim-snippets'
" Track the engine.
Plug 'SirVer/ultisnips'
" Git/mercurial/others diff icons on the side of the file lines
Plug 'mhinz/vim-signify'
" Automatically sort python imports
Plug 'fisadev/vim-isort'
" Drag visual blocks arround
Plug 'fisadev/dragvisuals.vim'
" Window chooser
" 使用 - 键选择窗口
Plug 't9md/vim-choosewin'
" Python and other languages code checker
Plug 'scrooloose/syntastic'
" Paint css colors with the real color
Plug 'lilydjwg/colorizer'
" Relative numbering of lines (0 is the current line)
" (disabled by default because is very intrusive and can't be easily toggled
" on/off. When the plugin is present, will always activate the relative
" numbering every time you go to normal mode. Author refuses to add a setting
" to avoid that)
" Plug 'myusuf3/numbers.vim'

" javascript complete after install the plugin, you must cd the install
" directory and run `npm install`, then add a .tern-project config file
" the doc at http://ternjs.net/doc/manual.html#vim
Plug 'marijnh/tern_for_vim'
" Golang Plugs
Plug 'fatih/vim-go'
" JSX syntax highlight.
Plug 'mxw/vim-jsx'
" Markdown syntastic highlight
Plug 'godlygeek/tabular'
Plug 'plasticboy/vim-markdown'
" Markdown realtime preview
" Before you want to use it, please run
" `sudo npm -g install instant-markdown-d`
Plug 'suan/vim-instant-markdown'
" Handlebars syntax highlighting
Plug 'mustache/vim-mustache-handlebars'
" Vue.js syntax and highlighting
Plug 'tao12345666333/vim-vue'
" True Sublime Text style multiple selections for Vim
Plug 'terryma/vim-multiple-cursors'

" Plugs from vim-scripts repos:

" Search results counter
Plug 'IndexedSearch'
" XML/HTML tags navigation
Plug 'matchit.zip'
" Gvim colorscheme
Plug 'Wombat'
" Yank history navigation
Plug 'YankRing.vim'
" 盘古中文排版自动化
Plug 'hotoo/pangu.vim'
" Expand v 连点 v 扩展选择
Plug 'terryma/vim-expand-region'
" Comment gc
Plug 'tpope/vim-commentary'
" Readline 风格快捷键
Plug 'tpope/vim-rsi'
" 中文 Doc
Plug 'vimcn/vimcdoc'

call plug#end()
```
