const canvas = document.querySelector('Canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1920;
canvas.height = 1080;

const IdleRight = document.getElementById('Idle');
const IdleLeft = document.getElementById('IdleLeft');
const WalkRight = document.getElementById('Walk');
const WalkLeft = document.getElementById('WalkLeft');

const Background = document.getElementById('Background');
const Platform = document.getElementById('Platform');
const Tuto = document.getElementById('Tuto');
const Castle = document.getElementById('Castle');
var Player = IdleRight;

//Player Variable
let PlayerFrameX = 0;
let PlayerFrameY = 0;
let PlayerPositionX = -300;
let PlayerPositionY = 200;
let JumpPlayer = false;
let JumpTime = 0;

//Enviromment Collision Variable
let Point1 = [500, 800, -300, 800, 1400, 500, 1950, 500, 2200 ,500 ,2700 ,500, 3000 ,500 ,3300 ,700 ,3800 ,800];
let Point2 = [1183, 800, 383, 800, 1766, 500, 2046, 500, 2566, 500, 2846 ,500, 3146 ,500 ,3666 ,700 ,4483 ,800];
let Point3 = [1183, 962, 383, 962, 1766, 768, 2046, 633, 2566, 668, 2846 ,633, 3146 ,633 ,3666 ,868 ,4483 ,962];

setInterval(CharacterAnimation, 35);
setInterval(DrawCanvas, 0);

//SpriteAnimation
function CharacterAnimation()
{
    if (Player === IdleRight || Player === WalkRight) {
        PlayerFrameX++;

        if (PlayerFrameX >= 2)
        {
            PlayerFrameX = 0;
            PlayerFrameY++;
        }

        if (PlayerFrameY >= 10)
        {
            PlayerFrameY = 0;
        }
    }
    else {
        PlayerFrameX--;

        if (PlayerFrameX <= -1)
        {
            PlayerFrameX = 1;
            PlayerFrameY++;
        }

        if (PlayerFrameY >= 10)
        {
            PlayerFrameY = 0;
        }
    }
}

//InputPlayer
addEventListener("keydown", e =>
{
    if (e.key === "ArrowRight")
    {
        Player = WalkRight;
    }
})
addEventListener("keyup", e =>
{
    if (e.key === "ArrowRight")
    {
        Player = IdleRight;
    }
})

addEventListener("keydown", e =>
{
    if (e.key === "ArrowLeft")
    {
        Player = WalkLeft;
    }
})
addEventListener("keyup", e =>
{
    if (e.key === "ArrowLeft")
    {
        Player = IdleLeft;
    }
})

addEventListener("keydown", e =>
{
    if (e.key === "ArrowUp" & JumpPlayer == false)
    {
        JumpPlayer = true;
    }
})

function DrawCanvas()
{
    //Player Physic
    var MoveZ = true;
    var MoveA = true;
    var MoveD = true;
    var MoveS = true;

    for (var i = 0; i < 4; i++)
    {
        switch (i)
        {
            case 0:
                for (var c = 0; c < 9; c++)
                {
                    var PointLeftCollision = PlayerPositionX + 832 + 100 >= Point1[c * 2] & PlayerPositionX + 832 + 100 <= Point2[c * 2] & PlayerPositionY + 412 + 170 - 2 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 170 - 2 <= Point3[c * 2 + 1];
                    var PointRightCollision = PlayerPositionX + 832 + 170 >= Point1[c * 2] & PlayerPositionX + 832 + 170 <= Point2[c * 2] & PlayerPositionY + 412 + 170 - 2 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 170 - 2 <= Point3[c * 2 + 1];

                    if (PointLeftCollision || PointRightCollision)
                    {
                        MoveZ = false;
                    }
                }
                break;

            case 1:
                for (var c = 0; c < 9; c++)
                {
                    var PointLeftCollision = PlayerPositionX + 832 + 100 - 1 >= Point1[c * 2] & PlayerPositionX + 832 + 100 - 1 <= Point2[c * 2] & PlayerPositionY + 412 + 100 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 100 <= Point3[c * 2 + 1];
                    var PointRightCollision = PlayerPositionX + 832 + 100 - 1 >= Point1[c * 2] & PlayerPositionX + 832 + 100 - 1 <= Point2[c * 2] & PlayerPositionY + 412 + 170 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 170 <= Point3[c * 2 + 1];

                    if (PointLeftCollision || PointRightCollision)
                    {
                        MoveA = false;
                    }
                }
                break;

            case 2:
                for (var c = 0; c < 9; c++)
                {
                    var PointLeftCollision = PlayerPositionX + 832 + 170 + 1 >= Point1[c * 2] & PlayerPositionX + 832 + 170  + 1 <= Point2[c * 2] & PlayerPositionY + 412 + 100 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 100 <= Point3[c * 2 + 1];
                    var PointRightCollision = PlayerPositionX + 832 + 170 + 1 >= Point1[c * 2] & PlayerPositionX + 832 + 170 + 1 <= Point2[c * 2] & PlayerPositionY + 412 + 170 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 170 <= Point3[c * 2 + 1];

                    if (PointLeftCollision || PointRightCollision)
                    {
                        MoveD = false;
                    }
                }
                break;

            case 3:
                for (var c = 0; c < 9; c++)
                {
                    var PointLeftCollision = PlayerPositionX + 832 + 100 >= Point1[c * 2] & PlayerPositionX + 832 + 100 <= Point2[c * 2] & PlayerPositionY + 412 + 170 + 1 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 170 + 1 <= Point3[c * 2 + 1];
                    var PointRightCollision = PlayerPositionX + 832 + 170 >= Point1[c * 2] & PlayerPositionX + 832 + 170 <= Point2[c * 2] & PlayerPositionY + 412 + 170 + 1 >= Point1[c * 2 + 1] & PlayerPositionY + 412 + 170 + 1 <= Point3[c * 2 + 1];

                    if (PointLeftCollision || PointRightCollision)
                    {
                        MoveS = false;
                    }
                }
                break;
        }
    }

    //PlayerMovement
    if (Player === WalkRight & MoveD)
    {
        PlayerPositionX++;
    }
    if (Player === WalkLeft & MoveA)
    {
        PlayerPositionX--;
    }

    if (MoveZ & JumpPlayer == true & JumpTime < 200)
    {
        PlayerPositionY--;
        PlayerPositionY--;
    }
    if (JumpPlayer == true)
    {
        JumpTime++;
        if (JumpTime >= 250)
        {
            if (MoveS == false)
            {
                JumpPlayer = false;
                JumpTime = 0;
            }
        }
    }

    if (MoveS & (JumpPlayer == false || JumpTime > 200))
    {
        PlayerPositionY++;
    }

    if (PlayerPositionY >= 1000)
    {
        PlayerPositionX = -300;
        PlayerPositionY = 200;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Platform
    ctx.drawImage(Background, 0, 0);
    ctx.drawImage(Tuto, -200 - PlayerPositionX, 400 - PlayerPositionY);

    ctx.drawImage(Platform, 0, 1562, 2048, 486, -300 - PlayerPositionX, 800 - PlayerPositionY, 683, 162);
    ctx.drawImage(Platform, 0, 1562, 2048, 486, 500 - PlayerPositionX, 800 - PlayerPositionY, 683, 162);

    ctx.drawImage(Platform, 460, 0, 1096, 503, 1400 - PlayerPositionX, 500 - PlayerPositionY, 366, 168);

    ctx.drawImage(Platform, 0, 0, 438, 398, 1900 - PlayerPositionX, 500 - PlayerPositionY, 146, 133);

    ctx.drawImage(Platform, 460, 0, 1096, 503, 2200 - PlayerPositionX, 500 - PlayerPositionY, 366, 168);

    ctx.drawImage(Platform, 0, 0, 438, 398, 2700 - PlayerPositionX, 500 - PlayerPositionY, 146, 133);

    ctx.drawImage(Platform, 0, 0, 438, 398, 3000 - PlayerPositionX, 500 - PlayerPositionY, 146, 133);

    ctx.drawImage(Platform, 460, 0, 1096, 503, 3300 - PlayerPositionX, 700 - PlayerPositionY, 366, 168);

    ctx.drawImage(Platform, 0, 1562, 2048, 486, 3800 - PlayerPositionX, 800 - PlayerPositionY, 683, 162);

    ctx.drawImage(Castle, 3950 - PlayerPositionX, 370 - PlayerPositionY);

    ctx.drawImage(Player, PlayerFrameX * 256, PlayerFrameY * 256, 256, 256, 832, 412, 256, 256);
}