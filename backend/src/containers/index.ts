import { container } from 'tsyringe';

import IBooksRepository from '../repositories/IBooksRepository';
import BooksRepository from '../repositories/BooksRepository';

container.registerSingleton<IBooksRepository>(
    'BooksRepository',
    BooksRepository,
);