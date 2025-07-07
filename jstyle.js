const btnrun = document.getElementById('btn-RUN');
const box = document.querySelector('.maincon');
const card = document.querySelector('.card');
const button = document.getElementById('clickcard');

btnrun.addEventListener('click', () => {
    card.classList.remove('hidden');
    box.classList.add('show');
    btnrun.style.display = 'none';
});


button.addEventListener('click', () => {
    card.classList.toggle('flipcard');
});

//runbtn
const btn = document.getElementById("btn-RUN");
const offset = 100;
let lastmovemouse = 0;
const cooldown = 450;//ms

//หาตำแหน่งเมาส์
document.addEventListener("mousemove", function (e) {
    const now = Date.now();
    if (now - lastmovemouse < cooldown) return;//ถ้่า lastmovemouse < cooldown ถ้าใช่ แปลว่า: ยังเร็วไป อย่าเพิ่งให้ปุ่มหนี
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    //หาตำแหน่งปุ่ม
    const bottonreact = btn.getBoundingClientRect();
    const btnX = bottonreact.left + bottonreact.width / 2;
    const btnY = bottonreact.top + bottonreact.height / 2;

    const distance = Math.hypot(mouseX - btnX, mouseY - btnY);
    if (distance < offset) {
        const angle = Math.random() * Math.PI * 2;
        const moveX = Math.cos(angle) * 150;
        const moveY = Math.sin(angle) * 150;

        let newX = btnX + moveX - btn.offsetWidth / 2;
        let newY = btnY + moveY - btn.offsetHeight / 2;

        // ไม่ให้ออกนอกจอ
        newX = Math.max(0, Math.min(window.innerWidth - btn.offsetWidth, newX));
        newY = Math.max(0, Math.min(window.innerHeight - btn.offsetHeight, newY));

        btn.style.left = `${newX}px`;
        btn.style.top = `${newY}px`;

        lastmovemouse = now;
    }
});
