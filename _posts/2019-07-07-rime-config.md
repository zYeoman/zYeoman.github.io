---
layout: post
title: 小狼毫RIME输入法配置
category: 用
date: 2019-07-07 12:41:15 +0800
create: 2019-07-07 11:29:57 +0800
tags: 
  - 配置
  - 工具
---

- TOC
{:toc}

![img.jpg](https://i.loli.net/2019/07/07/5d2168e84535996791.jpg)

[小狼毫/鼠须管/中州韵](https://rime.im/)之大名，我早有耳闻。（不过这种一个RIME输入引擎，不同的系统上（Windows/OSX/Linux）起不同名字的做法有点奇怪。）之前就试用过一段时间，嗯，一小段时间：感觉是各种不方便，当时在windows下安装还会显示有两个输入法。最近一段时间又想起来了这回事，就下定决心弄一个能用的配置。废话不多说，直接上配置代码！[Git](https://github.com/zYeoman/Rime)

Windows下配置文件位置在 `%APPDATA%/Rime`。具体配置文件定义在[这里](https://github.com/rime/home/wiki/UserData)，各个选项定义在[这里](https://rime-aca.tumblr.com/post/67241713724/rime%E6%96%B9%E6%A1%88%E8%A3%BD%E4%BD%9C%E8%A9%B3%E8%A7%A3)。（官方wiki有点乱）
{: .notice}

## 定制内容
* TSF格式输入法（即输入行在行内）
  * 删除空格分割
* 魔改版brisk主题
* 内置Emoji输入 
    ![hua](https://i.loli.net/2019/07/07/5d216b9884e4584360.jpg)
* 内置英语输入（使用COCA20000词库[1])
    ![english](https://i.loli.net/2019/07/07/5d216c72bec9418826.jpg)    
* 各种短语输入（这是小狼毫自带的）
  * `vv` - 输入颜文字。`(￣∇￣)`
  * `/man` - 显示帮助
  * 各种其他短语。

## 配置
### default.custom.yaml
```yaml
customization:
  distribution_code_name: Weasel
  distribution_version: 0.14.3
  generator: "Rime::SwitcherSettings"
  modified_time: "Sat Jul  6 14:36:21 2019"
  rime_version: 1.5.3
patch:
  "ascii_composer/switch_key":
    Caps_Lock: noop
    Control_L: noop
    Control_R: noop
    # Shift自动上屏
    Shift_L: commit_code
    Shift_R: commit_code
  # 候选字个数
  "menu/page_size": 7
  # 输入方案。其实只用luna_pinyin_simp即可
  schema_list:
    - {schema: luna_pinyin_simp}
    - {schema: 20k_en}
  # 切换输入方案快捷键。没啥用。
  "switcher/hotkeys":
    - "Control+Alt+0"
```

### weasel.custom.yaml
```yaml
customization:
  distribution_code_name: Weasel
  distribution_version: 0.14.3
  generator: "Weasel::UIStyleSettings"
  modified_time: "Sat Jul  6 22:01:59 2019"
  rime_version: 1.5.3
patch:
  style:
    # 外观设定。
    layout:
      border: 0
      border_height: 0
      border_width: 0
      margin_y: 6
    color_scheme: brisk
    # 貌似没啥用
    corner_radius: 1
    # 字体设定
    font_point: 13
    font_face: "Segoe UI"
    # 横行显示候选字
    horizontal: true
    # TSF格式，字母输入到input里
    inline_preedit: true
    # 下面三条没啥用
    line_spacing: 5
    spacing: 10
    display_tray_icon: false
  # 修改主题
  "preset_color_schemes/brisk/border_color": 0xcfcfcf
```

### luna_pinyin_simp.custom.yaml
```yaml
# 输入方案配置
patch:
  # 载入自定义词库表
  translator:
    dictionary: mickir
    enable_sentence: false
    # 把preedit里的 ' 删除
    preedit_format:
      - "xform/'//"
  # preedit分隔符改成 '
  "speller/delimiter": "'"
  # 默认英文
  "switches/@0/reset": 1  #表示将 switcher 列表中的第一个元素（即 ascii_mode 开关）的初始值重设为状态1（即“英文”）。
  
   # 20k_en设置（这里下载了easy_en.schema.yaml 和 easy_en.dict.yaml以后，可以换成easy_en）
  "schema/dependencies/@next": 20k_en
  # 載入翻譯英文的碼表翻譯器，取名爲 english
  "engine/translators/@next": table_translator@english
  # english 翻譯器的設定項 
  english:
    dictionary: 20k_en
    spelling_hints: 9
    # 自动完成
    enable_completion: true
    enable_sentence: false
    # 候选词排名优先级，还是不太满意
    initial_quality: 0
    # 删除候选字里的自动完成提示（没有用，因为效果是输入eng以后，提示:english ~lish）
    comment_format: 
      - "xform/[~a-z]*//"

  # Emoji支持
  # 切换Emoji
  "switches/@next":
    name: emoji_suggestion
    reset: 1
    states: [ "🈚️️\uFE0E", "🈶️️\uFE0F" ]
  # 增加Emoji过滤器
  "engine/filters/@before 0":
    simplifier@emoji_suggestion
  # 使用opencc（即简繁转换）的方式实现emoji输入，可以理解为简-emoji转换。
  emoji_suggestion:
    opencc_config: emoji.json
    option_name: emoji_suggestion
    # 设置为all会显示tips，其他任何值都不会显示。
    tips: none

  simplifier:
    option_name: zh_simp

  # 不懂，也许有啥用。
  recognizer:
    patterns:
      email: "^[A-Za-z][-_.0-9A-Za-z]*@.*$"
      uppercase: "[A-Z][-_+.'0-9A-Za-z]*$"
      url: "^(www[.]|https?:|ftp[.:]|mailto:|file:).*$|^[a-z]+[.].+$"
      # 简写用
      punct: "^/([a-z]+|[0-9]0?)$"
  
  # 改寫拼寫運算，使得含西文的詞彙（位於 luna_pinyin.cn_en.dict.yaml 中）不影響簡拼功能（注意，此功能只適用於朙月拼音系列方案，不適用於各類雙拼方案）
  # 本條補靪只在「小狼毫 0.9.30」、「鼠鬚管 0.9.25 」、「Rime-1.2」及更高的版本中起作用。
  # "speller/algebra/@before 0": xform/^([b-df-hj-np-tv-z])$/$1_/

  punctuator:
    # 载入默认symbols.yaml，可以替换成mysymbols.yaml
    import_preset: symbols
    half_shape:
      "#": "#"
      "`": "`"
      "~": "~"
      "@": "@"
      "=": "="
      "/": ["/", "÷"]
      '\': ["、", '\']
      "'": {pair: ["「", "」"]}
      "[": ["【", "["]
      "]": ["】", "]"]
      "$": ["¥", "$", "€", "£", "¢", "¤"]
      "<": ["《", "〈", "«", "<"]
      ">": ["》", "〉", "»", ">"]
    symbols:
      "/fs": [½,‰,¼,⅓,⅔,¾,⅒]
      "/dq": [🌍,🌎,🌏,🌐,🌑,🌒,🌓,🌔,🌕,🌖,🌗,🌘,🌙,🌚,🌛,🌜,🌝,🌞,⭐,🌟,🌠,⛅,⚡,❄,🔥,💧,🌊]
      "/jt": [⬆,↗,➡,↘,⬇,↙,⬅,↖,↕,↔,↩,↪,⤴,⤵,🔃,🔄,🔙,🔚,🔛,🔜,🔝]
      "/sg": [🍇,🍈,🍉,🍊,🍋,🍌,🍍,🍎,🍏,🍐,🍑,🍒,🍓,🍅,🍆,🌽,🍄,🌰,🍞,🍖,🍗,🍔,🍟,🍕,🍳,🍲,🍱,🍘,🍙,🍚,🍛,🍜,🍝,🍠,🍢,🍣,🍤,🍥,🍡,🍦,🍧,🍨,🍩,🍪,🎂,🍰,🍫,🍬,🍭,🍮,🍯,🍼,🍵,🍶,🍷,🍸,🍹,🍺,🍻,🍴]
      "/dw": [🙈,🙉,🙊,🐵,🐒,🐶,🐕,🐩,🐺,🐱,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🐈,🐯,🐅,🐆,🐴,🐎,🐮,🐂,🐃,🐄,🐷,🐖,🐗,🐽,🐏,🐑,🐐,🐪,🐫,🐘,🐭,🐁,🐀,🐹,🐰,🐇,🐻,🐨,🐼,🐾,🐔,🐓,🐣,🐤,🐥,🐦,🐧,🐸,🐊,🐢,🐍,🐲,🐉,🐳,🐋,🐬,🐟,🐠,🐡,🐙,🐚,🐌,🐛,🐜,🐝,🐞,🦋]
      "/bq": [😀,😁,😂,😃,😄,😅,😆,😉,😊,😋,😎,😍,😘,😗,😙,😚,😇,😐,😑,😶,😏,😣,😥,😮,😯,😪,😫,😴,😌,😛,😜,😝,😒,😓,😔,😕,😲,😷,😖,😞,😟,😤,😢,😭,😦,😧,😨,😬,😰,😱,😳,😵,😡,😠]
      "/ss": [💪,👈,👉,👆,👇,✋,👌,👍,👎,✊,👊,👋,👏,👐]
      "/dn": [⌘, ⌥, ⇧, ⌃, ⎋, ⇪, , ⌫, ⌦, ↩︎, ⏎, ↑, ↓, ←, →, ↖, ↘, ⇟, ⇞]
      "/fh": [©,®,℗,ⓘ,℠,™,℡,␡,♂,♀,☉,☊,☋,☌,☍,☑︎,☒,☜,☝,☞,☟,✎,✄,♻,⚐,⚑,⚠]
      "/xh": [＊,×,✱,★,☆,✩,✧,❋,❊,❉,❈,❅,✿,✲]
      "/man": [ 符號：/fh, 單位：/dw, 標點：/bd, 數學：/sx, 拼音：/py, 星號：/xh, 方塊：/fk, 幾何：/jh, 箭頭：/jt, 電腦：/dn, 羅馬數字：/lm, 大写羅馬數字：/lmd, 拉丁：/ld, 上標：/sb, 下標：/xb, 希臘字母：/xl, 大写希臘字母：/xld, 數字：/0到/9, 分數：/fs, いろは順：/iro, 假名：/jm或/pjm或/jmk到/jmo, 假名+圈：/jmq, 假名+半角：/jmbj, 俄語：/ey, 大写俄語：/eyd, 韓文：/hw, 韓文+圈：/hwq, 韓文+弧：/hwh, 結構：/jg, 偏旁：/pp, 康熙（部首）：/kx, 筆畫：/bh, 註音：/zy, 聲調：/sd, 漢字+圈：/hzq, 漢字+弧：/hzh, 數字+圈：/szq, 數字+弧：/szh, 數字+點：/szd, 字母+圈：/zmq, 字母+弧：/zmh, 表情：/bq, 音樂：/yy, 月份：/yf, 日期：/rq, 曜日：/yr, 時間：/sj, 天干：/tg, 地支：/dz, 干支：/gz, 節氣：/jq, 象棋：/xq, 麻將：/mj, 色子：/sz, 撲克：/pk, 八卦：/bg, 八卦名：/bgm, 六十四卦：/lssg, 六十四卦名：/lssgm, 太玄經：/txj, 天體：/tt, 星座：/xz, 星座名：/xzm, 十二宮：/seg, 蘇州碼：/szm ]
```

### mickir.dict.yaml - 我的词库
```yaml
# Rime dictionary
# encoding: utf-8
#

---
name: mickir
version: "2019-07-05"
sort: by_weight
use_preset_vocabulary: true
import_tables:
  - luna_pinyin
  - luna_pinyin.extended
  # - luna_pinyin.extended/luna_pinyin.english
  # 以下两个通用扩展词库任选其一启用即可
  #- luna_pinyin.extended/luna_pinyin.practical      #A.挺全面的基本词库，含很丰富基本词条和组句语料，成语、俗语、诗词、人名词条不多。40w
  - luna_pinyin.extended/luna_pinyin.comprehensive   #B.很全面的一般性综合词库，除基本词条还包含文、史、餐、饮、医、药、生、化、金融、人名等等。80w
  # 分类扩展词库
  - luna_pinyin.extended/luna_pinyin.basis     #精选的基本词库，搜集于拼音加加、小麥、新酷音、維基百科等。
  - luna_pinyin.extended/luna_pinyin.city_beijing      # 北京地理信息词库，包含北京的常用地名
  # - luna_pinyin.extended/luna_pinyin.city_chongqing    # 重庆地理信息词库，包含重庆的常用地名
  - luna_pinyin.extended/luna_pinyin.universities      # 国内高校名称词库
  - luna_pinyin.extended/luna_pinyin.hanyu  #汉语大词典，多为2字词。 2.2w
  - luna_pinyin.extended/luna_pinyin.poetry #常用诗词，来源于唐宋诗词、千家詩、花間集、楚辭、詩經。 2.6w
  # - luna_pinyin.extended/luna_pinyin.cn_en    #中英混合词条，含如哆啦A梦之类的词条，目前词库很小。  
  - luna_pinyin.extended/luna_pinyin.net    #网络流行词，网上聊天常用的语句。3.6w
  #- luna_pinyin.extended/luna_pinyin.gd   #粤语词库，广东人必备。1.2w
  # - luna_pinyin.extended/luna_pinyin.game  #游戏词库、单机/网游及相关词条。7k
  #- luna_pinyin.extended/luna_pinyin.moba   #Moba游戏用词，含LOL和DOTA及它的亲爹—魔兽的词条。5k
  # - luna_pinyin.extended/luna_pinyin.game_wow          # 魔兽世界词库
  - luna_pinyin.extended/luna_pinyin.computer_science  #电脑词汇，计算机科学相关，普通应用足够
  - luna_pinyin.extended/luna_pinyin.history   #历史词库，囊扩中国古代史、近代史、现代史和世界历史。10w
  - luna_pinyin.extended/luna_pinyin.name    #人名词库，含中外名人。1w
  - luna_pinyin.extended/luna_pinyin.idiom   #俗语，如题，含常用俗语，文青必备。6.6w
  - luna_pinyin.extended/luna_pinyin.classical  #成语，含常用成语、文青标配。2.8w
  - luna_pinyin.extended/luna_pinyin.diet   #饮食词汇大全，吃货必备。 15w
  - luna_pinyin.extended/luna_pinyin.anime   #动漫词汇大全，动画、主要角色、声优等等。3w
  - luna_pinyin.extended/luna_pinyin.chat   #日常聊天常用词，请叫我聊天达人。3.5k
  - luna_pinyin.extended/luna_pinyin.daily   #日常生活用词，衣、食、住、行、地放、称呼等等。31w
  #- luna_pinyin.extended/luna_pinyin.movie   #电影相关词汇，片名、演员、导演神马的。1.3w
  #- luna_pinyin.extended/luna_pinyin.music   #音乐相关词汇，歌曲、制作人、歌星之类的。2w
  - luna_pinyin.extended/luna_pinyin.biaoqing  #颜表情，ಠ_ಠ、(｡>ㅅ<｡)、(☍﹏⁰)、(￣_￣|||)..     0.2k
  - luna_pinyin.extended/luna_pinyin.website   #网站大全，百度、知乎神马的。5k
  - luna_pinyin.extended/luna_pinyin.extra_hanzi   #异体字，日文汉字
...

我的名字

```

### 参考配置
* [https://github.com/ASC8384/myRime](https://github.com/ASC8384/myRime)
* [https://github.com/scomper/Rime](https://github.com/scomper/Rime)
* [https://www.r1ng.net/archives/shu-xu-guan-de-diao-jiao-bi-ji.html](https://www.r1ng.net/archives/shu-xu-guan-de-diao-jiao-bi-ji.html)

[1]: https://github.com/mahavivo/english-wordlists/