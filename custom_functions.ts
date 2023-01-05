//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="unlockWorld $code"
    //% block.loc.nl="ontgrendelWereld $code"
    export function unlockWorld(code:string) {
        if(code === "code123") {
            player.execute("execute @a[tag=!unlocked] ~ ~ ~ dialogue change @e[tag=claire1] claire1")
            player.execute("execute @a[tag=!unlocked] ~ ~ ~ say Unlocked!")
            player.execute("execute @a[tag=!unlocked] ~ ~ ~ tag @a add unlocked")
        } else {
            player.execute("tag @a remove unlocked");
        }
    }

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
    //% block.loc.nl="bouwEetzaal"
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

    //% block
    //% block.loc.nl="oplossingLevel4"
    export function solutionLevel4() {
        CodeCosmos.startingPosition();
        agent.move(FORWARD, 6)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 3)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 5)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 2)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 10)
    }
}