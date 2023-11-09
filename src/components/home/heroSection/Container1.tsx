export function Container1() {
  // Video Container
  return (
    <div className="w-full aspect-video max-h-[480px] overflow-hidden md:flex md:items-center">
      <video
        className="w-full h-auto"
        autoPlay // Configurar autoplay para o vídeo
        controls={false} // Remover os controles do vídeo
        loop // Opcional: configurar o loop do vídeo
        muted // Opcional: desativar o som do vídeo (se necessário)
      >
        <source src="/video-cnc.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  )
}
