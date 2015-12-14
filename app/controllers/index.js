import Ember from 'ember';

export default Ember.Controller.extend({
  mainInfo: {
   title: 'Refugio',
   calvaryChapel: 'Calvary Chapel'
  },
  RegularInfo: {
    title: 'Iglesia Cristiana Calvary Chapel Refugio',
    description: 'Estudiamos la biblia sistematicamente, versiculo a versiculo, apitulo a capitulo.',
    links: [
      'algo'
    ]
  },
  Start: {
    title: 'Por donde empezar',
      list: [
        { title: 'Recursos', info: 'Revisa nuestos estudios para descargar y aprende más de la palabra de Dios', link: 'link'},
        { title: 'Media', info: 'Videos, audios, imagenes y mucho más', link: 'dasdsa'},
        { title: 'Eventos', info: 'Informate de los futuros eventos', link: 'dsdas'}
      ]
  }
});
