const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

class Tictactoe {
    constructor() { 
        this.board = [['-','-','-'],['-','-','-'],['-','-','-']];
    }
 // This prints the current state of the board on the console 
    showBoard() { 
        this.board.forEach((row) => { console.log(row); });
    }

    async start(){
        let player = "X";
        let counter = 0;

        while(true){
            console.log(`Player ${player} turn`);
            this.showBoard();
            const value = await prompt("Enter Row Number and Column number like (0,0):");
            if(value == ""){
                console.log("Invalid Input")
            } else{
                counter = counter+1;
                let a = value.split(",")[0]
                let b = value.split(",")[1]
                this.board[a][b] = player;
                if(player == 'X'){
                    player = '0'
                }else if(player == '0'){
                    player = 'X'
                }
                let matrix = this.board
                let arr = [
                    [matrix[0][0],matrix[0][1],matrix[0][2]],
                    [matrix[0][0],matrix[1][0],matrix[2][0]],
                    [matrix[0][1],matrix[1][1],matrix[2][1]],
                    [matrix[0][2],matrix[1][2],matrix[2][2]],
                    [matrix[1][0],matrix[1][1],matrix[1][2]],
                    [matrix[2][0],matrix[2][1],matrix[2][2]],
                    [matrix[0][0],matrix[1][1],matrix[2][2]],
                    [matrix[0][2],matrix[1][1],matrix[2][0]],
                ]

                if(counter>5){
                    for(let i=0;i<arr.length;i++){
                        for(let j=0;j<arr[i].length;j++){
                            if(arr[i][0] == arr[i][1]){
                                if((arr[i][1] == arr[i][2]) && arr[i][1] !== '-'){
                                    console.log(`Player ${arr[i][0]} win`)
                                    process.exit()
                                }
                            }
                        }
                    }
                }

                if(counter == 9){
                    console.log('Its a Tie')
                    process.exit()
                }
                console.log(counter);
                this.showBoard()
            }
        }
    }
}

const tictac = new Tictactoe()
tictac.start()