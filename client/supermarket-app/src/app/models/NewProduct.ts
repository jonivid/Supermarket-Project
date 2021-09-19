export class NewProduct {
    public constructor(
        public name?: string,
        public imageUrl?: string,
        public price?: number,
        public categoryId?: number,
    ) { }
}