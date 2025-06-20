function crearResultado(estrato, consumo, csv) {

    const eficienciaPanel = 0.1;

    const csvFile = csv.files[0];
    const reader = new FileReader();
    reader.readAsText(csvFile);

    reader.onload = function(event){

        const text = event.target.result; 
        const lines = text.split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
        const lineData = line.split(',');
        return headers.reduce((obj, head, i) => {
            obj[head] = lineData[i];
            return obj;
        }, {});
        });

        console.log(data)

    }

    const sectionVentana = document.getElementById('simulacionSection');

    const ventana = document.createElement("div");
    ventana.style.backgroundColor = 'white';
    ventana.style.position = 'absolute';
    ventana.style.width = '80vw';
    ventana.style.height = '80vh';
    ventana.style.border = '2px solid #ccc';
    ventana.style.borderRadius = '12px';
    ventana.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    ventana.style.display = 'grid';
    ventana.style.gridTemplateRows = '25% 1fr';

    const cerrarDiv = document.createElement("div");
    cerrarDiv.style.display = 'flex';
    cerrarDiv.style.justifyContent = 'center';
    cerrarDiv.style.alignItems = 'center';
    cerrarDiv.style.width = '35px';
    cerrarDiv.style.height = '35px';
    cerrarDiv.style.position = 'absolute';
    cerrarDiv.style.top = '30px';
    cerrarDiv.style.right = '30px';

    const cerrar = document.createElement('img');
    cerrar.src = '../assets/images/CerrarIcono.png';
    cerrar.alt = 'CerrarBoton';
    cerrar.style.width = '35px';
    cerrar.style.height = '35px';
    cerrar.style.cursor = 'pointer';
    cerrar.addEventListener('click', function() {

        ventana.remove();

    });


    cerrarDiv.appendChild(cerrar);
    ventana.appendChild(cerrarDiv);

    const tituloDiv = document.createElement("div");
    tituloDiv.style.display = 'flex';
    tituloDiv.style.justifyContent = 'center';
    tituloDiv.style.alignItems = 'center';

    const titulo = document.createElement('h6');
    titulo.style.textAlign = 'center';
    titulo.textContent = 'RESULTADOS';
    titulo.style.fontSize = '22px';
    titulo.style.fontWeight = '700';

    tituloDiv.appendChild(titulo);

    ventana.appendChild(tituloDiv)
    sectionVentana.appendChild(ventana);

}

