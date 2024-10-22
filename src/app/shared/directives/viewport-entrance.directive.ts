import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[viewportEntrance]',
})
export class ViewportEntranceDirective implements OnDestroy {
  @Input('viewportEntrance') className: string = ''; // injection d'une classe defini en attribut

  observer!: IntersectionObserver;
  constructor(
    private elementRef: ElementRef, // la reference de l'element du DOM sur lequel la directive est appeléz
    private renderer: Renderer2 // injecteur de contenu dans le DOM utilisé pour modifier la classe de l'élément
  ) {
    this.initObserver();
  }
  initObserver() {
    this.observer = new IntersectionObserver((entries) => {
      const options = {
        root: null, // element parent de reference, 'null' signifiera que tous le viewport sera observé
        threshold: 0.2, // déclenche à 20% de visibilité dans le root
      };
      entries.forEach((entry) => {
        entry.isIntersecting
          ? this.renderer.addClass(this.elementRef.nativeElement, this.className)
          : this.renderer.removeClass(this.elementRef.nativeElement, this.className);
      });
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect(); // arrét de l'observer à la destruction du (evite fuite de memoire)
    }
  }
}
