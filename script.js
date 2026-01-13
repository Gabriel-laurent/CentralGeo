document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        alert(`Sucesso! O e-mail ${email} foi cadastrado em nossa base.`);
        e.target.reset();
    });

    // Efeito simples de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Rolando para seção...");
        });
    });
});

const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const overlay = document.getElementById('overlay');

// Função para fechar o menu
function fecharMenu() {
    menuToggle.classList.remove('active');
    navList.classList.remove('active');
    overlay.classList.remove('active');
}

// Abre/Fecha ao clicar no botão
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
    overlay.classList.toggle('active', isActive); // Liga/Desliga o fundo escuro
});

// FECHAMENTO AUTOMÁTICO: Clicar no fundo escuro fecha o menu
overlay.addEventListener('click', fecharMenu);

// Fechar ao clicar nos links
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

function openTeamModal(tecnico) {
    const modal = document.getElementById('teamModal');
    const data = document.getElementById('data-' + tecnico);
    
    // Preenchimento dos dados
    document.getElementById('modal-name').innerText = data.parentElement.querySelector('h3').innerText;
    document.getElementById('modal-cargo').innerText = data.parentElement.querySelector('p').innerText;
    document.getElementById('modal-tempo').innerText = data.getAttribute('data-tempo');
    document.getElementById('modal-detalhes').innerText = data.getAttribute('data-detalhes');
    document.getElementById('modal-insta').href = data.getAttribute('data-insta');

    // Abre com animação
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeTeamModal() {
    const modal = document.getElementById('teamModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400);
}

// FECHAMENTO AUTOMÁTICO AO CLICAR FORA
window.addEventListener('click', function(event) {
    const modal = document.getElementById('teamModal');
    // Se o usuário clicar exatamente no fundo (overlay) e não no card branco
    if (event.target === modal) {
        closeTeamModal();
    }
});