const data = [
    {
        "departamento": "Antioquia",
        "municipios": [
            "Medellín",
            "Abejorral",
            "Abriaquí",
            "Alejandría",
            "Amagá",
            "Amalfi",
            "Andes",
            "Angelópolis",
            "Angostura",
            "Anorí",
            "Anza",
            "Apartadó",
            "Arboletes",
            "Argelia",
            "Armenia",
            "Barbosa",
            "Bello",
            "Betania",
            "Betulia",
            "Ciudad Bolívar",
            "Briceño",
            "Buriticá",
            "Cáceres",
            "Caicedo",
            "Caldas",
            "Campamento",
            "Cañasgordas",
            "Caracolí",
            "Caramanta",
            "Carepa",
            "Carolina",
            "Caucasia",
            "Chigorodó",
            "Cisneros",
            "Cocorná",
            "Concepción",
            "Concordia",
            "Copacabana",
            "Dabeiba",
            "Don Matías",
            "Ebéjico",
            "El Bagre",
            "Entrerrios",
            "Envigado",
            "Fredonia",
            "Giraldo",
            "Girardota",
            "Gómez Plata",
            "Guadalupe",
            "Guarne",
            "Guatapé",
            "Heliconia",
            "Hispania",
            "Itagui",
            "Ituango",
            "Belmira",
            "Jericó",
            "La Ceja",
            "La Estrella",
            "La Pintada",
            "La Unión",
            "Liborina",
            "Maceo",
            "Marinilla",
            "Montebello",
            "Murindó",
            "Mutatá",
            "Nariño",
            "Necoclí",
            "Nechí",
            "Olaya",
            "Peñol",
            "Peque",
            "Pueblorrico",
            "Puerto Berrío",
            "Puerto Nare",
            "Puerto Triunfo",
            "Remedios",
            "Retiro",
            "Rionegro",
            "Sabanalarga",
            "Sabaneta",
            "Salgar",
            "San Francisco",
            "San Jerónimo",
            "San Luis",
            "San Pedro",
            "San Rafael",
            "San Roque",
            "San Vicente",
            "Santa Bárbara",
            "Santo Domingo",
            "El Santuario",
            "Segovia",
            "Sopetrán",
            "Támesis",
            "Tarazá",
            "Tarso",
            "Titiribí",
            "Toledo",
            "Turbo",
            "Uramita",
            "Urrao",
            "Valdivia",
            "Valparaíso",
            "Vegachí",
            "Venecia",
            "Yalí",
            "Yarumal",
            "Yolombó",
            "Yondó",
            "Zaragoza",
            "San Pedro de Uraba",
            "Santafé de Antioquia",
            "Santa Rosa de Osos",
            "San Andrés de Cuerquía",
            "Vigía del Fuerte",
            "San José de La Montaña",
            "San Juan de Urabá",
            "El Carmen de Viboral",
            "San Carlos"
        ]
    },
    {
        "departamento": "Boyacá",
        "municipios": [
            "Tununguá",
            "Motavita",
            "Ciénega",
            "Tunja",
            "Almeida",
            "Aquitania",
            "Arcabuco",
            "Berbeo",
            "Betéitiva",
            "Boavita",
            "Boyacá",
            "Briceño",
            "Buena Vista",
            "Busbanzá",
            "Caldas",
            "Campohermoso",
            "Cerinza",
            "Chinavita",
            "Chiquinquirá",
            "Chiscas",
            "Chita",
            "Chitaraque",
            "Chivatá",
            "Cómbita",
            "Coper",
            "Corrales",
            "Covarachía",
            "Cubará",
            "Cucaita",
            "Cuítiva",
            "Chíquiza",
            "Chivor",
            "Duitama",
            "El Cocuy",
            "El Espino",
            "Firavitoba",
            "Floresta",
            "Gachantivá",
            "Gameza",
            "Garagoa",
            "Guacamayas",
            "Guateque",
            "Guayatá",
            "Güicán",
            "Iza",
            "Jenesano",
            "Jericó",
            "Labranzagrande",
            "La Capilla",
            "La Victoria",
            "Macanal",
            "Maripí",
            "Miraflores",
            "Mongua",
            "Monguí",
            "Moniquirá",
            "Muzo",
            "Nobsa",
            "Nuevo Colón",
            "Oicatá",
            "Otanche",
            "Pachavita",
            "Páez",
            "Paipa",
            "Pajarito",
            "Panqueba",
            "Pauna",
            "Paya",
            "Pesca",
            "Pisba",
            "Puerto Boyacá",
            "Quípama",
            "Ramiriquí",
            "Ráquira",
            "Rondón",
            "Saboyá",
            "Sáchica",
            "Samacá",
            "San Eduardo",
            "San Mateo",
            "Santana",
            "Santa María",
            "Santa Sofía",
            "Sativanorte",
            "Sativasur",
            "Siachoque",
            "Soatá",
            "Socotá",
            "Socha",
            "Sogamoso",
            "Somondoco",
            "Sora",
            "Sotaquirá",
            "Soracá",
            "Susacón",
            "Sutamarchán",
            "Sutatenza",
            "Tasco",
            "Tenza",
            "Tibaná",
            "Tinjacá",
            "Tipacoque",
            "Toca",
            "Tópaga",
            "Tota",
            "Turmequé",
            "Tutazá",
            "Umbita",
            "Ventaquemada",
            "Viracachá",
            "Zetaquira",
            "Togüí",
            "Villa de Leyva",
            "Paz de Río",
            "Santa Rosa de Viterbo",
            "San Pablo de Borbur",
            "San Luis de Gaceno",
            "San José de Pare",
            "San Miguel de Sema",
            "Tuta"
        ]
    },
    {
        "departamento": "Córdoba",
        "municipios": [
            "San Bernardo del Viento",
            "Montería",
            "Ayapel",
            "Buenavista",
            "Canalete",
            "Cereté",
            "Chimá",
            "Chinú",
            "Cotorra",
            "Lorica",
            "Los Córdobas",
            "Momil",
            "Moñitos",
            "Planeta Rica",
            "Pueblo Nuevo",
            "Puerto Escondido",
            "Purísima",
            "Sahagún",
            "San Andrés Sotavento",
            "San Antero",
            "San Pelayo",
            "Tierralta",
            "Tuchín",
            "Valencia",
            "San José de Uré",
            "Ciénaga de Oro",
            "San Carlos"
        ]
    },
    {
        "departamento": "Chocó",
        "municipios": [
            "Istmina",
            "Quibdó",
            "Acandí",
            "Alto Baudo",
            "Atrato",
            "Bagadó",
            "Bahía Solano",
            "Bajo Baudó",
            "Bojaya",
            "Cértegui",
            "Condoto",
            "Juradó",
            "Lloró",
            "Medio Atrato",
            "Medio Baudó",
            "Medio San Juan",
            "Nóvita",
            "Nuquí",
            "Río Iro",
            "Río Quito",
            "Riosucio",
            "Sipí",
            "Unguía",
            "El Litoral del San Juan",
            "El Cantón del San Pablo",
            "El Carmen de Atrato",
            "San José del Palmar",
            "Belén de Bajira"
        ]
    },
    {
        "departamento": "Nariño",
        "municipios": [
            "Santacruz",
            "Pasto",
            "Albán",
            "Aldana",
            "Ancuyá",
            "Barbacoas",
            "Colón",
            "Consaca",
            "Contadero",
            "Córdoba",
            "Cuaspud",
            "Cumbal",
            "Cumbitara",
            "El Charco",
            "El Peñol",
            "El Rosario",
            "El Tambo",
            "Funes",
            "Guachucal",
            "Guaitarilla",
            "Gualmatán",
            "Iles",
            "Imués",
            "Ipiales",
            "La Cruz",
            "La Florida",
            "La Llanada",
            "La Tola",
            "La Unión",
            "Leiva",
            "Linares",
            "Los Andes",
            "Magüí",
            "Mallama",
            "Mosquera",
            "Nariño",
            "Olaya Herrera",
            "Ospina",
            "Francisco Pizarro",
            "Policarpa",
            "Potosí",
            "Providencia",
            "Puerres",
            "Pupiales",
            "Ricaurte",
            "Roberto Payán",
            "Samaniego",
            "Sandoná",
            "San Bernardo",
            "San Lorenzo",
            "San Pablo",
            "Santa Bárbara",
            "Sapuyes",
            "Taminango",
            "Tangua",
            "Túquerres",
            "Yacuanquer",
            "San Pedro de Cartago",
            "El Tablón de Gómez"
        ]
    },
    {
        "departamento": "Santander",
        "municipios": [
            "Puerto Wilches",
            "Puerto Parra",
            "Bucaramanga",
            "Aguada",
            "Albania",
            "Aratoca",
            "Barbosa",
            "Barichara",
            "Barrancabermeja",
            "Betulia",
            "Bolívar",
            "Cabrera",
            "California",
            "Carcasí",
            "Cepitá",
            "Cerrito",
            "Charalá",
            "Charta",
            "Chipatá",
            "Cimitarra",
            "Concepción",
            "Confines",
            "Contratación",
            "Coromoro",
            "Curití",
            "El Guacamayo",
            "El Playón",
            "Encino",
            "Enciso",
            "Florián",
            "Floridablanca",
            "Galán",
            "Gambita",
            "Girón",
            "Guaca",
            "Guadalupe",
            "Guapotá",
            "Guavatá",
            "Güepsa",
            "Jesús María",
            "Jordán",
            "La Belleza",
            "Landázuri",
            "La Paz",
            "Lebríja",
            "Los Santos",
            "Macaravita",
            "Málaga",
            "Matanza",
            "Mogotes",
            "Molagavita",
            "Ocamonte",
            "Oiba",
            "Onzaga",
            "Palmar",
            "Páramo",
            "Piedecuesta",
            "Pinchote",
            "Puente Nacional",
            "Rionegro",
            "San Andrés",
            "San Gil",
            "San Joaquín",
            "San Miguel",
            "Santa Bárbara",
            "Simacota",
            "Socorro",
            "Suaita",
            "Sucre",
            "Suratá",
            "Tona",
            "Vélez",
            "Vetas",
            "Villanueva",
            "Zapatoca",
            "Palmas del Socorro",
            "San Vicente de Chucurí",
            "San José de Miranda",
            "Santa Helena del Opón",
            "Sabana de Torres",
            "El Carmen de Chucurí",
            "Valle de San José",
            "San Benito",
            "Hato"
        ]
    },
    {
        "departamento": "Meta",
        "municipios": [
            "Uribe",
            "Villavicencio",
            "Acacias",
            "Cabuyaro",
            "Cubarral",
            "Cumaral",
            "El Calvario",
            "El Castillo",
            "El Dorado",
            "Granada",
            "Guamal",
            "Mapiripán",
            "Mesetas",
            "La Macarena",
            "Lejanías",
            "Puerto Concordia",
            "Puerto Gaitán",
            "Puerto López",
            "Puerto Lleras",
            "Puerto Rico",
            "Restrepo",
            "San Juanito",
            "San Martín",
            "Vista Hermosa",
            "Barranca de Upía",
            "Fuente de Oro",
            "San Carlos de Guaroa",
            "San Juan de Arama"
        ]
    },
    {
        "departamento": "Atlántico",
        "municipios": [
            "Barranquilla",
            "Baranoa",
            "Candelaria",
            "Galapa",
            "Luruaco",
            "Malambo",
            "Manatí",
            "Piojó",
            "Polonuevo",
            "Sabanagrande",
            "Sabanalarga",
            "Santa Lucía",
            "Santo Tomás",
            "Soledad",
            "Suan",
            "Tubará",
            "Usiacurí",
            "Juan de Acosta",
            "Palmar de Varela",
            "Campo de La Cruz"
        ]
    },
    {
        "departamento": "Bolívar",
        "municipios": [
            "Achí",
            "Arenal",
            "Arjona",
            "Arroyohondo",
            "Calamar",
            "Cantagallo",
            "Cicuco",
            "Córdoba",
            "Clemencia",
            "El Guamo",
            "Magangué",
            "Mahates",
            "Margarita",
            "Montecristo",
            "Mompós",
            "Morales",
            "Norosí",
            "Pinillos",
            "Regidor",
            "Río Viejo",
            "San Estanislao",
            "San Fernando",
            "San Juan Nepomuceno",
            "Santa Catalina",
            "Santa Rosa",
            "Simití",
            "Soplaviento",
            "Talaigua Nuevo",
            "Tiquisio",
            "Turbaco",
            "Turbaná",
            "Villanueva",
            "Barranco de Loba",
            "Santa Rosa del Sur",
            "Hatillo de Loba",
            "El Carmen de Bolívar",
            "San Martín de Loba",
            "Altos del Rosario",
            "San Jacinto del Cauca",
            "San Pablo de Borbur",
            "San Jacinto"
        ]
    },
    {
        "departamento": "Caldas",
        "municipios": [
            "Manizales",
            "Aguadas",
            "Anserma",
            "Aranzazu",
            "Belalcázar",
            "Chinchiná",
            "Filadelfia",
            "La Dorada",
            "La Merced",
            "Manzanares",
            "Marmato",
            "Marulanda",
            "Neira",
            "Norcasia",
            "Pácora",
            "Palestina",
            "Pensilvania",
            "Riosucio",
            "Risaralda",
            "Salamina",
            "Samaná",
            "San José",
            "Supía",
            "Victoria",
            "Villamaría",
            "Viterbo"
        ]
    },
    {
        "departamento": "Caquetá",
        "municipios": [
            "Florencia",
            "Albania",
            "Curillo",
            "El Doncello",
            "El Paujil",
            "Morelia",
            "Puerto Rico",
            "Solano",
            "Solita",
            "Valparaíso",
            "San José del Fragua",
            "Belén de Los Andaquies",
            "Cartagena del Chairá"
        ]
    },
    {
        "departamento": "Cauca",
        "municipios": [
            "Popayán",
            "Almaguer",
            "Argelia",
            "Balboa",
            "Bolívar",
            "Buenos Aires",
            "Cajibío",
            "Caldono",
            "Caloto",
            "Corinto",
            "El Tambo",
            "Florencia",
            "Guachené",
            "Guapi",
            "Inzá",
            "Jambaló",
            "La Sierra",
            "La Vega",
            "López",
            "Mercaderes",
            "Miranda",
            "Morales",
            "Padilla",
            "Patía",
            "Piamonte",
            "Piendamó",
            "Puerto Tejada",
            "Puracé",
            "Rosas",
            "Santa Rosa",
            "Silvia",
            "Sotara",
            "Suárez",
            "Sucre",
            "Timbío",
            "Timbiquí",
            "Toribio",
            "Totoró",
            "Villa Rica",
            "Santander de Quilichao",
            "San Sebastián"
        ]
    },
    {
        "departamento": "Cesar",
        "municipios": [
            "Valledupar",
            "Aguachica",
            "Agustín Codazzi",
            "Astrea",
            "Becerril",
            "Bosconia",
            "Chimichagua",
            "Chiriguaná",
            "Curumaní",
            "El Copey",
            "El Paso",
            "Gamarra",
            "González",
            "La Gloria",
            "Manaure",
            "Pailitas",
            "Pelaya",
            "Pueblo Bello",
            "La Paz",
            "San Alberto",
            "San Diego",
            "San Martín",
            "Tamalameque",
            "Río de Oro",
            "La Jagua de Ibirico"
        ]
    },
    {
        "departamento": "Cundinamarca",
        "municipios": [
            "Anapoima",
            "Arbeláez",
            "Beltrán",
            "Bituima",
            "Bojacá",
            "Cabrera",
            "Cachipay",
            "Cajicá",
            "Caparrapí",
            "Caqueza",
            "Chaguaní",
            "Chipaque",
            "Choachí",
            "Chocontá",
            "Cogua",
            "Cota",
            "Cucunubá",
            "El Colegio",
            "El Rosal",
            "Fomeque",
            "Fosca",
            "Funza",
            "Fúquene",
            "Gachala",
            "Gachancipá",
            "Gachetá",
            "Girardot",
            "Granada",
            "Guachetá",
            "Guaduas",
            "Guasca",
            "Guataquí",
            "Guatavita",
            "Guayabetal",
            "Gutiérrez",
            "Jerusalén",
            "Junín",
            "La Calera",
            "La Mesa",
            "La Palma",
            "La Peña",
            "La Vega",
            "Lenguazaque",
            "Macheta",
            "Madrid",
            "Manta",
            "Medina",
            "Mosquera",
            "Nariño",
            "Nemocón",
            "Nilo",
            "Nimaima",
            "Nocaima",
            "Venecia",
            "Pacho",
            "Paime",
            "Pandi",
            "Paratebueno",
            "Pasca",
            "Puerto Salgar",
            "Pulí",
            "Quebradanegra",
            "Quetame",
            "Quipile",
            "Apulo",
            "Ricaurte",
            "San Bernardo",
            "San Cayetano",
            "San Francisco",
            "Sesquilé",
            "Sibaté",
            "Silvania",
            "Simijaca",
            "Soacha",
            "Subachoque",
            "Suesca",
            "Supatá",
            "Susa",
            "Sutatausa",
            "Tabio",
            "Tausa",
            "Tena",
            "Tenjo",
            "Tibacuy",
            "Tibirita",
            "Tocaima",
            "Tocancipá",
            "Topaipí",
            "Ubalá",
            "Ubaque",
            "Une",
            "Útica",
            "Vianí",
            "Villagómez",
            "Villapinzón",
            "Villeta",
            "Viotá",
            "Zipacón",
            "San Juan de Río Seco",
            "Villa de San Diego de Ubate",
            "Guayabal de Siquima",
            "San Antonio del Tequendama",
            "Agua de Dios",
            "Carmen de Carupa",
            "Vergara"
        ]
    },
    {
        "departamento": "Huila",
        "municipios": [
            "Neiva",
            "Acevedo",
            "Agrado",
            "Aipe",
            "Algeciras",
            "Altamira",
            "Baraya",
            "Campoalegre",
            "Colombia",
            "Elías",
            "Garzón",
            "Gigante",
            "Guadalupe",
            "Hobo",
            "Iquira",
            "Isnos",
            "La Argentina",
            "La Plata",
            "Nátaga",
            "Oporapa",
            "Paicol",
            "Palermo",
            "Palestina",
            "Pital",
            "Pitalito",
            "Rivera",
            "Saladoblanco",
            "Santa María",
            "Suaza",
            "Tarqui",
            "Tesalia",
            "Tello",
            "Teruel",
            "Timaná",
            "Villavieja",
            "Yaguará",
            "San Agustín"
        ]
    },
    {
        "departamento": "La Guajira",
        "municipios": [
            "Riohacha",
            "Albania",
            "Barrancas",
            "Dibula",
            "Distracción",
            "El Molino",
            "Fonseca",
            "Hatonuevo",
            "Maicao",
            "Manaure",
            "Uribia",
            "Urumita",
            "Villanueva",
            "La Jagua del Pilar",
            "San Juan del Cesar"
        ]
    },
    {
        "departamento": "Magdalena",
        "municipios": [
            "Santa Marta",
            "Algarrobo",
            "Aracataca",
            "Ariguaní",
            "Cerro San Antonio",
            "Chivolo",
            "Concordia",
            "El Banco",
            "El Piñon",
            "El Retén",
            "Fundación",
            "Guamal",
            "Nueva Granada",
            "Pedraza",
            "Pivijay",
            "Plato",
            "Remolino",
            "Salamina",
            "San Zenón",
            "Santa Ana",
            "Sitionuevo",
            "Tenerife",
            "Zapayán",
            "Zona Bananera",
            "San Sebastián de Buenavista",
            "Sabanas de San Angel",
            "Pijiño del Carmen"
        ]
    },
    {
        "departamento": "Quindío",
        "municipios": [
            "Armenia",
            "Buenavista",
            "Circasia",
            "Córdoba",
            "Filandia",
            "La Tebaida",
            "Montenegro",
            "Pijao",
            "Quimbaya",
            "Salento"
        ]
    },
    {
        "departamento": "Risaralda",
        "municipios": [
            "Pereira",
            "Apía",
            "Balboa",
            "Dosquebradas",
            "Guática",
            "La Celia",
            "La Virginia",
            "Marsella",
            "Mistrató",
            "Pueblo Rico",
            "Quinchía",
            "Santuario",
            "Santa Rosa de Cabal",
            "Belén de Umbría"
        ]
    },
    {
        "departamento": "Sucre",
        "municipios": [
            "Sincelejo",
            "Buenavista",
            "Caimito",
            "Coloso",
            "Coveñas",
            "Chalán",
            "El Roble",
            "Galeras",
            "Guaranda",
            "La Unión",
            "Los Palmitos",
            "Majagual",
            "Morroa",
            "Ovejas",
            "Palmito",
            "San Benito Abad",
            "San Marcos",
            "San Onofre",
            "San Pedro",
            "Sucre",
            "Tolú Viejo",
            "San Luis de Sincé",
            "San Juan de Betulia",
            "Santiago de Tolú"
        ]
    },
    {
        "departamento": "Tolima",
        "municipios": [
            "Alpujarra",
            "Alvarado",
            "Ambalema",
            "Armero",
            "Ataco",
            "Cajamarca",
            "Chaparral",
            "Coello",
            "Coyaima",
            "Cunday",
            "Dolores",
            "Espinal",
            "Falan",
            "Flandes",
            "Fresno",
            "Guamo",
            "Herveo",
            "Honda",
            "Icononzo",
            "Mariquita",
            "Melgar",
            "Murillo",
            "Natagaima",
            "Ortega",
            "Palocabildo",
            "Piedras",
            "Planadas",
            "Prado",
            "Purificación",
            "Rio Blanco",
            "Roncesvalles",
            "Rovira",
            "Saldaña",
            "Santa Isabel",
            "Venadillo",
            "Villahermosa",
            "Villarrica",
            "Valle de San Juan",
            "Carmen de Apicala",
            "San Luis",
            "San Antonio"
        ]
    },
    {
        "departamento": "Arauca",
        "municipios": [
            "Arauquita",
            "Cravo Norte",
            "Fortul",
            "Puerto Rondón",
            "Saravena",
            "Tame",
            "Arauca"
        ]
    },
    {
        "departamento": "Casanare",
        "municipios": [
            "Yopal",
            "Aguazul",
            "Chámeza",
            "Hato Corozal",
            "La Salina",
            "Monterrey",
            "Pore",
            "Recetor",
            "Sabanalarga",
            "Sácama",
            "Tauramena",
            "Trinidad",
            "Villanueva",
            "San Luis de Gaceno",
            "Paz de Ariporo"
        ]
    },
    {
        "departamento": "Putumayo",
        "municipios": [
            "Mocoa",
            "Colón",
            "Orito",
            "Puerto Caicedo",
            "Puerto Guzmán",
            "Leguízamo",
            "Sibundoy",
            "San Francisco",
            "San Miguel",
            "Santiago",
            "Valle de Guamez"
        ]
    },
    {
        "departamento": "Amazonas",
        "municipios": [
            "Leticia",
            "El Encanto",
            "La Chorrera",
            "La Pedrera",
            "La Victoria",
            "Puerto Arica",
            "Puerto Nariño",
            "Puerto Santander",
            "Tarapacá",
            "Puerto Alegría"
        ]
    },
    {
        "departamento": "Guainía",
        "municipios": [
            "Inírida",
            "Barranco Minas",
            "Mapiripana",
            "San Felipe",
            "Puerto Colombia",
            "La Guadalupe",
            "Cacahual",
            "Pana Pana",
            "Morichal"
        ]
    },
    {
        "departamento": "Vaupés",
        "municipios": [
            "Mitú",
            "Carurú",
            "Taraira",
            "Papunahua",
            "Yavaraté",
            "Pacoa"
        ]
    },
    {
        "departamento": "Vichada",
        "municipios": [
            "Puerto Carreño",
            "La Primavera",
            "Santa Rosalía",
            "Cumaribo"
        ]
    },
    {
        "departamento": "Guaviare",
        "municipios": [
            "Calamar",
            "San José del Guaviare",
            "Miraflores",
            "El Retorno"
        ]
    },
    {
        "departamento": "Archipiélago de San Andrés, Providencia y Santa Catalina",
        "municipios": [
            "Providencia",
            "San Andrés"
        ]
    },
    {
        "departamento": "Bogotá D.C.",
        "municipios": [
            "Bogotá D.C."
        ]
    },
    {
        "departamento": "Norte de Santander",
        "municipios": [
            "Silos",
            "Cácota",
            "Toledo",
            "Mutiscua",
            "El Zulia",
            "Salazar",
            "Cucutilla",
            "Puerto Santander",
            "Gramalote",
            "El Tarra",
            "Teorama",
            "Arboledas"
        ]
    },
    {
        "departamento": "Valle del Cauca",
        "municipios": [
            "El Dovio",
            "Roldanillo",
            "Argelia",
            "Sevilla",
            "Zarzal",
            "El Cerrito",
            "Cartago",
            "Caicedonia",
            "El Cairo",
            "La Unión",
            "Restrepo",
            "Dagua",
            "Guacarí"
        ]
    }
]

