//las variables 
const contenedor = document.querySelector('.contenedor_carousel');
const puntos = document.querySelectorAll('.punto')
let btn_ver;
let img_estudante = document.querySelector('.profile_estudiante');
let nombre_estudiante = document.querySelector('.nombre_estudiante');
let lenguaje_estudiante = document.querySelector('.lenguaje_estudiante');
let info_estudiante = document.querySelector('.info_estudiante');
const contenedor_estudiantes = document.querySelector('.contenedor_esInfo')
const cerrar_inf = document.querySelector('.cerrar_inf');


let posiciones;
let contador = 0;
puntos.forEach((btn, index) => {
    posiciones = index;
    btn.addEventListener('click', () => {
        let posicion = index;
        let ubicacion = posicion * -100;
        contenedor.style.transform = `translateX(${ubicacion}%)`;
        for (let i in puntos) {
            // puntos[i].classList.remove('active')
            btn.classList.add('active')
        }
    })
})

setInterval(() => {
    if (contador == 2) {
        contador = 0;
    } else if (contador < 2) {
        contador += 1;
    }
    puntos[contador].click();
}, 7000)

const btn_menu = document.querySelectorAll('.btn_menu_hamburguesa');
const menu = document.querySelector('.menu_despliegue');
const menu2 = document.querySelector('.menu2');
const btn_menu2 = document.querySelector('.btn_hamburguesa2');


btn_menu.forEach(btn_menu => {
    btn_menu.addEventListener('click', () => {
        menu.classList.toggle('menu_animacion');
        menu2.classList.toggle('menu_animacion');
    })
})
btn_menu2.addEventListener('click', () => {
    menu.classList.remove('menu_animacion');
    menu2.classList.remove('menu_animacion');
})

//cambiar el menu con el scroll
const nav_barra = document.querySelector('.contenedor_nav');
const nav_barra_inf = document.querySelector('.contenedor_nav_info');

window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        nav_barra.classList.add('nav_barra_scroll');
        nav_barra_inf.classList.add('nav_barra_scroll')
    } else {
        nav_barra.classList.remove('nav_barra_scroll');
        nav_barra_inf.classList.remove('nav_barra_scroll')
    }
})

/*Estudiantes*/

let estudiantes = [{
        nombre: " ALEJANDRO GUILLEN",
        id: 0,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "AMELSI LISETTE ABREU SAVION",
        id: 1,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/mujer.png',
        lenguajeFavorito: '../img/java.png'
    },
    {
        nombre: "ANDREA CELESTE SEGURA NINA",
        id: 2,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/mujer.png',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "ANTHONY JULIAN BEATO DE LOS ANGELES",
        id: 3,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/python.jpg'
    },
    {
        nombre: "EDWIN ESTEBAN HERNANDEZ HERNANDEZ",
        id: 4,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/c++.jpg'
    },
    {
        nombre: "ENMANUEL DE JESUS FELIZ",
        id: 5,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/c++.jpg'
    },
    {
        nombre: "ISMAEL BENJAMIN",
        id: 6,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/java.png'
    },
    {
        nombre: "JEZEL ERISLANDER PUJOLS BATISTA",
        id: 7,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/python.jpg'
    },
    {
        nombre: "JOHAN ANTONIO LARA GUZMAN",
        id: 8,
        informacion: 'Soy Ingeniero en Sistema y Computación, me gusta la tecnologia principalmente la programación web en la parte del Front-end, unos de las tecnologia que domino son: HTML5, CSS3, Bootstrap5, JavaScript, y React.',
        foto: '/img/johan.jpg',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "JONATHAN JOEL DIAZ FRIAS",
        id: 9,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "JOSE ALEJANDRO PARRA MENDEZ",
        id: 10,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "JOSÉ RICARDO GUTIERREZ MARTE",
        id: 11,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "LUIS JOEL CRISPIN MUNOZ",
        id: 12,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "SAMUEL STIVEN VASQUEZ",
        id: 13,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "SHELDIN MILLORD",
        id: 14,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "WALTYN BEANEL SANTO PERALTA",
        id: 15,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "YONATHAN RAMIREZ",
        id: 16,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/js.png'
    },
    {
        nombre: "JOSMER NICOLAS PERALTA MARTINEZ",
        id: 17,
        informacion: 'Soy desarrollador de software, me gusta mucho la programacion por ende estoy cursando el curso de desarrollo de software en JavaScript en ITLA S.D.N, he trabajado en Amazon y en Google como desarrollador front-end.',
        foto: '/img/profile.png',
        lenguajeFavorito: '../img/js.png'
    },

]


const input = document.querySelector('.inp_busqueda');
let contenedorLista = document.querySelector('.contenedor_lista_estudiantes');
let fragmento = document.createDocumentFragment();

