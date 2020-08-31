import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ScrollSpy } from 'materialize-css';
import { MenuTab } from '../../../shared/models/menuTab';
import { Brick } from '../../../shared/models/brick';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit {
  highlight = 'Wir können jederzeit Unterstützung gebrauchen!';
  // change to https://democracy-life.web.app/ in production
  link = 'http://localhost:4200/';
  ideenID = 'ideen';
  gruppenID = 'gruppen';
  eventID = 'events';
  searchID = 'search';
  kommunikationID = 'kommunikation';
  datenID = 'daten';
  prototypID = 'prototyp';
  clickDummyID = 'clickdummy';
  supportID = 'support';
  contactID = 'kontakt';
  teamID = 'team';
  faqID = 'faq';
  impressumID = 'impressum';

  ideasHeadline = 'Ideen & Anträge';
  ideasBrick: Brick[] = [
    {
      title: 'Entwickeln',
      text: `Das Herz einer Partei sind politische Ideen, Anträge und Debatten. Unsere App ermöglicht es Ideen
      gemeinsam zu entwickeln. Ein integriertes Vorschlags- und Abstimmungssystem strukturiert den
      Erstellprozess.`
    },
    {
      title: 'Automatisieren',
      text: `Die Idee wird automatisch an Events zur Beratung und Entscheidung weitergeleitet.`
    },
    {
      title: 'Teilen',
      text: `Ideen werden beworben und in andere soziale Netzwerke geteilt. Wer die Idee gut findet, kann die Idee
      klonen.`
    },
    {
      title: 'Vereinfachen',
      text: `Neue Supporter stärken die Relevanz. Mehr Raum für die Idee, weniger Raum für die
      Bürokratie.`
    }
  ];

  ideasVideos: string[] = [
    '../assets/videos/Idee Erstellen-12.m4v',
    '../assets/videos/Idee Bearbeiten-11.m4v',
    '../assets/videos/Idee Teilen-13.m4v',
    '../assets/videos/Idee Unterstützer-10.m4v'
  ];

  groupVideos: string[] = [
    '../assets/videos/Group Erstellen-7.m4v',
    '../assets/videos/Group Aufgaben-5.m4v',
    '../assets/videos/Group Events-8.m4v',
    '../assets/videos/Group Ideen-6.m4v',
    '../assets/videos/Group Übersicht Und Administration-9.m4v',
  ];

  eventVideos: string[] = [
    '../assets/videos/Event Erstellen-2.m4v',
    '../assets/videos/Event Themen Hinzufügen-1.m4v',
    '../assets/videos/Event Wählen-3.m4v',
    '../assets/videos/Events Protokolle Und Aufgaben-4.m4v'
  ];

  communicationVideos: string[] = [
    '../assets/videos/Kommunikation-14.m4v',
  ];

  searchVideos: string[] = [
    '../assets/videos/Suche-16.m4v'
  ];

  dataVideos: string[] = [
    '../assets/videos/Registrierung-15.m4v'
  ];

  groupsHeadline = 'Gruppen';
  groupsBrick: Brick[] = [
    {
      title: 'Organisieren',
      text: `Jede Gliederung hat ihren eigenen "Space". Ein gewähltes Administratorenteam leitet den Space.
      Ein Wiki bietet eine Übersicht über gewählte
      Mandatsträger, Untergruppen und politische Kerninhalte.`
    },
    {
      title: 'Diskutieren',
      text: `Jeder Space enthält einen Stream, in dem gemeinsam diskutiert wird. Tools zum Projektmanagement und ein
      Event-Tool ermöglichen mehr Power im Wahlkampf!`
    },
    {
      title: 'Informieren',
      text: `Alle Mitglieder werden automatisch über News informiert.`
    }
  ];

  eventsHeadline = 'Events';
  eventsBrick: Brick[] = [
    {
      title: 'Entscheiden',
      text: `Unser System automatisiert Veranstaltungen im Hintergrund und schafft Zeit für das Wesentliche:
      Politik zu gestalten und Entscheidungen zu treffen!`
    },
    {
      title: 'Koordinieren',
      text: `Unser Managementsystem für Events erstellt eine automatisierte Timeline. Themen
      werden integriert (z.B. Wahlen, Ideen usw.), Debatten koordiniert.`
    },
    {
      title: 'Aktualisieren',
      text: `Protokolle, ToDo Listen und Antragsweiterleitung werden gestartet. Enscheidungen liegen in Real Time
      weltweit vor. Politik wird schneller und nachvollziehbarer.`
    }
  ];

  searchHeadline = 'Smart Search';
  searchBrick: Brick[] = [
    {
      title: 'Inkludieren',
      text: `Unser System schafft einen dezentralen Zugang zu allen Informationen über
      politische Ideen,
      Schwerpuntke von Politikern, Anträge, Events, Aufgaben und Gliederungen - zu jedem Zeitpunkt und jedem
      Ort dieser Welt!`
    },
    {
      title: 'Finden',
      text: `Damit Informationen einen Mehrwert liefern, müssen die richtigen Informationen zum richtigen Zeitpunkt
      greifbar sein. Dazu liefern wir ein intelligentes Suchsystem mit.`
    },
    {
      title: 'Nutzen',
      text: `State of the art searching ermöglicht bessere Entscheidungen und einen Wissensvorsprung für bessere
      Kampagnen und bessere Wahlkämpfe.`
    }
  ];

  communicationHeadline = 'Kommunikation';
  communicationBrick: Brick[] = [
    {
      title: 'Chatten',
      text: `Moderne Chats ermöglichen moderne Kommunikation. Plattformübergreifende
      Integration ermöglicht die Integration klassischer Emailkommunikation.`
    },
    {
      title: 'Einbinden',
      text: `Unsere Streams binden alle Mitglieder in Diskussionen ein - unabhänig davon, ob sie Kinder ins Bett
      bringen oder Nachtschicht haben. Streams bilden das Herzstück unser internen Kommunikation. Perspektivisch können
      Verhinderte über Videochats zu Veranstaltungen dazukommen.`
    },
    {
      title: 'Erneuern',
      text: `Moderne Kommunikationstools ermöglichen moderne Arbeitsweisen und damit die Einbindung junger und neuer
      Mitglieder!`
    }
  ];

  dataHeadline = 'Daten & Inklusion';
  dataBrick: Brick[] = [
    {
      title: 'Vertraulich',
      text: `Die App benötigt nur Informationen, die bereits bekannt sind: Wo du wohnst, wo du politisch aktiv bist
      und welche Themen dich interessieren! Es werden keine zusätzlichen Informationen erhoben oder ausgewertet.`
    },
    {
      title: 'Global & barrierefrei',
      text: `Unser Netzwerk ist mehrsprachig, lässt sich vom Browser vorlesen und ist somit
      global und barrierefrei zugänglich.`
    },
    {
      title: 'Universal',
      text: `Die App selbst ist als Progressive Web App plattformunabhängig im Browser als auch in App-Stores z.B. im
      Google Playstore verfügbar. Damit sind alle Funktionen unabhängig von der technischen Ausstattung.`
    }
  ];

  menuTabList: MenuTab[] = [
    {
      tabName: 'HOME',
      tabLink: '#'
    },
    {
      tabName: 'LÖSUNGEN',
      tabLink: '#loesungen'
    },
    {
      tabName: 'PROTOTPY',
      tabLink: '#prototyp'
    },
    {
      tabName: 'SUPPORT',
      tabLink: '#support'
    },
    {
      tabName: 'KONTAKT',
      tabLink: '#kontakt'
    },
    {
      tabName: 'TEAM',
      tabLink: '#team'
    },
    {
      tabName: 'FAQ',
      tabLink: '#faq'
    },
    {
      tabName: 'IMPRESSUM',
      tabLink: '#impressum'
    },
  ];

  menuLoesungTabList: MenuTab[] = [
    {
      tabName: 'Ideen',
      tabLink: '#ideen'
    },
    {
      tabName: 'Gruppen',
      tabLink: '#gruppen'
    },
    {
      tabName: 'Events',
      tabLink: '#events'
    },
    {
      tabName: 'Smart Search',
      tabLink: '#search'
    },
    {
      tabName: 'Kommunikation',
      tabLink: '#kommunikation'
    },
    {
      tabName: 'Daten & Inklusion',
      tabLink: '#daten'
    },
  ];

  htmlElement: HTMLElement;
  offSetTopLoesungen: number;
  offSetTopPrototyp: number;

  elem: HTMLElement;
  instance: ScrollSpy;

  elem2: HTMLElement;
  instance2: ScrollSpy;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elem = this.elementRef.nativeElement.querySelectorAll('.scrollspy');
    this.instance = ScrollSpy.init(this.elem);

    this.elem2 = this.elementRef.nativeElement.querySelectorAll('.scrollspy2');
    this.instance2 = ScrollSpy.init(this.elem2);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.getOffSetTop('#loesungen');
    this.offSetTopLoesungen = this.htmlElement.offsetTop;

    this.getOffSetTop('#prototyp');
    this.offSetTopPrototyp = this.htmlElement.offsetTop;
   }

  getOffSetTop(id: string): void {
    this.htmlElement = this.elementRef.nativeElement.querySelector(id);
  }

}