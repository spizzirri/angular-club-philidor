import { SafeUrl } from '@angular/platform-browser';

export interface Torneo {
    link:SafeUrl;
    nombre:string;
    organizador:String;
    fecha:String;
}
