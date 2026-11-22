# Microversos

Página única, estática y en español de [Microversos](https://microversos.com): una iniciativa salvadoreña dedicada a los hongos comestibles y funcionales, fundada por Jonathan Gómez.

El sitio no tiene base de datos, backend ni formularios. El texto visible usa solo datos confirmados. Lo que todavía no se conoce está en [Datos pendientes](#datos-pendientes) y no aparece en la página.

## Requisitos

- Node.js 20 o superior
- npm

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para generar el sitio estático:

```bash
npm run build
```

`next build` deja la carpeta `out/` con el HTML, el CSS y el resto de archivos. También genera `robots.txt`, `sitemap.xml` y copia `llms.txt`.

Como el proyecto usa `output: "export"`, no hace falta un servidor de Node para publicarlo. En local, el desarrollo se ve con `npm run dev`.

## Cómo desplegarlo en Vercel

1. Sube este proyecto a un repositorio de Git.
2. En Vercel, crea un proyecto nuevo e importa ese repositorio.
3. El preset de framework es Next.js. El comando de build es `next build`. No hace falta definir variables de entorno.
4. Despliega. Vercel publica el export estático.

No configures el dominio ni el DNS en este paso. La URL canónica del código ya es `https://microversos.com`, para cuando ese dominio se conecte más adelante. Hasta entonces el sitio vive en la URL que asigne Vercel.

## Datos pendientes

Estos datos no están confirmados, así que la página pública no los muestra:

- Año de fundación
- Dirección, municipio o sede física
- Nombres de los mercados de agricultores, días y horarios
- Precios de hongos, kits de cultivo y semilla en grano
- Teléfono
- Correo electrónico
- Redes sociales u otros perfiles
- Testimonios
- Cifras de producción, ventas o alcance
- Fotografías propias del cultivo (esta versión usa dibujos en SVG)

Cuando alguno se confirme, se puede agregar al texto de `lib/content.ts`. Ese archivo alimenta la página, las preguntas frecuentes y los datos estructurados, para que no se desfasen.
