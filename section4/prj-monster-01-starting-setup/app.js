function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            winner: null,
            battleLog: [],
            currentRound: 0
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <=0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            }
            else if (value <= 0) {
                this.winner = 'player'
            }
        },
        playerHealth(value) {
            if (value <=0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            }
            else if (value <= 0) {
                this.winner = 'monster'
            }
        }
    },
    computed: {
        monsterBar() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: `${this.monsterHealth}%`}
        },
        playerBar() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return { width: `${this.playerHealth}%`}
        }
    },
    methods: {
        startNewGame() {
            this.monsterHealth = 100
            this.playerHealth = 100
            this.winner = null
            this.battleLog = []
            this.currentRound = 0
        },
        attackMonster() {
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth = this.monsterHealth - attackValue
            this.attackPlayer()
            this.addBattleLog('Player', 'attacks and deals ', attackValue)
            this.currentRound++
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth = this.playerHealth - attackValue
            this.addBattleLog('Monster', 'attacks and deals ', attackValue)
        },
        specialAttackMonster() {
            const specialAttack = getRandomValue(8, 20)
            this.monsterHealth = this.monsterHealth - specialAttack
            this.attackPlayer()
            this.addBattleLog('Player', 'attacks and deals ', specialAttack)
            this.currentRound++
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } 
            else {
                this.playerHealth = this.playerHealth + healValue
            }
            this.attackPlayer()
            this.addBattleLog('Player', 'hears for himself for ', healValue)
        },
        surrender() {
            this.winner = 'monster'
        },
        addBattleLog(who, action, value) {
            this.battleLog.unshift({
                playerAction: who,
                actionType: action,
                actionValue: value
            })
            console.log(this.battleLog)
        }
    }
})
app.mount('#game')