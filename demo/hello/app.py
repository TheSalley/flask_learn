# coding:utf-8

from flask import Flask, request, redirect, url_for, abort, \
    make_response, jsonify

app = Flask(__name__)


@app.route('/')
@app.route('/hello')
@app.route('/hi')
def index():
    # return '<h1>Hello Flask!</h1>'
    # return '<h1>Hello Flask!</h1>', 201
    # return redirect('http://www.baidu.com')
    return redirect(url_for('greet'))


@app.route('/greet', defaults={'name': 'nobody'})
@app.route('/greet/<name>')
def greet(name):
    return f'<h1>Hello, {name}!</h1>'


# 等同于
@app.route('/greet1')
@app.route('/greet1/<name>')
def greet1(name='nobody'):
    return f'<h1>Hi, {name}!</h1>'


@app.route('/user')
def user():
    name = request.args.get('name', '默认值')
    return f'<h1>{name}</h1>'


@app.route('/method', methods=['GET', 'POST'])
def method():
    return '<h1>Method</h1>'


@app.route('/goback/<int:year>')
def goback(year):
    return f'<p>Welcome to {year} !</p>'


@app.route('/colors/<any(red, yellow, blue):color>')
def three_color(color):
    return f'<p>{color}</p>'


# 手动返回错误响应
@app.route('/404')
def not_found():
    abort(404)


# 生成其他MIME 类型
@app.route('/foo')
def foo():
    res = make_response('hello, foo')
    res.mimetype = 'text/plain'
    return res

2.33
