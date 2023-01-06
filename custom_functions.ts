//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    let order = 0;
    let lastPlaced = 0;

    //% block
    //% block.loc.nl="zetKlaar"
    export function startingPosition() {
        agent.teleport(world(87, 72, -28), EAST);
    }

    //% block
    //% block.loc.nl="bouwTop"
    export function buildTop() {
        if (lastPlaced === 3) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/top"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            )
        }

    }

    //% block
    //% block.loc.nl="bouwOpslagplaats"
    export function buildStorage() {
        if (lastPlaced === 0) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/storage"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            )
        }
    }

    //% block
    //% block.loc.nl="bouwpLeefruimte"
    export function buildLivingRoom() {
        if (lastPlaced === 1) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/living_room"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            )
        }
    }

    //% block
    //% block.loc.nl="bouwEetzaal"
    export function buildDiningRoom() {
        if (lastPlaced === 2) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/dining_room"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"text":"title.subtitle.not.correct","color":"red"}]}'
            )
        }
    }

    //% block
    //% block.loc.nl="bouwenStarten"
    export function startBuild() {
        order = 0
        lastPlaced = 0
        player.execute(
            "function exercises/exercise2/reset"
        )
    }


}