const ASSET = `${import.meta.env.BASE_URL}assets/`;

export const serviceCategories = [
  { id:'nails', title:'Nail Studio', subtitle:'Manos · manicure · técnicas', image:`${ASSET}nails/8.webp`, intro:'Diseños, cuidado y técnicas para expresar tu estilo.' },
  { id:'pedicure', title:'Pedicure & Spa', subtitle:'Pies · Jelly Spa · bienestar', image:`${ASSET}ritual/ritual-pedicure.jpg`, intro:'Un momento de descanso, limpieza y cuidado para tus pies.' },
  { id:'hair', title:'Hair Studio', subtitle:'Corte · color · tratamientos', image:`${ASSET}hair/5.webp`, intro:'Cuidado capilar y estilismo para acompañar tu esencia.' },
  { id:'brows', title:'Brows & Lashes', subtitle:'Cejas · henna · pestañas', image:`${ASSET}ritual/ritual-brows.jpg`, intro:'Detalles que enmarcan tu mirada de forma armoniosa.' },
  { id:'depilation', title:'Depilación', subtitle:'Facial · corporal', image:`${ASSET}ritual/ritual-bodycare.jpg`, intro:'Servicios de cuidado facial y corporal.' }
];

export const services = [
  // NAIL STUDIO — precios y nombres tomados de la lista PDF. Valores marcados "desde" se conservan como tales.
  {id:'n1',cat:'nails',name:'Limpieza tradicional o cambio de esmalte',price:18000,priceLabel:'$18.000',duration:'A consultar',description:'Limpieza y acabado tradicional para tus manos.',image:`${ASSET}nails/8.webp`},
  {id:'n2',cat:'nails',name:'Manicure tradicional',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Cuidado de uñas y esmaltado tradicional.',image:`${ASSET}nails/1.webp`},
  {id:'n3',cat:'nails',name:'Retiro de esmalte tradicional',price:15000,priceLabel:'$15.000',duration:'A consultar',description:'Retiro de producto tradicional.',image:`${ASSET}nails/4.webp`},
  {id:'n4',cat:'nails',name:'Retiro semipermanente y base rubber',price:20000,priceLabel:'$20.000',duration:'A consultar',description:'Retiro cuidadoso de producto semipermanente y rubber.',image:`${ASSET}nails/6.webp`},
  {id:'n5',cat:'nails',name:'Manicure semipermanente',price:45000,priceLabel:'Desde $45.000',duration:'A consultar',description:'Color semipermanente con acabado brillante.',image:`${ASSET}nails/3.webp`},
  {id:'n6',cat:'nails',name:'Manicure semipermanente con base rubber',price:60000,priceLabel:'Desde $60.000',duration:'A consultar',description:'Refuerzo con base rubber y esmaltado semipermanente.',image:`${ASSET}nails/7.webp`},
  {id:'n7',cat:'nails',name:'Manicure técnica dipping',price:75000,priceLabel:'Desde $75.000',duration:'A consultar',description:'Técnica dipping para un acabado resistente.',image:`${ASSET}nails/2.webp`},
  {id:'n8',cat:'nails',name:'Manicure con extensión press-on',price:90000,priceLabel:'Desde $90.000',duration:'A consultar',description:'Extensión y diseño con sistema press-on.',image:`${ASSET}nails/5.webp`},

  // PEDICURE & SPA — valores en el orden presentado en la página 3 del PDF.
  {id:'p1',cat:'pedicure',name:'Limpieza de pies',price:20000,priceLabel:'$20.000',duration:'A consultar',description:'Limpieza y cuidado básico de los pies.',image:`${ASSET}ritual/ritual-pedicure.jpg`},
  {id:'p2',cat:'pedicure',name:'Pedicure tradicional',price:25000,priceLabel:'$25.000',duration:'A consultar',description:'Cuidado de uñas y esmaltado tradicional.',image:`${ASSET}ritual/ritual-pedicure.jpg`},
  {id:'p3',cat:'pedicure',name:'Pedicure semipermanente',price:55000,priceLabel:'$55.000',duration:'A consultar',description:'Pedicure con esmaltado semipermanente.',image:`${ASSET}ritual/ritual-pedicure.jpg`},
  {id:'p4',cat:'pedicure',name:'Pedicure Jelly Spa tradicional',price:50000,priceLabel:'$50.000',duration:'A consultar',description:'Experiencia Jelly Spa con acabado tradicional.',image:`${ASSET}ritual/ritual-pedicure.jpg`},
  {id:'p5',cat:'pedicure',name:'Pedicure Jelly Spa semipermanente',price:80000,priceLabel:'$80.000',duration:'A consultar',description:'Experiencia Jelly Spa con esmaltado semipermanente.',image:`${ASSET}ritual/ritual-pedicure.jpg`},

  // HAIR STUDIO — se mantienen las tarifas legibles y se señala que el valor depende del largo/técnica cuando aplica.
  {id:'h1',cat:'hair',name:'Corte y cepillado',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Corte y acabado con cepillado.',image:`${ASSET}hair/1.webp`},
  {id:'h2',cat:'hair',name:'Planchado u ondas',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Estilizado liso u ondas.',image:`${ASSET}hair/2.webp`},
  {id:'h3',cat:'hair',name:'Cepillado + planchado',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Cepillado y acabado con plancha.',image:`${ASSET}hair/3.webp`},
  {id:'h4',cat:'hair',name:'Cepillado + ondas',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Cepillado y ondas.',image:`${ASSET}hair/4.webp`},
  {id:'h5',cat:'hair',name:'Peinado para eventos',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Peinado para ocasiones especiales.',image:`${ASSET}hair/5.webp`},
  {id:'h6',cat:'hair',name:'Tinte de un solo tono',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Coloración de un solo tono. Valor final según largo y producto.',image:`${ASSET}hair/6.webp`},
  {id:'h7',cat:'hair',name:'Repolarización',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Tratamiento de acondicionamiento capilar.',image:`${ASSET}hair/1.webp`},
  {id:'h8',cat:'hair',name:'Hidratación de rizos',price:20000,priceLabel:'Desde $20.000',duration:'A consultar',description:'Cuidado e hidratación para cabello rizado.',image:`${ASSET}hair/2.webp`},
  {id:'h9',cat:'hair',name:'Repolarización + hidratación de rizos',price:30000,priceLabel:'Desde $30.000',duration:'A consultar',description:'Combinación de tratamiento e hidratación.',image:`${ASSET}hair/3.webp`},
  {id:'h10',cat:'hair',name:'Keratina (ritual botánico)',price:30000,priceLabel:'Desde $30.000 · confirmar tarifa',duration:'A consultar',description:'Servicio mencionado en la lista; confirmar precio y alcance antes de publicar.',image:`${ASSET}hair/4.webp`,needsReview:true},
  {id:'h11',cat:'hair',name:'Alisado saludable Juliet Valencia',price:35000,priceLabel:'Desde $35.000 · confirmar tarifa',duration:'A consultar',description:'Servicio mencionado en la lista; confirmar precio y alcance antes de publicar.',image:`${ASSET}hair/5.webp`,needsReview:true},

  // BROWS & LASHES
  {id:'b1',cat:'brows',name:'Depilación de cejas',price:15000,priceLabel:'$15.000',duration:'A consultar',description:'Definición y limpieza de cejas.',image:`${ASSET}ritual/ritual-brows.jpg`},
  {id:'b2',cat:'brows',name:'Diseño de cejas en henna',price:45000,priceLabel:'$45.000',duration:'A consultar',description:'Diseño de cejas con henna.',image:`${ASSET}ritual/ritual-brows.jpg`},
  {id:'b3',cat:'brows',name:'Puesta de pestañas punto a punto',price:30000,priceLabel:'$30.000',duration:'A consultar',description:'Aplicación de pestañas punto a punto.',image:`${ASSET}ritual/ritual-brows.jpg`},

  // DEPILACIÓN
  {id:'d1',cat:'depilation',name:'Depilación de bozo',price:10000,priceLabel:'$10.000',duration:'A consultar',description:'Depilación de zona de bozo.',image:`${ASSET}ritual/ritual-bodycare.jpg`},
  {id:'d2',cat:'depilation',name:'Depilación de axilas',price:18000,priceLabel:'$18.000',duration:'A consultar',description:'Depilación de axilas.',image:`${ASSET}ritual/ritual-bodycare.jpg`},
  {id:'d3',cat:'depilation',name:'Depilación de media pierna',price:25000,priceLabel:'$25.000',duration:'A consultar',description:'Depilación de media pierna.',image:`${ASSET}ritual/ritual-bodycare.jpg`},
  {id:'d4',cat:'depilation',name:'Depilación de pierna completa',price:50000,priceLabel:'$50.000',duration:'A consultar',description:'Depilación de pierna completa.',image:`${ASSET}ritual/ritual-bodycare.jpg`}
];

export const products = [
  {id:'pr1',name:'Esmaltes y tratamientos para uñas',brand:'Marcas multimarca',category:'Uñas',image:`${ASSET}beauty-store.jpg`,description:'Colores, bases, top coat y productos de cuidado. Referencia de catálogo; confirmar marcas y stock.'},
  {id:'pr2',name:'Cuidado capilar',brand:'Marcas multimarca',category:'Cabello',image:`${ASSET}ritual/ritual-haircare.jpg`,description:'Shampoo, acondicionadores, mascarillas y tratamientos.'},
  {id:'pr3',name:'Cuidado corporal',brand:'Línea RITUAL · concepto',category:'Cuidado corporal',image:`${ASSET}ritual/ritual-bodycare.jpg`,description:'Cremas, aceites, exfoliantes y productos para rutinas de autocuidado.'},
  {id:'pr4',name:'Maquillaje y accesorios',brand:'Marcas multimarca',category:'Maquillaje',image:`${ASSET}beauty-store.jpg`,description:'Productos de maquillaje y herramientas de belleza.'}
];

export const formatCOP = value => new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(value);
