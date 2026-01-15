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

// Mostrar/Esconder botão de topo conforme o scroll
window.onscroll = function() {
    const btnTop = document.getElementById("btnTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.opacity = "1";
        btnTop.style.visibility = "visible";
    } else {
        btnTop.style.opacity = "0";
        btnTop.style.visibility = "hidden";
    }
};

function openTeamModal(id) {
    const info = document.getElementById('data-' + id);
    const modal = document.getElementById('teamModal');
    
    // Pega os dados dos atributos data-
    const nome = info.parentElement.querySelector('h3').innerText;
    const cargo = info.parentElement.querySelector('p').innerText;
    const foto = info.getAttribute('data-foto'); // PEGA A FOTO
    const tempo = info.getAttribute('data-tempo');
    const detalhes = info.getAttribute('data-detalhes');
    const insta = info.getAttribute('data-insta');

    // Preenche o modal
    document.getElementById('modal-name').innerText = nome;
    document.getElementById('modal-cargo').innerText = cargo;
    document.getElementById('modal-img').src = foto; // COLOCA A FOTO NO MODAL
    document.getElementById('modal-tempo').innerText = tempo;
    document.getElementById('modal-detalhes').innerText = detalhes;
    document.getElementById('modal-insta').href = insta;

    modal.classList.add('active');
}
