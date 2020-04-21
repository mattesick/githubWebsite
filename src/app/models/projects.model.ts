export class Project {
    id: string;
    name: string;
    desc: string;
    productOwner: string[];
    constructor({ name, desc, productOwner, id }: any) {
        this.name = name;
        this.desc = desc;
        this.productOwner = productOwner;
        this.id = id;
    }
}
