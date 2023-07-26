//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    let lastPlaced = -1;

    //% block="zetAgentKlaar"
    export function startingPosition() {
        agent.teleport(world(87, 72, -28), EAST);
        player.execute("scoreboard players set @a woolDetected 0");
    }

    //% block="gaNaarVolgendLevel"
    export function goToNextLevel() {
        player.execute("execute @a[scores={progress=10..,ex1_lvl=1..6,ex1_move=0,woolDetected=0}] ~ ~ ~ execute @e[type=agent] ~ ~ ~ detect ~ ~-1 ~ gold_block 1 scoreboard players set @a ex1_move 1");
    }

    //% block="bouwTop"
    export function buildTop() {
        if (lastPlaced === 3) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/top"
            );
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            );
            player.execute(
                'tellraw @a {"rawtext":[{"translate":"text.not.correct.buildTop"}]}'
            );
            lastPlaced++;
        }
    }

    //% block="bouwOpslagplaats"
    export function buildStorage() {
        if (lastPlaced === 0) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/storage"
            );
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            );
            player.execute(
                'tellraw @a {"rawtext":[{"translate":"text.not.correct.buildWarehouse"}]}'
            );
            lastPlaced++;
        }
    }

    //% block="bouwLeefruimte"
    export function buildLivingRoom() {
        if (lastPlaced === 1) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/living_room"
            );
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            );
            player.execute(
                'tellraw @a {"rawtext":[{"translate":"text.not.correct.buildLivingRoom"}]}'
            );
            lastPlaced++;
        }
    }

    //% block="bouwEetzaal"
    export function buildDiningRoom() {
        if (lastPlaced === 2) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/dining_room"
            );
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            );
            player.execute(
                'tellraw @a {"rawtext":[{"translate":"text.not.correct.buildDiningRoom"}]}'
            );
            lastPlaced++;
        }
    }

    //% block="bouwMotoren"
    export function startBuild() {
        if (lastPlaced === -1) {
            lastPlaced++;
            player.execute(
                "function exercises/exercise2/reset"
            );
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            );
            player.execute(
                'tellraw @a {"rawtext":[{"translate":"text.not.correct.startBuilding"}]}'
            );
            lastPlaced++;
        }
    }
}