import { Injectable } from '@angular/core';
import type {} from 'css-font-loading-module';
import { fontsToLoad, LoadableFont } from './fonts';

const defaultFontSize: string = '1rem';

@Injectable()
export class FontsLoaderService {
  load() {
    return new Promise<void>((resolve, reject) => {
      const fontFaceSet: FontFaceSet = window.document.fonts;

      const promises: Promise<FontFace[]>[] = fontsToLoad.reduce((p: Promise<FontFace[]>[], font: LoadableFont) => {
        p.push(fontFaceSet.load(`${font.size ? font.size : defaultFontSize} ${font.family}`));
        return p;
      }, []);

      Promise.allSettled(promises).then((data) => {
        console.log('all loaded', data);
        resolve();
      });
    });
  }
}
