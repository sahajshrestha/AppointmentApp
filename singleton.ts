import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import prisma from  './client';
import { PrismaClient } from '@prisma/client';

jest.mock('./client', () => (
    __esModule: true,
    default: mockDeep<PrismaClient>().
))

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

mockDeep<PrismaClient>().patient.findMany.mock 


// Singleton because just one instance 