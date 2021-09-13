export class NewProduct {
    public constructor(
        public name?: string,
        public imageUrl?: string,
        public image?:any,
        public price?: number,
        public categoryId?: number,
    ) { }
}