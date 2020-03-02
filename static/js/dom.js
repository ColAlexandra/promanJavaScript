// It uses data_handler.js to visualize elements
import { dataHandler } from "./data_handler.js";

export let dom = {
    init: function () {
        // This function should run once, when the page is loaded.

    },
    loadBoard: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoard(1,function(board){
            dom.showBoard(board);
        });
    },
    showBoard: function (board) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        const outerHtml = `
        <p class ="single-board">
            ${board}
        </p>`;

        let boardContainer = document.querySelector('#single-board');
        boardContainer.insertAdjacentHTML("beforeend", outerHtml);
    },

    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(function(boards){
            dom.showBoards(boards);
        });
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also

        let boardList = '';

        for(let board of boards){
            boardList += `
                <li>${board.title}</li>
            `;
        }

        const outerHtml = `
            <ul class="board-container">
                ${boardList}
            </ul>
        `;

        let boardsContainer = document.querySelector('#boards');
        boardsContainer.insertAdjacentHTML("beforeend", outerHtml);
    },

    loadCards: function (boardId) {
        // retrieves cards and makes showCards called


    },
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    },
    // here comes more features
};
