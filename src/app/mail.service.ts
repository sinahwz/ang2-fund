import {Injectable} from '@angular/core';

@Injectable()
export class MailService {

    messages = [
        `You are friends`,
        `You liked his post`,
        `You don't give a fuck`
    ];

    constructor() {
    }

}
