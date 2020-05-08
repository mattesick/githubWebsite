export class Project {
    id: string;
    name: string;
    desc: string;
    productOwner: string[];
    image: string[];
    presentaion: string[];
    logos: string[];
    constructor({ name, desc, productOwner, id , presentaion, image, logos}: any) {
        this.name = name;
        this.desc = desc;
        this.productOwner = productOwner;
        this.id = id;
        this.image = image;
        this.presentaion = presentaion;
        this.logos = logos
    }
}
