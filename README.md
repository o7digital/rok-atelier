# ROK Atelier — Propuesta digital

Portfolio editorial premium desarrollado en **Astro**, con salida estática, en español e inglés. Propuesta de diseño preparada para Olivier / o7 Digital.

## Inicio rápido

Usa Node.js 22.23.4 o superior dentro de la rama 22.x (`nvm use`). La versión está fijada en `.nvmrc` y Vercel usa Node.js 22.x.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

El resultado listo para alojar se genera en `dist/`. Puede publicarse como sitio estático en Vercel, Netlify o un servidor web. En Vercel: preset Astro, comando `npm run build`, directorio `dist`.

## Incluido

- Portada inmersiva con visual arquitectónico original.
- Portafolio con filtros de arquitectura e interiorismo.
- Tres páginas de exploración conceptual, cada una con galería ampliable.
- Versión completa en español e inglés; el selector conserva el proyecto abierto.
- Navegación móvil, transiciones suaves, opción de movimiento reducido y controles de teclado.
- Secciones de atelier, filosofía y proceso.
- Preparación de un resumen de proyecto para copiar y compartir en Instagram. No se envía ningún dato desde la maqueta y no se requiere backend.
- Imágenes WebP y tipografías locales, sin llamadas a Google Fonts en tiempo de ejecución.
- Metadatos de presentación, favicon y página 404. La maqueta está marcada `noindex`.

## Estructura

```text
src/components/Home.astro      Portada ES/EN
src/components/Project.astro   Presentación de cada espacio
src/layouts/Layout.astro       Navegación, footer, formulario y metadatos
src/data/content.ts            Textos ES/EN y datos de las exploraciones
src/styles/global.css         Dirección artística y responsive
src/pages/                    Rutas estáticas
public/images/                Imágenes optimizadas
public/fonts/                 Tipografías locales
```

## Naturaleza de la propuesta

El nombre ROK Atelier y el enlace `https://www.instagram.com/rok.atelier/` provienen del encargo. Instagram no permitió recuperar el contenido del perfil durante la preparación. No se afirman datos biográficos, premios, ubicaciones, experiencia, clientes ni realizaciones verificadas.

El wordmark, los textos y los nombres **Refugio**, **Materia** y **Umbral** son propuestas creativas. Las imágenes son conceptuales o referencias visuales, no trabajos atribuidos al atelier. Esto se indica en el portfolio, en las fichas y en el pie de página.

Antes de convertir la maqueta en el sitio oficial: sustituir las referencias por fotografías y fichas reales, confirmar el logotipo y el contenido, definir el medio de contacto definitivo, actualizar `site` en `astro.config.mjs` y retirar `noindex`/`Disallow` cuando se autorice indexación. Si se requiere un formulario con envío, conectar un endpoint real y su aviso de privacidad.

## Créditos visuales

Ver `ASSETS.md` para procedencia de imágenes, tipografías y prompts de las visualizaciones conceptuales.

## Presentación en Vercel

- URL de presentación: https://rok-atelier.vercel.app/
- Repositorio: https://github.com/o7digital/rok-atelier
- Rama de entrega: `presentation/vercel`.
- Proyecto Vercel: `rok-atelier`, equipo `olivier-steineur`.
- Preset Astro, build `npm run build`, salida `dist`; configuración en `vercel.json`.

El enlace de producción permite visitar la maqueta sin una cuenta de ChatGPT. Se mantiene la no indexación mediante `meta robots`, `robots.txt` y la cabecera HTTP `X-Robots-Tag`. Esto no limita el acceso de quienes reciben el enlace.

Para publicar cambios desde este checkout, con la CLI de Vercel autenticada:

```sh
nvm use
npm ci
npm run build
vercel link --yes --project rok-atelier --scope olivier-steineur
vercel --prod --yes --scope olivier-steineur
```

La URL `site` de `astro.config.mjs` corresponde al enlace de presentación. El formulario genera un texto localmente, permite copiarlo y abre el perfil de Instagram; el visitante debe pegar y enviar el mensaje allí.
