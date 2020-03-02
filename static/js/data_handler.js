// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
export let dataHandler = {
    _data: {}, // it contains the boards and their cards and statuses and users. It is not called from outside.
    _api_get: function (url, callback) {
        // it is not called from outside
        // loads data from API, parses it and calls the callback with it

        fetch(url, {
            method: 'GET',
            credentials: 'same-origin'
        })
        .then(response => response.json())  // parse the response as JSON
        .then(json_response => callback(json_response));  // Call the `callback` with the returned object
    },
    _api_post: function (url, data, callback) {
        // it is not called from outside
        // sends the data to the API, and calls callback function

        fetch(url, {
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(data),

        })
            .then(response => response.json())
            .then(json_response => callback(json_response))
            .catch(() => {console.error('Something goes wrong');});
    },

    registerUser: function (name, password) {
        //adding user to db
        let dupa = randomUserId(name, password);
        this._api_post('/register', this._data) => {
            this._data = users;


        })
    },

    randomUserId: function (name, password) {
        //create random id, check if random id exist, if exist, generate the new one
        let users = this._data;
        let usersId = [];
        for (let user in users){
            usersId.push(user.user_id)
        }

        do {
            let randomId = () => {
                let id = '';
                const idLength = 8;
                const char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                for (let i =0; i < idLength; i++) {
                    id += char_list.charAt(Math.floor(Math.random()*char_list.length));
                }
                return id;
            };
        }
        while(usersId.forEach(userId => userId ==! id));

        for (let user in users) {

            if (user.name == name && user.password == password) {
                user.user_id = id;
            }
        }

    },

    checkPasswordsMatch : function (callback) {
        let users = this._data;



    },

    usernameExist: function (name, callback) {
        //check if username exist
    },

    encryptedPassword: function (password, callback){
        //hashing password
    },
    // ?? what is this? init: function () {
    // },
    decryptedPassword: function () {

    },

    loginUser: function (name, password, callback) {
        //login user on his own user page
    },




    getBoards: function (callback) {
        // the boards are retrieved and then the callback function is called with the boards

        // Here we use an arrow function to keep the value of 'this' on dataHandler.
        //    if we would use function(){...} here, the value of 'this' would change.
        this._api_get('/get-boards', (boards) => {
            this._data = boards;
            callback(boards);
        });
    }

    getBoard: function ( boardId, callback) {
        // the board is retrieved and then the callback function is called with the board
        this._api_get('/get-boards', (board) => {
            const boards = this._data;
        for (let i = 0; i < boards.length; i++) {
            if (boards[i].id == boardId) {
                board = boards[i].title;
                            }
        }

            callback(board)
        });
    }

    getStatuses: function (callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
    },
    getStatus: function (statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
    },
    getCardsByBoardId: function (boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
    },
    getCard: function (cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
    },
    createNewBoard: function (boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
    },
    createNewCard: function (cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
    }
    // here comes more features
};
