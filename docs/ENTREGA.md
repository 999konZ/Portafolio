# Entrega de la primera versión funcional

Fecha: 19 de octubre de 2026.

Se reutilizó la carpeta existente `Pruebas/Prueba2/Portafolio`, que ya contenía React y Vite. No se generó una carpeta duplicada. El ZIP original se conserva intacto en la carpeta superior.

## 1. Archivos creados y modificados

Modificados: `.gitignore`, `README.md`, `eslint.config.js`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/App.css` y `src/index.css`.

Creados:

- `public/portfolio.svg`.
- `src/config/theme.js`.
- `src/data/portfolio.js`.
- `src/utils/validateContact.js`.
- Los componentes de la estructura detallada abajo.
- `src/test/setup.js`, `PortfolioPage.test.jsx`, `ProjectsSection.test.jsx`, `ContactSection.test.jsx` y `validateContact.test.js`.
- Este informe, `docs/ENTREGA.md`.

En la limpieza posterior se eliminaron los antiguos recursos sin uso de `public/` y las imágenes provisionales de `src/assets/`. Se retiraron las dependencias UI no usadas (Chakra UI, MUI y Radix Colors); se mantuvo Ant Design y se instalaron las herramientas de testing. `package-lock.json` registra las dependencias finales.

## 2. Estructura definitiva de Atomic Design

```text
src/components/
  atoms/
    ActionButton.jsx
    ExternalLink.jsx
    FormInput.jsx
    SectionHeading.jsx
  molecules/
    FormField.jsx
    ProjectCard.jsx
    SocialLinks.jsx
    TimelineCard.jsx
  organisms/
    Navbar.jsx
    PersonalSection.jsx
    ExperienceSection.jsx
    EducationSection.jsx
    ProjectsSection.jsx
    ContactSection.jsx
    Footer.jsx
  templates/
    PortfolioTemplate.jsx
src/pages/
  PortfolioPage.jsx
