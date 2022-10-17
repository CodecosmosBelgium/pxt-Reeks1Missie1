//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block
    //% block.loc.nl="zetKlaar"
    export function init() {
        agent.teleport(world(87, 72, -28), EAST);
    }

    //% block
    //% block.loc.nl="bouwTop"
    export function buildTop() {
        player.execute(
            "function exercises/parts/top"
        )
        loops.pause(4000);
    }

    //% block
    //% block.loc.nl="bouwOpslagplaats"
    export function buildStorage() {
        player.execute(
            "function exercises/parts/storage"
        )
        loops.pause(4000);
    }

    //% block
    //% block.loc.nl="bouwpLeefruimte"
    export function buildLivingRoom() {
        player.execute(
            "function exercises/parts/living_room"
        )
        loops.pause(4000);
    }

    //% block
    //% block.loc.nl="bouwpEetzaal"
    export function buildDiningRoom() {
        player.execute(
            "function exercises/parts/dining_room"
        )
        loops.pause(4000);
    }

    //% block
    //% block.loc.nl="bouwenStarten"
    export function startBuild() {
        player.execute(
            "function exercises/exercise2/reset"
        )
    }
}