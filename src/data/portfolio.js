export const portfolioData = {
  profile: {
    name: 'Martin Munizaga',
    role: 'Analista programador',
    description: 'Soy estudiante de analista programador, me interesa el area de desarrollador UX/UI.',
    fotoPerfil: '/gatoPc.jpg',
    avatarAlt: 'Foto de perfil',
  },
  experiencia: [
    {
      id: 'experiencia-1',
      title: 'Sin experiencia',
    },
  ],
  educacion: [
    {
      id: 'estudio-1',
      organization: 'Instituto DuocUC',
      title: 'Analista Programador',
      start: 'Marzo 2024',
      end: 'Cursando Analista Programador',
      description: 'Analista Programador en DuocUC esta orientado a formar profesionales técnicos capaces de diseñar, construir y mantener soluciones' +
          'de software para diversas industrias.',
    },
  ],
  proyectos: [
    {
      id: 'proyecto-1',
      title: 'DecoHogar',
      description: 'Este proyecto es una tienda online llamada DecoHogar, dedicada a muebles y articulos de decoracion. ' +
          'Permite ver productos y sus detalles, agregar productos al carrito, registrar usuarios e iniciar sesion. ' +
          'Tambien incluye un blog con consejos de decoracion y un formulario de contacto.',
      category: 'Html',
      image: '/DecoHogarIcon.png',
      imageAlt: 'Captura de la pantalla principal del proyecto',
      repositoryUrl: 'https://github.com/999konZ/DecoHogar.git',
    },
    {
      id: 'proyecto-2',
      title: 'EduApp | En desarrollo...',
      description: 'EduApp es una aplicación desarrollada en Kotlin con Jetpack Compose que simula un aula virtual y' +
          'permite explorar cursos, visualizar el progreso de aprendizaje y gestionar el perfil del estudiante.',
      category: 'Kotlin',
      image: '/AppIcon.png',
      imageAlt: 'Icono del proyecto',
      repositoryUrl: 'https://github.com/999konZ/Desafio3.git',
    },
  ],
  socialLinks: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/999konZ' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-munizaga-239463242/?isSelfProfile=true' },
  ],
  contacto: {
    email: 'ma.munizaga@duocuc.cl',
    location: 'Av. Esq. Blanca 501, 9251863 Maipú, Región Metropolitana.',
  },
}
