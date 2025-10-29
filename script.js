function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

function scrollaActive() {
    const sections = document.getElementById('sectionId');

    if (!section) return
    const headerHeight = 70;
    const sectinPosition = section.offsetTop - headerHeight;

    window.scrollTo({top: sectinPosition, behavior: "smooth"});

    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}
    function handleSubimit(event) {
        event.preventDefault();
        
        const formData = {
            nome: form.nome.value,
            email: form.email.value,
            mensagem: form.mensagem.value,
            idade: form.idade.value,
            disponibilidade: form.disponibilidade.value,
            areainteresse: form.areainteressee.value,
            experiencia: form.experiencia.value,
            motivacao: form.motivacao.value,
            datacadastro: new Date().toLocaleDateString()
        }
        let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
        voluntarios.push(formData);
        localStorage.setItem('voluntarios', JSON.stringify(voluntarios));
        
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');
        successMessage.scrollIntoView({behavior: "smooth", block: "center"});
        
        setTimeout(() => form.reset(), 2000);
        setTimeout(() => successMessage.classList.remove('show'), 3000);

        exibirVoluntarios();     
    }
    function exibirVoluntarios() {
        const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
        const tabelaContainer = document.getElementById('tabelaContainer');
        if (!tabelaContainer) return;

        if (voluntarios.length === 0) {
            tabelaContainer.innerHTML = '<p>Nenhum voluntário cadastrado.</p>';
            return;
        }
    }