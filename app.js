document.addEventListener('DOMContentLoaded', () => {
    const attackButton = document.getElementById('attack-button');
    const upgradeDamageButton = document.getElementById('upgrade-damage');
    const resetButton = document.getElementById('reset-game');
    const healthElement = document.getElementById('health');
    const damageValueElement = document.getElementById('damage-value');
    const coinCountElement = document.getElementById('coin-count');
    const bossImage = document.getElementById('boss-image');

    let damage = 1;
    let coins = 0;
    let bossHealth = 100;

    attackButton.addEventListener('click', () => {
        bossHealth -= damage;
        coins += damage;
        if (bossHealth <= 0) {
            bossHealth = 0;
            alert('Босс побежден!');
        } 
        updateUI();
    });

    upgradeDamageButton.addEventListener('click', () => {
        if (coins >= 10) {
            damage += 1;
            coins -= 10;
            updateUI();
        } else {
            alert('Недостаточно монет!');
        }
    });

    resetButton.addEventListener('click', () => {
        if (bossHealth <= 0) {
            bossHealth = 100;
            damage = 1;
            coins = 0;
            updateUI();
        } else {
            alert('Босс еще жив!');
        }
    });
    
    function updateUI() {
        healthElement.textContent = bossHealth;
        damageValueElement.textContent = damage;
        coinCountElement.textContent = coins;
    }
});