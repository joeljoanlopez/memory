class Infinite extends Phaser.Scene {
    constructor() {
        super('Infinite');
        this.cards = null;
        this.firstClick = null;
        this.score = 100;
        this.correct = 0;
        this.nGame = 0;
        this.finished = false;
    }

    preload() {
        this.load.image('back', '../resources/back.png');
        this.load.image('cb', '../resources/cb.png');
        this.load.image('co', '../resources/co.png');
        this.load.image('sb', '../resources/sb.png');
        this.load.image('so', '../resources/so.png');
        this.load.image('tb', '../resources/tb.png');
        this.load.image('to', '../resources/to.png');
    }

    create() {
        console.log(nCards);
        var nCards = this.nGame % 3 + 2;

        let arraycards = ['co', 'sb', 'co', 'sb'];
		if (nCards >= 3){
			arraycards = ['co', 'sb', 'co', 'sb', 'cb', 'cb'];
			if (nCards == 4){
				arraycards = ['co', 'sb', 'co', 'sb', 'cb', 'cb', 'so', 'so'];
			}
		}
        Phaser.Utils.Array.Shuffle(arraycards);
        this.cameras.main.setBackgroundColor(0xBFFCFF);

        this.add.image(250, 300, arraycards[0]);
		this.add.image(350, 300, arraycards[1]);
		this.add.image(450, 300, arraycards[2]);
		this.add.image(550, 300, arraycards[3]);
		if (nCards >= 3){
			this.add.image(350, 450, arraycards[4]);
			this.add.image(450, 450, arraycards[5]);
			if (nCards == 4){
				this.add.image(250, 450, arraycards[6]);
				this.add.image(550, 450, arraycards[7]);
			}
		}
		
		this.cards = this.physics.add.staticGroup();
		
		this.cards.create(250, 300, 'back');
		this.cards.create(350, 300, 'back');
		this.cards.create(450, 300, 'back');
		this.cards.create(550, 300, 'back');
		if (nCards >= 3){
			this.cards.create(350, 450, 'back');
			this.cards.create(450, 450, 'back');
			if (nCards == 4){
				this.cards.create(250, 450, 'back');
				this.cards.create(550, 450, 'back');
			}
		}

        let i = 0;
        this.cards.children.iterate((card) => {
            card.card_id = arraycards[i];
            i++;
            card.setInteractive();
            card.on('pointerup', () => {
                card.disableBody(true, true);
                if (this.firstClick) {
                    if (this.firstClick.card_id !== card.card_id) {
                        //Implementem la dificultat en els punts
                        this.score -= this.nGame * 5;

                        var timedEvent = this.time.delayedCall(1000, hide(this.firstClick, card), [], this);
                        console.log(timedEvent);

                        if (this.score <= 0) {
                            alert("Game Over");
                            insert(this.nGame);
                            loadpage("../");
                        }
                    }
                    else {
                        this.correct++;
                        if (this.correct >= nCards) { //Mirem que els correctes siguin el n de cartes
                            // alert("You Win with " + this.score + " points.");
                            // loadpage("./infinite.html");
                            this.finished = true;
                        }
                    }
                    this.firstClick = null;
                }
                else {
                    this.firstClick = card, 1000;
                }
            }, card);
        });

        function hide(click1, click2) {
            click1.enableBody(false, 0, 0, true, true);
            click2.enableBody(false, 0, 0, true, true);
            console.log("esperem");
        }

    }

    update() {
        if (this.finished == true) {
            this.scene.restart();
            this.finished = false;
            this.correct = 0;
            this.score = 100;
            this.nGame += 1;
            console.log(hiscores);
        }
    }
}