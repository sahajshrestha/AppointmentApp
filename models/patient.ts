export interface Patient {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt?: Date; // Optional for existing data
}