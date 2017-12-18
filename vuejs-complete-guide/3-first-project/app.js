new Vue({
    el:'#app',

    data:{
        player:{
            name: 'YOU',
            health: 100,
            attack: [7,8,9,10],
            special: 15
        },
        
        monster:{
            name: 'MONSTER',
            health: 100,
            attack: [4,5,6,7,8,9,10],
        },

        endGame: false,

        gameRunning: false,

        logs: []
    },

    methods: {
        startGame: function(){
            console.log('Start game!');
            this.gameRunning = true;
            this.player.health = 100;
            this.monster.health = 100;
            this.endGame = false;
            this.logs = [];
        },
        
        attack:function(){
            console.log('Attack!');
            var playerAttack = this.player.attack[this._getRandomIntInclusive(0, (this.player.attack.length-1))];
            var monsterAttack = this.monster.attack[this._getRandomIntInclusive(0, (this.monster.attack.length-1))];

            this.player.health -= monsterAttack;
            this._actionLog( 2, monsterAttack);
            
            this.monster.health -= playerAttack;
            this._actionLog( 1, playerAttack);            
        },

        specialAttack: function(){
            console.log('Special Attack!');
            var playerAttack = this.player.special;
            var monsterAttack = this.monster.attack[this._getRandomIntInclusive(0, (this.monster.attack.length-1))];

            this.player.health -= monsterAttack;
            this._actionLog( 2, monsterAttack);
            
            this.monster.health -= playerAttack;
            this._actionLog( 1, monsterAttack, 'SPECIAL ATTACK');
        },

        heal: function(){
            console.log('Heal!');
            var monsterAttack = this.monster.attack[this._getRandomIntInclusive(0, (this.monster.attack.length-1))];
            var playerHeal = this._getRandomIntInclusive(5, 10);

            this.player.health -= monsterAttack;
            this._actionLog( 2, monsterAttack);
            
            this.player.health += playerHeal;
            this._actionLog( 1, playerHeal, 'HEAL');
        },

        _getRandomIntInclusive: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        _actionLog: function( player, damage, type = 'hits' ){

            if ( player == 1 ){
                player1 = 'YOU';
                player2 = 'MONSTER';
            } else {
                player1 = 'MONSTER';
                player2 = 'YOU';
            }

            this.logs.push( player1+' '+type+' '+damage+' in '+player2+'.');
        }
    },

    computed: {
        reverseLogs: function(){
            return this.logs.reverse();
        }
    },

    watch: {
        'player.health':function( newValue, oldValue ){
            if ( newValue <= 0 ){
                this.player.health = 0;
                this.endGame = true;
            } else if(this.player.health >= 100 ){
                this.player.health = 100;
            } else {
                this.player.health = newValue;
            }
        },
        'monster.health':function( newValue, oldValue ){
            if ( newValue <= 0 ){
                this.monster.health = 0;
                this.endGame = true;
            } else {
                this.monster.health = newValue;
            }
        },
        endGame:function( newValue, oldValue ){
            var vm = this;
            if ( newValue == true ){
                this.gameRunning = false;
                this.endGame = true;
                setTimeout(function(){
                    if ( vm.monster.health == 0 && vm.player.health == 0 ){
                        alert('DRAW!!');
                    } else if ( vm.monster.health == 0  ){
                        alert('Player WON!!');
                    } else if( vm.player.health == 0 ){
                        alert('Monster WON!!');
                    }
                }, 10)
            }
        }
    }
})