// Efeito de Digitação
const typingText = document.querySelector('.typing-effect');
const words = ['Pratico', 'Fácil', 'É grátis', 'Vznplay©'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    
    typingText.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(type, 1500);
    }
}

// Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Inicia quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    type();
});


// FAQ - Abrir/Fechar respostas
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = question.nextElementSibling;

        // Fecha outras FAQs abertas
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('active');
            }
        });

        // Abre/Fecha a clicada
        faqItem.classList.toggle('active');
        answer.classList.toggle('active');
    });
});


    // Nomes personalizados – edite aqui
    const nomes = [
  'Carlos Henrique Entrou Na Pagina'

    ];

    function mostrarNotificacao() {
      const nome = nomes[Math.floor(Math.random() * nomes.length)];
      const mensagem = `${nome}.`;

      const notificacao = document.createElement("div");
      notificacao.className = "bloco-alerta";
      notificacao.textContent = mensagem;

      const container = document.getElementById("notificacao-wrapper");
      container.appendChild(notificacao);

      // Remover após animação (8 segundos)
      setTimeout(() => {
        notificacao.remove();
      }, 8000);
    }

    // Primeira notificação instantânea
    mostrarNotificacao();

    // Repetir a cada 13 segundos
    setInterval(mostrarNotificacao, 13000);