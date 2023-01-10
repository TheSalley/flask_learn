# flask learn

## 1、简介

学习《Flask Web开发实战》

Flask 有两个主要依赖：

+ WSGI（Web Server Gateway Interface）
+ Jinjia2 模板引擎

## 2、pipenv

```python
pipenv install

pipenv shell

pipenv run
```

## 3、服务器启动

```python
set FLASK_ENV=development
set FLASK_DEBUG=1
```

## 4、Flask 中的上下文

+ 程序上下文
+ 请求上下文

## 5、HTTP

Hypertext Transfer Protocol（超文本传输协议）

报文：
    浏览器与服务器之间交互的数据。
    请求时浏览器发送的数据被称为请求报文；
    服务器响应的数据叫做响应报文。

请求报文包括：请求的方法、URL、协议版本、首部字段(header)、内容实体组成。

响应报文由协议版本、状态码、原因短语、响应首部、响应主体组成

## 6、Flask 内置的URL 变量转换器

| 转换器    | 说明            |
|--------|---------------|
| string | 不包含斜线的字符串     |
| int    | 整形            |
| float  | 浮点数           |
| path   | 包含斜线的字符串      |
| any    | 匹配一系列给定值的某个元素 |
| uuid   | UUID字符串       |

## 7、请求钩子

| 钩子                   | 说明                                                      |
|----------------------|---------------------------------------------------------|
| before_first_request | 注册一个函数，在处理第一个请求前运行                                      |
| before_request       | 注册一个函数，在处理每个请求运行                                        |
| after_request        | 注册一个函数，如果没有未处理的异常抛出，会在每个请求结束后运行                         |
| teardown_request     | 注册一个函数，即使有未处理的异常抛出，也会在每个请求结束后与逆行。有异常的话会将异常对象作为参数传给注册的函数 |
| after_this_request   | 在视图函数内注册一个函数，会在这个请求结束后运行                                |

after_request 钩子和after_this_request 钩子必须接收一个响应类对象作为参数，并且返回同一个或更新后的响应对象。

