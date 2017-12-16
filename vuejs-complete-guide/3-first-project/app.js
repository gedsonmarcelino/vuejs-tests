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

        log: []
    },

    methods: {
        startGame: function(){
            console.log('Start game!');
            this.player.health = 100;
            this.monster.health = 100;
            this.endGame = false;
        },
        
        attack:function(){
            console.log('Attack!');
            var playerAttack = this.player.attack[this._getRandomIntInclusive(0, (this.player.attack.length-1))];
            var monsterAttack = this.monster.attack[this._getRandomIntInclusive(0, (this.monster.attack.length-1))];

            this.player.health -= monsterAttack;
            this.monster.health -= playerAttack;
        },

        specialAttack: function(){
            console.log('Special Attack!');
            var playerAttack = this.player.special;
            var monsterAttack = this.monster.attack[this._getRandomIntInclusive(0, (this.monster.attack.length-1))];

            this.player.health -= monsterAttack;
            this.monster.health -= playerAttack;
        },

        heal: function(){
            console.log('Heal!');
            var monsterAttack = this.monster.attack[this._getRandomIntInclusive(0, (this.monster.attack.length-1))];

            this.player.health -= monsterAttack;
            this.player.health += this._getRandomIntInclusive(5, 10);
        },

        _getRandomIntInclusive: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
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