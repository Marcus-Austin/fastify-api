import {randomUUID} from 'node:crypto';

export class database{
    #video = new Map();

    list(){
        return this.#video.values();
    }

    create(video){
        const videoid = randomUUID();

        this.#video.set(videoid,video);
    }

    update(id,video){
        this.#video.set(id,video);
    }

    delete(id){
        this.#video.delete(id);
    }
}