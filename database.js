import {randomUUID} from 'node:crypto';

export class database{
    #video = new Map();

    list(search){
        return Array.from(this.#video.entries()).map((videoArray)=>{
            const id = videoArray[0];
            const data = videoArray[1];
            return {
                id,
                ...data,
            };
        }).filter((video)=>{
            if(!search){
                return true;
            }
            return video.title.toLowerCase().includes(search.toLowerCase());
        });
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