import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mdHighlightName'})
export class HighlightNamePipe implements PipeTransform {
    transform(name: string, targetName: string): string {
        if (name === targetName) {
            return '<mark>' + name + '</mark>';
        }

        return name;
    }
}
