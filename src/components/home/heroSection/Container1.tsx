export function Container1() {
  // Video Container
  return (
    <div className="w-full">
      <video
        className="w-full"
        autoPlay // Configurar autoplay para o vídeo
        controls={false} // Remover os controles do vídeo
        loop // Opcional: configurar o loop do vídeo
        muted // Opcional: desativar o som do vídeo (se necessário)
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  )
}
