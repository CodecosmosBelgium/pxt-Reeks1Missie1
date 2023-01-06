//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
let order = 0;



    //% block
    //% block.loc.nl="zetKlaar"
    export function startingPosition() {
        agent.teleport(world(87, 72, -28), EAST);
    }

    //% block
    //% block.loc.nl="bouwTop"
    export function buildTop() {
        player.execute(
            "function exercises/parts/top"
        )
        order++;
        loops.pause(4000);
        
    }

    //% block
    //% block.loc.nl="bouwOpslagplaats"
    export function buildStorage() {
        player.execute(
            "function exercises/parts/storage"
        )
        order++;
        loops.pause(4000);
    }

    //% block
    //% block.loc.nl="bouwpLeefruimte"
    export function buildLivingRoom() {
        player.execute(
            "function exercises/parts/living_room"
        )
        order++;
        loops.pause(4000);
    }

    //% block
    //% block.loc.nl="bouwEetzaal"
    export function buildDiningRoom() {
        player.execute(
            "function exercises/parts/dining_room"
        )
        order++;
        loops.pause(4000);
    }

    //% block
    //% block.loc.nl="bouwenStarten"
    export function startBuild() {
        order = 0
        player.execute(
            "function exercises/exercise2/reset"
        )
    }
}