```

Todos estos componentes se utilizan. La página conecta los datos; la plantilla ordena los organismos; las moléculas agrupan información o controles; los átomos representan piezas básicas. `App.jsx` solo renderiza la página.

## 3. Secciones implementadas

Personal con avatar; experiencia laboral con empresa/cargo/fechas; estudios con institución/título/fechas; proyectos con previsualización y filtros; contacto con redes/formulario; footer con año dinámico y derechos de autor. Se navega con anclas.

Los datos están marcados como provisionales. Los enlaces de repositorios, GitHub, LinkedIn y correo se activan al completar sus valores; mientras tanto se muestran como pendientes.

## 4. Hooks, props y eventos

- `useState`: un estado por campo (nombre, correo, mensaje), errores y resultado del formulario; categoría seleccionada en proyectos.
- `useEffect`: título de la pestaña sincronizado con el nombre, con limpieza al desmontar.
- Props: datos compartidos por composición desde la página, sin mutarlos.
- `onChange`, `onSubmit` y `onClick`: edición, validación y filtros.
- Renderizado condicional: errores, confirmación local, filtros, listas vacías y enlaces pendientes.

Las listas filtradas y el año actual se calculan directamente: no se guardan en estados innecesarios.

## 5. Formulario

Nombre de 2 a 80 caracteres, correo con formato básico y hasta 254 caracteres, mensaje de 10 a 1000 caracteres. Se ignoran espacios exteriores al validar. Hay etiquetas, instrucciones, errores asociados, un resumen anunciado y foco en el primer campo inválido.

Un resultado válido conserva lo escrito y muestra: "Datos válidos. Formulario validado correctamente." Al modificar un campo se retira esa confirmación. La aplicación no realiza envíos ni guarda datos fuera del estado de React. La recarga limpia el formulario.

El punto para integrar un servicio real está indicado en `handleSubmit`, en `ContactSection.jsx`. Esa integración queda fuera de la demostración autorizada.

## 6. Pruebas ejecutadas

| Comprobación | Resultado |
| --- | --- |
| `npm test` | 4 archivos, 28 pruebas aprobadas, 0 fallidas |
| `npm run lint` | Aprobado, sin errores |
| Navegador, compilación de producción | Página e imágenes cargan; navegación, filtros y formulario verificados |
| Formulario en navegador | Vacíos rechazados; foco en primer error; datos válidos con confirmación local |
| Pantallas pequeñas | Revisadas a 390 px y 320 px; columnas se apilan; se corrigió y verificó el desbordamiento horizontal a 320 px |
| Consola del navegador | Sin errores ni advertencias observados durante la revisión |

La suite comprueba los organismos principales a través de la página, navegación, footer, efecto del título y su limpieza, filtros, enlaces pendientes y reemplazados, listas vacías, corrección de errores, teclado y límites de validación.

En el primer intento, 10 pruebas fallaron porque jsdom no incorpora `ResizeObserver`, API utilizada por Ant Design. Se añadió un doble únicamente en el entorno de pruebas; después pasaron las 28. La distribución visual se comprobó en navegador real, no se dedujo del resultado de jsdom.

La comprobación de pantalla pequeña usa el navegador de escritorio a esos tamaños, no un teléfono físico. No constituye una auditoría exhaustiva de accesibilidad ni de todos los navegadores.

## 7. Compilación

`npm run build` terminó correctamente y generó `dist/`. Se volvió a compilar después de corregir el CSS para 320 px.

Vite informa un aviso de tamaño: el archivo JavaScript principal ocupa aproximadamente 565 kB minificados (183 kB gzip), con React, Ant Design y la aplicación. No es un error de compilación. La división del paquete puede evaluarse más adelante si el rendimiento de carga lo requiere; no se ocultó el aviso ni se añadieron capas de carga a esta primera versión.

## 8. Auditoría contra la rúbrica

| Criterio | Estado de esta versión |
| --- | --- |
| Estructura y contenido, 20% | Base funcional implementada. Pendiente sustituir contenido provisional y proporcionar enlaces reales; no se declara completa la entrega de contenido. |
| Atomic Design, 25% | Cinco niveles implementados y utilizados, con responsabilidades separadas. |
| Hooks, 20% | Estados locales y efecto justificados, eventos y renderizado condicional. |
| Código limpio y prácticas, 20% | Const/let, actualizaciones inmutables, datos/lógica/presentación separados, Ant Design consistente, CSS responsivo y lint aprobado. |
| Testing, 15% | Pruebas de organismos y formulario ejecutadas satisfactoriamente. |

El README está completo. El repositorio público exigido por la pauta está pendiente porque se pidió no publicar sin autorización. No se inicializó Git ni se efectuaron cambios remotos. La calificación final corresponde al profesor.

## 9. Contenido que debe reemplazarse

Editar `src/data/portfolio.js`: nombre, especialidad, descripción, avatar y texto alternativo, experiencia, estudios, fechas, proyectos, capturas, categorías, enlaces de repositorios, redes, correo y ubicación. Mantener experiencias y estudios ordenados del más reciente al más antiguo. Si no hay experiencia, dejar su lista vacía y comunicarlo honestamente.

No inventar información para llenar los campos. Los perfiles usados en pruebas son datos de prueba y no forman parte del portafolio visible.

## 10. Personalización y referencia académica

Los colores, fuentes y tamaños globales están en `src/index.css`; la distribución, navbar, tarjetas, formulario y responsive, en `src/App.css`; los tokens de Ant Design, en `src/config/theme.js`. Las imágenes se guardan en `public/` y sus rutas se cambian en `src/data/portfolio.js`.

Se aplicaron los conceptos del informe académico: componentes, JSX, props, estado, eventos, composición y Ant Design. Esta implementación adapta esos patrones al portafolio; no afirma copiar código literal del profesor. No se contó con `mi_dashboard-main.zip`.

La arquitectura completa, el efecto del título, la validación accesible y el testing son complementos que conviene estudiar y explicar paso a paso antes de la evaluación. El README incluye las instrucciones y referencias técnicas para continuar.

### Ajuste posterior de legibilidad

A petición del estudiante, se simplificaron el formulario y los filtros: estados separados por campo, funciones de cambio explícitas, revisión de errores con `if` y un bucle para reunir categorías. Los átomos y el campo de formulario declaran sus props individualmente. Se conservaron los cinco niveles de Atomic Design, las validaciones, los atributos de accesibilidad y las pruebas.

Después de este ajuste se ejecutaron nuevamente las 28 pruebas, ESLint y la compilación: todos aprobaron. La revisión visual descrita anteriormente corresponde a la primera versión; en este ajuste se verificó el comportamiento mediante la suite existente.
