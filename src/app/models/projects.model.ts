export class Project {
    id: string;
    name: string;
    desc: string;
    images: string[];
    presentaion: string[];
    logos: string[];
    constructor({ name, desc, id , presentaion, images = [], logos}: any) {
        this.name = name;
        this.desc = desc;
        this.id = id;
        this.images = images;
        this.presentaion = presentaion;
        this.logos = logos
    }
}
