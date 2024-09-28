export default async function inicio()
{
    // Create a PixiJS application.
    const app = new PIXI.Application();

    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);

    const texture = await PIXI.Assets.load('img/bunny.png');

    const bunny = new PIXI.Sprite(texture);

    app.stage.addChild(bunny);

    bunny.anchor.set(0.5)

    bunny.x = app.screen.width / 2
    bunny.y = app.screen.height / 2

    app.ticker.add((time) =>
        {
            /**
             * Just for fun, let's rotate mr rabbit a little.
             * Time is a Ticker object which holds time related data.
             * Here we use deltaTime, which is the time elapsed between the frame callbacks
             * to create frame-independent transformation. Keeping the speed consistent.
             */
            bunny.rotation += 0.1 * time.deltaTime;
        });
}  