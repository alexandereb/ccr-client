import Ember from 'ember';

export default Ember.Controller.extend({
  mainInfo: {
   title: 'Refugio',
   calvaryChapel: 'Calvary Chapel',
   link: 'Ver servicio online'
  },
  RegularInfo: {
    title: 'Iglesia Cristiana Calvary Chapel Refugio',
    description: [
      { info: 'Te invitamos a nuestras reuniones todos los Domingos a las 10:30 horas en calle Los copihues #5462, comuna de Lo Prado, Santiago.'},
      { info: 'Estudiamos la biblia sistematicamente, versiculo a versiculo, capitulo a capitulo. De esta manera entendemos completamente la palabra de Dios, en orden cronologico y sin evadir ningun versiculo.'}
    ],
    links: [
      'algo'
    ]
  },
    Start: {
    title: 'Por donde empezar',
      list: [
        { title: 'Ministerios', link: 'ministeries'},
          { title: 'Media', link: 'media'},
        { title: 'Eventos', link:'news'},
        { title: 'Pastor', link: 'pastor'}
      ]
  }
});
