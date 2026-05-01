  document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!nome || !email || !mensagem) {
                alert("Preencha todos os campos.");
                return;
            }
            if (!emailRegex.test(email)) {
                alert("E-mail inválido.");
                return;
            }
            alert("Mensagem enviada com sucesso!");
            this.reset();
        });

       