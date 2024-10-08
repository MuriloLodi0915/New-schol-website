const page2Image = document.querySelector('.page2-image');
const page2ImageContainer = document.querySelector('.page2-image-container');

// Define o fator de velocidade
const speedFactor = 0.2; // Ajuste o fator de velocidade (menor que 1 para mais lento)
const startEffectOffset = -500; // Ajuste esta variável para definir quando o efeito começa (em pixels)

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + Math.abs(startEffectOffset); // Adiciona o offset negativo

  const containerOffsetTop = page2ImageContainer.offsetTop;
  const containerHeight = page2ImageContainer.offsetHeight;
  const imageHeight = page2Image.offsetHeight;

  const maxScroll = imageHeight - containerHeight;

  // Verifica se a rolagem está dentro dos limites do contêiner
  if (scrollPosition > containerOffsetTop) {
    // Ajusta o efeito de paralaxe
    const adjustedScroll = (scrollPosition - containerOffsetTop) * speedFactor;

    // Impede que a imagem se mova além do limite do contêiner
    const translateY = Math.min(adjustedScroll, maxScroll);
    
    page2Image.style.transform = `translateY(-${translateY}px)`;
  }
});
