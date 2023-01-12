# coding:utf-8

from flask import Flask, request, redirect, url_for, abort, \
    make_response, jsonify, session, render_template, Markup, flash
from form import LoginForm

app = Flask(__name__)

app.secret_key = 'secret string'


@app.route('/')
@app.route('/hello')
@app.route('/hi')
def index():
    flash('I am flash, who is looking for me?')
    # return '<h1>Hello Flask!</h1>'
    # return '<h1>Hello Flask!</h1>', 201
    # return redirect('http://www.baidu.com')
    status = ''
    if 'logged_in' in session:
        status = '[Authenticated]'
    else:
        status = '[Not Authenticated]'
    # return redirect(url_for('greet'))
    return render_template('index.html', status=status)


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


@app.route('/json')
def json():
    return jsonify({
        'name': 'alan',
        'age': 20,
        'gender': 1,
        'email': '123@11.com'
    }), 201


@app.route('/cookie/<string:name>')
def cookie(name):
    response = make_response(redirect(url_for('index')))
    response.set_cookie('name', name)
    return response


@app.route('/login', methods=['GET', 'POST'])
def login():
    session['logged_in'] = True
    form = LoginForm()
    return render_template('login.html', form=form)


@app.route('/logout')
def logout():
    if 'logged_in' in session:
        session.pop('logged_in')
    return redirect(url_for('index'))


@app.route('/watchlist')
def watchlist():
    user = {
        'username': '张三',
        'bio': '一个喜欢看电影的男孩.'
    }
    movies = [
        {'name': '肖申克的救赎', 'year': 1994},
        {'name': '霸王别姬', 'year': 1993},
        {'name': '阿甘正传', 'year': 1994},
        {'name': '泰坦尼克号', 'year': 1997},
        {'name': '这个杀手不太冷', 'year': 1994}
    ]
    return render_template('watchlist.html', user=user, movies=movies)


# 模板上下文处理函数
@app.context_processor
def inject_foo():
    foo = 'I am foo'
    return dict(fooValue=foo)


# 模板全局函数
@app.template_global()
def bar():
    return 'i am bar.'


# 注册自定义过滤器
@app.template_filter()
def musical(s):
    return s + Markup(' &#9835;')


# 自定义错误页面
@app.errorhandler(404)
def page_not_found(e):
    return render_template('errors/404.html'), 404
