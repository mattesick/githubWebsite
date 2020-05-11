export class Project {
    id: string;
    name: string;
    desc: string;
    productOwner: string[];
    images: string[];
    presentaion: string[];
    logos: string[];
    constructor({ name, desc, productOwner, id , presentaion, images, logos}: any) {
        this.name = name;
        this.desc = desc;
        this.productOwner = productOwner;
        this.id = id;
        this.images = images;
        this.presentaion = presentaion;
        this.logos = logos
    }
}
