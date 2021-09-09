export class NewProduct {
    public constructor(
        public name?: string,
        public image?: string,
        public price?: number,
        public categoryId?: number,
    ) { }
}