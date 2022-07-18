import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../book-detail/book-detail.component';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books: Book[];
  bgImage: string;
  libraryUpdateEmitter: EventEmitter<Book[]> = new EventEmitter<Book[]>();
  bgImageUpdateEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.books = [{
      title:'Matrix',
      description:'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.',
      author:'the Wachowskis',
      image:'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg'
    },
    {
      title: 'Crash Bandicoot',
      description: 'El Topo que Gira. The premise chronicles the creation of the titular Crash, a bandicoot who has been uplifted by the mad scientist Doctor Neo Cortex. The story follows Crash as he aims to prevent Cortexs plans for world domination and rescue his girlfriend Tawna, a female bandicoot also created by Cortex.',
      author: 'Naughty Dog',
      image: 'https://preview.redd.it/0na3mtd688l41.jpg?auto=webp&s=75b28f8447424e23e03e5fe4b93dde8eb1c903bd'
    },
    {
      title: 'Defi 5 C1',
      description:"Défi est une nouvelle collection novatrice et motivante pour les grands adolescents et adultes qui apprennent le Français Langue étrangère. C'est une collection complète qui met la culture au centre de l'apprentissage. Elle propose, en plus du livre et du cahier, de nombreuses ressources complémentaires en ligne sur espacevirtuel.emdl.fr pour enrichir le parcours papier : des défis numériques supplémentaires qui mettent à profit les habitudes numériques des apprenants, des exercices autocorrectifs, des capsules de grammaire et de phonétique, et toutes les ressources de la collection (fichiers audio, vidéos, guide pédagogique...).",
      author: 'Maison des Langues',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Oybc3ccxL._SX352_BO1,204,203,200_.jpg'
    },
    {
      title: 'Der Kleine Prinz',
      description: "Antoine Marie Jean-Baptiste Roger Vicomte de Saint-Exupery wuchs als Sohn des Comte Jean-Marc de Saint Exupery in Sedfrankreich auf. Schon im Alter von zwelf Jahren, als er mit einem befreundeten Piloten zum ersten Mal in die Lefte starten durfte, entdeckte er seine Faszination fer das Fliegen. Speter geherte er zu den Pionieren am Himmel, baute mit anderen eine franzesische Luftfracht-Linie auf, danach in Sedamerika von Buenos Aires eber die Anden nach Chile. Dann war er Testpilot, Erkunder neuer Flugrouten und nebenbei erfolgreicher Autor e schon ehe er sich an die Arbeit zum eKleinen Prinzene machte.",
      author: 'Antoine Marie Jean-Baptiste Roger Vicomte de Saint-Exupery',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41tVWUjF+JL._SX322_BO1,204,203,200_.jpg'
    }];
    this.bgImage = 'https://img.freepik.com/free-photo/book-stack-library-room-blurred-bookshelf-background_42691-514.jpg?w=2000';
   }

   addBook(book: Book){
    this.books.push(book);
    this.libraryUpdateEmitter.emit(this.books);
   }

   changeBgImage(url: string){
    this.bgImage = url;
    this.bgImageUpdateEmitter.emit(this.bgImage);
   }
}
