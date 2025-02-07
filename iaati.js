// Função para lidar com a interação do botão de perguntas
document.querySelectorAll(".question-button").forEach(button => {
    button.addEventListener("click", function() {
        // Captura a resposta que está armazenada no atributo "data-answer"
        let response = this.getAttribute("data-answer");

        // Atualiza a área de resposta com o conteúdo da resposta
        document.getElementById("ai-response").innerText = response;
    });
});