//para que aparezcan los estudiantes
let div;
for (let lista of estudiantes) {
    div = document.createElement('div');
    div.innerHTML = `
            <div class="estudiante_info">
                <p>${lista.nombre}</p>
                <button id='${lista.id}' class="btn btn_ver"><i class="bi bi-eye-fill"></i>VER</button>
            </div>
        `
    fragmento.append(div);
    contenedorLista.append(fragmento);
    btn_ver = document.querySelectorAll('.btn_ver');
};

input.addEventListener('keyup', () => {
    let palabra = input.value;
    let nuevaLista = estudiantes.filter(clave => clave.nombre.includes(palabra.toUpperCase())).map(lista =>
        `<div class="estudiante_info">
                <p>${lista.nombre}</p>
                <button id='${lista.id}' class="btn btn_ver"><i class="bi bi-eye-fill"></i>VER</button>
         </div>
        `
    );

    contenedorLista.innerHTML = '';
    div = document.createElement('div');
    div.innerHTML = nuevaLista;
    fragmento.append(div);
    contenedorLista.append(fragmento);

    //para ver las informaciones de los estudiantes

    btn_ver = document.querySelectorAll('.btn_ver');
    btn_ver.forEach((btn) => {
        btn.addEventListener('click', () => {
            contenedor_estudiantes.style.display = 'flex';

            img_estudante.src = estudiantes[btn.id].foto
            nombre_estudiante.textContent = estudiantes[btn.id].nombre;
            lenguaje_estudiante.src = estudiantes[btn.id].lenguajeFavorito;
            info_estudiante.textContent = estudiantes[btn.id].informacion;
            if (estudiantes[btn.id].nombre == 'JOSMER NICOLAS PERALTA MARTINEZ') {
                document.querySelector('strong').innerHTML = 'PROFESOR';
            } else {
                document.querySelector('strong').innerHTML = 'ESTUDIANTE';
            }
        })
    })

    cargarImagenesLoad()
});

//para enfocar la lupa

const lupa = document.querySelector('.bi-search');
input.addEventListener('focus', () => {
    lupa.style.color = 'white';
})
input.addEventListener('blur', () => {
    lupa.style.color = '#F16956';
})

//para ver las informaciones de los estudiantes
btn_ver = document.querySelectorAll('.btn_ver');
btn_ver.forEach(btn => {
    btn.addEventListener('click', () => {
        contenedor_estudiantes.style.display = 'flex';
        img_estudante.src = estudiantes[btn.id].foto;
        nombre_estudiante.textContent = estudiantes[btn.id].nombre;
        lenguaje_estudiante.src = estudiantes[btn.id].lenguajeFavorito;
        info_estudiante.textContent = estudiantes[btn.id].informacion;
        document.querySelector('body').classList.add('body');
        if (estudiantes[btn.id].nombre == 'JOSMER NICOLAS PERALTA MARTINEZ') {
            document.querySelector('strong').innerHTML = 'PROFESOR';
        } else {
            document.querySelector('strong').innerHTML = 'ESTUDIANTE';
        }
    })
})

cerrar_inf.addEventListener('click', () => {
    contenedor_estudiantes.style.display = 'none';
    document.querySelector('body').classList.remove('body');
})

//animacion

function cargarImagenesLoad() {
    let cargarImagen = ((entrada, observar) => {
        entrada.forEach(entradas => {
            if (entradas.isIntersecting) {
                entradas.target.classList.add('estudiante_info_animado')
            }
        })
    })

    let observar = new IntersectionObserver(cargarImagen, {
        root: null,
        rootMargin: '1px',
        threshold: 1.0
    })

    const estudiante_info = document.querySelectorAll('.estudiante_info');

    estudiante_info.forEach(e => {
        observar.observe(e)
    })
}
cargarImagenesLoad()

//mostrar informacion itla
const seccion1 = document.querySelector('.seccion1');
const seccion2 = document.querySelector('.seccion2');
const btn_informacionItla = document.querySelectorAll('.seccionInfo');
const btn_estudiantes = document.querySelectorAll('.seccion-estudiante');

btn_informacionItla.forEach(btn => {
    btn.addEventListener('click', () => {
        seccion1.style.display = 'none';
        seccion2.style.display = 'block';
    })
})
btn_estudiantes.forEach(btn => {
    btn.addEventListener('click', () => {
        seccion1.style.display = 'block';
        seccion2.style.display = 'none';
    })
})


const logo = document.querySelectorAll('.nav_barra_logo');
logo.forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.btn_principal').click()
        seccion1.style.display = 'block';
        seccion2.style.display = 'none';
    })
})

const flechaAbajo = document.querySelector('.irAbajo');
flechaAbajo.addEventListener('click', () => {
    document.querySelector('.seccion-estudiante').click()
})