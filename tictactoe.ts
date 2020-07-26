class Board {
    //Build an empty board with the creation of this object
    public constructor(size: number) {
        let row: Array<number> = [];
        this.board_state = [];

        for (let i = 0; i < size; i++) {
            row.push(0);
        }

        for (let i = 0; i < size; i++) {
            this.board_state.push(row);
        }
    }

    public update_state() {

    }

    //Return the number of empty spaces on the board
    public get_empty_spaces() {
        let empty: number = 0;
        let available_moves: Array<Array<number>> = [];

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.board_state[row][col] === 0) {
                    available_moves.push([row, col]);
                }
            }
        }
        return available_moves;
    }

    //Add a player's mark to the board
    public make_move(row: number, col: number, player_marker: number) {
        this.board_state[0][0] = player_marker;
        return this;
    }

    //Draw the current state of the board
    public draw_board() {

    }

    private board_state: Array <Array <number>>;
};

class Node { 
    public search_breadth: number = 0;
    public available_moves: Array<Array<number>>;

    public constructor(board: Board) {
        //Get the total available moves off the board in terms of [row,col] and number
        this.available_moves = board.get_empty_spaces();
        this.search_breadth = this.available_moves.length;

        
    }

    private child_nodes: Array<object> = [];
};