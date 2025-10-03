import Animal from "./Animal";



export class RacingController {

    public play(animalList: Animal[]) {
        //Announce list of racers
        this.announceRaces(animalList);
        
        // Get the winner
        const winner: Animal = this.getWinner(animalList);

        // Announce the winner name with format
        this.announceWinner(winner);
    }

    // Support method

    private announceRaces(animalList: Animal[]){
        
    }

    private getWinner(animalList: Animal[]): Animal {
        let winner: Animal = animalList[0];
        for (const animal of animalList) {
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        }
        return winner;
    }

    private announceWinner(winner: Animal){

    }
}