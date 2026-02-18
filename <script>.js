function sendGiftRequest() {
    // 1. Запускаем мощное конфетти
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    // 2. Ждем пару секунд, чтобы она насладилась эффектом, и перекидываем в ТГ
    setTimeout(() => {
        const myTelegramNick = "ТВОЙ_НИК_БЕЗ_СОБАЧКИ"; // ЗАМЕНИ НА СВОЙ НИК
        const message = encodeURIComponent("Милый, я выбираю подарок: Кольцо за 100 звёзд! ✨💍");
        window.location.href = `https://t.me/${myTelegramNick}?text=${message}`;
    }, 2000);
}
