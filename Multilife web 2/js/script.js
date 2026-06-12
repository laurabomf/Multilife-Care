document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. SISTEMA DO CARROSSEL (HOME)
       ========================================================================== */
    const track = document.getElementById("carouselTrack");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll("#carouselDots .dot");
    
    // Executa a lógica apenas se os elementos do carrossel existirem na página atual
    if (track && slides.length > 0) {
        let currentSlideIndex = 0;
        const totalSlides = slides.length;

        // Função responsável por mover a esteira física do carrossel
        const updateCarouselPosition = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Atualiza as bolinhas indicadoras (dots) ativos
            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
            currentSlideIndex = index;
        };

        // Evento do botão Próximo
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                let nextIndex = currentSlideIndex + 1;
                if (nextIndex >= totalSlides) nextIndex = 0; // Volta pro início se passar do limite
                updateCarouselPosition(nextIndex);
            });
        }

        // Evento do botão Anterior
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                let prevIndex = currentSlideIndex - 1;
                if (prevIndex < 0) prevIndex = totalSlides - 1; // Vai pro último slide se descer de 0
                updateCarouselPosition(prevIndex);
            });
        }

        // Eventos para cliques diretos nos círculos indicadores
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                updateCarouselPosition(index);
            });
        });

        // Opcional: Auto-play a cada 5 segundos para dinamismo
        setInterval(() => {
            let nextIndex = currentSlideIndex + 1;
            if (nextIndex >= totalSlides) nextIndex = 0;
            updateCarouselPosition(nextIndex);
        }, 5000);
    }

    /* ==========================================================================
       2. VALIDAÇÃO DO FORMULÁRIO DE LOGIN (PORTAL DO CLIENTE)
       ========================================================================== */
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        // Correção: Ouvir o evento de 'submit' do próprio Form evita bugs de recarregamento precoce
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o formulário de recarregar a página imediatamente

            const emailValue = document.getElementById("email").value.trim();
            const passwordValue = document.getElementById("password").value.trim();

            if (emailValue !== "" && passwordValue !== "") {
                alert(`Login realizado com sucesso para: ${emailValue}`);
                // Aqui você integraria com uma API real futuramente.
            } else {
                alert("Por favor, preencha todos os campos obrigatórios.");
            }
        });
    }

    /* ==========================================================================
       3. EXIBIÇÃO OCULTAR/MOSTRAR SENHA (MELHORADO)
       ========================================================================== */
    const togglePasswordBtn = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener("click", () => {
            // Verifica o tipo atual e inverte dinamicamente
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordBtn.textContent = "🙈"; // Ideia criativa: Muda o ícone para feedback visual
                togglePasswordBtn.setAttribute("aria-label", "Ocultar senha");
            } else {
                passwordInput.type = "password";
                togglePasswordBtn.textContent = "👁️";
                togglePasswordBtn.setAttribute("aria-label", "Mostrar senha");
            }
        });
    }
});