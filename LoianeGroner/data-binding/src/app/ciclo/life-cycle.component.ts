import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'lifeCycle',
    templateUrl: './life-cycle.component.html'
})

export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() valorInicial: number = 10;// propriedade de entrada
    @ViewChild('variavelLocalP') variavelLocalP: HTMLElement;// faz referencia a variavel criada no html

    private log(hook: string) { console.log(hook); }

    constructor() { this.log('constructor'); }

    ngOnInit() {
        this.log('ngOnInit');
    }
    ngOnChanges() { this.log('ngOnChanges'); }
    ngDoCheck() { this.log('ngDoCheck'); }
    ngAfterViewInit() { this.log('ngAfterViewInit'); }
    ngAfterContentChecked() { this.log('ngAfterContentChecked'); }
    ngAfterContentInit() { this.log('ngAfterContentInit'); }
    ngAfterViewChecked() { this.log('ngAfterViewChecked'); }
    ngOnDestroy() { this.log('ngOnDestroy'); }
}
