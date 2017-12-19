---
layout: post
title: Interesting APIs
category: 杂
tags:
  - 原创
  - api
date: 2016-12-06 00:16:36
create: 2016-04-24
---

## [翻译](https://glosbe.com/a-api)

`https://glosbe.com/gapi/{function-name}[?[{function-parameter1}={value}[&{function-parameter2}={value}[&{function-parameter3}={value}...]]]]`

### translate
Parameters

`https://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase=beautiful&pretty=true`

* from - (required) language of phrase to translate, values: ISO 693-3 three letter language code, no default, beware: if language is invalid you'll get server 500 error code in return
* dest - (required) destination language, values: ISO 693-3 three letter language code, no default
* phrase - (required) phrase to be translated, values: arbitrary text, no default, case sensitive
* tm - whether to include examples (make translation memories search), values: 'true' or 'false', default: 'false'
* format - described elsewhere
* callback - described elsewhere

### tm

Parameters

* from - (required) language of phrase to translate, values: ISO 693-3 three letter language code, no default
* dest - (required) destination language, values: ISO 693-3 three letter language code, no default
* phrase - (required) phrase to be searched in existing translated sentences, values: arbitrary text, no default
* page - page of results to be displayed, values: counted from 1, positive number lower than arbitrary limit - you cannot see results above 200 item, default: 1;
* pageSize - size of the result page, values: positive number lower or equal 30, default: 30
* format - described elsewhere
* callback - described elsewhere

## vocabulary

`https://corpus.vocabulary.com/api/1.0/examples.json?&query=hyperbole&maxResults=24&startOffset=0&filter=0`

* filter: fiction, arts/culture, news, business, sports, science\med, technology

`https://www.vocabulary.com/dictionary/`
