import { Component, Output,EventEmitter } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html' 
})
export class headerComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature:string){
        this.featureSelected.emit(feature);
 }
}