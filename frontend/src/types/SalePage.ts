import { Sale } from "./Sale";

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElement?: number;
    empty?: boolean
}