const selectEstrato = document.getElementById('estrato');
const inputConsumo = document.getElementById('consumoMensualPromedio');
const selectDepartamento = document.getElementById('departamento');
const selectMunicipio = document.getElementById('municipio');
const csvInput = document.getElementById('datos');
const botonAceptar = document.getElementById('botonAceptar');

botonAceptar.addEventListener('click', function(event){

    event.preventDefault();  // <-- This stops the page from refreshing


    if(selectEstrato.value != '' && 
    inputConsumo.value != "" && 
    selectDepartamento.value != '' && 
    selectMunicipio.value != '' &&
    csvInput.files.length > 0
    ){

        crearResultado(selectEstrato.value, inputConsumo, csvInput)

    }

})


data.forEach(dato =>{

    const option = document.createElement('option');
    option.value = dato.departamento;
    option.textContent = dato.departamento;
    selectDepartamento.appendChild(option); 

})

selectDepartamento.addEventListener('change', function(){

    if(selectDepartamento.value != ''){

        const departamento = data.find(elemnt => elemnt.departamento == selectDepartamento.value);
        const municipios = departamento.municipios;

        municipios.forEach(municipio =>{

                const option = document.createElement('option');
                option.value = municipio;
                option.textContent = municipio;
                selectMunicipio.appendChild(option); 

        })

    }

})

