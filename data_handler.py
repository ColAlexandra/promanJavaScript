import persistence


def get_card_status(status_id):
    """
    Find the first status matching the given id
    :param status_id:
    :return: str
    """
    statuses = persistence.get_statuses()
    return next((status['title'] for status in statuses if status['id'] == str(status_id)), 'Unknown')


def get_users():
    all_users = persistence.get_users()
    return all_users


def get_user(name, password):
    persistence.clear_cache()
    all_users = persistence.get_users()
    for user in all_users:
        if user['name'] == str(name) and user['password'] == str(password):
            return user


def get_boards(name, password):
    """
    Gather all boards
    :return:
    """
    persistence.clear_cache()
    all_boards = persistence.get_boards()
    user = get_user(name, password)
    matching_boards = []
    for board in all_boards:
        if user['user_id'] == all_boards['user_id']:
            matching_boards.append(board)
    return matching_boards


def get_cards_for_board(board_id):
    persistence.clear_cache()
    all_cards = persistence.get_cards()
    matching_cards = []
    for card in all_cards:
        if card['board_id'] == str(board_id):
            card['status_id'] = get_card_status(card['status_id'])  # Set textual status for the card
            matching_cards.append(card)
    return matching_cards
