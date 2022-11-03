import { Grid } from '@mui/material';
import { IBlog } from '../../interfaces';
import { BlogCard } from './BlogCard';

const data: IBlog[] = [
    {
        slug: 'react',
        title: 'React',
        image: ['https://interacso.com/blog/wp-content/uploads/2019/05/reactluminoso.png'],
        description: [
            'React es una librería Javascript focalizada en el desarrollo de interfaces de usuario. Así se define la propia librería y evidentemente, esa es su principal área de trabajo. Sin embargo, lo cierto es que en React encontramos un excelente aliado para hacer todo tipo de aplicaciones web, SPA (Single Page Application) o incluso aplicaciones para móviles. Para ello, alrededor de React existe un completo ecosistema de módulos, herramientas y componentes capaces de ayudar al desarrollador a cubrir objetivos avanzados con relativamente poco esfuerzo.',
            'Por tanto, React representa una base sólida sobre la cual se puede construir casi cualquier cosa con Javascript. Además facilita mucho el desarrollo, ya que nos ofrece muchas cosas ya listas, en las que no necesitamos invertir tiempo de trabajo. En este artículo te ampliaremos esta información, aportando además diversos motivos por los que usar React como librería del lado del cliente.',
            'React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.'
        ],
        target: [
            'React es una librería (o biblioteca) que sólo se encarga de resolver un problema: renderizar la vista o UI de nuestra aplicación.'
        ]
    },
    {
        slug: 'angular',
        title: 'Angular',
        image: ['https://images.indepth.dev/images/2022/05/External-Configurations-in-Angular-2.jpg'],
        description: [
            'Angular es un Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página. Google se encarga del mantenimiento y constantes actualizaciones de mejoras para este framework.',
            'Angular es uno de los frameworks Javascript más utilizados para crear aplicaciones Web. Entre sus virtudes se destaca la posibilidad de utilizar templates declarativos, aplicar inyecciones de dependencias y crear componentes reutilizables.',
            'La finalidad de angular es facilitarnos el desarrollo de aplicaciones web y además darnos herramientas para trabajar con los elementos de una web de una manera más sencilla y óptima. Otro propósito que tiene Angular es la separación completa entre el front-end y el back-end en una aplicación web.'
        ],
        target: [
            'Angular es un completo framework Javascript con el que desarrollar aplicaciones frontend modernas. Angular ofrece toda una serie de módulos habituales en el desarrollo de proyectos web que no tienes que desarrollar desde cero y que, a la vez, permiten organizar un proyecto de una manera óptima, mantenible y escalable.'
        ]
    },
    {
        slug: 'nextjs',
        title: 'NextJs',
        image: ['https://kylepfromer-portfolio.imgix.net/blog/nextjs-image-component-blog/mountains.jpg?auto=format&ixlib=react-9.5.2&w=700'],
        description: [
            'Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel que habilita funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React.',
            'Las decisiones tecnológicas juegan un papel importante a la hora de poder ofrecer aplicaciones de alto rendimiento, escalables y exitosas, y como tal, en un momento dado de mi vida de desarrollador he empezado a utilizar Next.js por una serie de razones, en su mayoría relacionadas con la velocidad y el rendimiento.',
            'Para llevar nuestra aplicación a producción lo único que tenemos que hacer es correr el comando next build que nos da el framework, esto crea una carpeta llamada . next con todo el código listo para producción. Solo queda subir esa carpeta a cualquier servidor y correr el comando next start y listo.'
        ],
        target: [
            'Creado por Vercel, Next. js es un marco de trabajo que permite a los desarrolladores crear aplicaciones de página única y aplicaciones web de alto rendimiento a través de la renderización del lado del servidor.'
        ]
    }
];

export const BlogList = () => {
  return (
    <Grid container spacing={2} textAlign='left'>
        {
            data.map(( item: IBlog ) => (
                <BlogCard 
                key={ item.slug }
                blog={ item }
                />
            ))
        }
        
    </Grid>
  )
}

