from flask import request, Flask, render_template, url_for
from util import json_response

import data_handler

app = Flask(__name__)


@app.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('index.html')


@app.route("/register", methods=['GET', 'POST'])
@json_response
def register():
    if request.method == 'GET':
        return data_handler.get_users()
    if request.method == 'POST':
        user = {'name': request.form['name'],
                'password': request.form['password'],
                'password2': request.form['password2']}

        return user

# @app.route('/login')
# @json_response
# def show_account(name, password):
#     return data_handler.get_user(name, password)


@app.route("/get-boards")
@json_response
def get_boards():
    """
    All the boards
    """
    return data_handler.get_boards()


@app.route("/get-cards/<int:board_id>")
@json_response
def get_cards_for_board(board_id: int):
    """
    All cards that belongs to a board
    :param board_id: id of the parent board
    """
    return data_handler.get_cards_for_board(board_id)


@app.route("/")
def logout():
    return render_template('index.html')


def main():
    app.run(debug=True)

    # Serving the favicon
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon/favicon.ico'))


if __name__ == '__main__':
    main()
