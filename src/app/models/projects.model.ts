export class Project {
    id: string;
    name: string;
    desc: string;
    productOwner: string[];
    image: string[];
    presentaion: string[];
    constructor({ name, desc, productOwner, id , presentaion, image}: any) {
        this.name = name;
        this.desc = desc;
        this.productOwner = productOwner;
        this.id = id;
        this.image = image;
        this.presentaion = presentaion;
    }
}
