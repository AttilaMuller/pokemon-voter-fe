import { createStore, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import reducers from "../reducers";
import PokemonEpic from "./PokemonEpic";
import { randomPokemonsGetAction, resetPokemonVotesAction, topTenPokemonsGetAction, voteForPokemonAction } from "./PokemonAction";
import axios from "axios";
import http from "../../config/axios/axios.setup";

jest.mock('http');
http.get = jest.fn();
http.post = jest.fn();
const mockedAxios = http as jest.Mocked<typeof axios>;

const mockPokemon1 = {
    id: 1,
    name: 'test_name',
    imageUrl: 'https://test.com/image.png',
    abilities: ['test_ability_1', 'test_ability_2'],
    types: ['test_type_1', 'test_type_2'],
    votes: 0
};

const mockPokemon2 = {
    id: 2,
    name: 'test_name',
    imageUrl: 'https://test.com/image.png',
    abilities: ['test_ability_1', 'test_ability_2'],
    types: ['test_type_1', 'test_type_2'],
    votes: 0
};

describe('Pokemon', () => {
    describe('#randomPokemonsGet', () => {
        it('should fetch the 2 random pokemons and set state', async () => {
            const mockPokemons = [mockPokemon1, mockPokemon2];
            mockedAxios.get.mockImplementation(() => Promise.resolve({ data: mockPokemons }));
            const mockEpicMiddleware = createEpicMiddleware();
            const store = createStore(
                reducers,
                compose(applyMiddleware(mockEpicMiddleware))
            );
            const mockAction = randomPokemonsGetAction();
            mockEpicMiddleware.run(PokemonEpic[0]);

            store.dispatch(mockAction);

            await new Promise(resolve => setTimeout(resolve, 100));
            expect(store.getState().pokemon.randomPokemons).toEqual(mockPokemons);
        });
    });

    describe('#topTenPokemonsGet', () => {
        it('should fetch top 10 pokemons and set state', async () => {
            const mockPokemons = Array(10).fill(mockPokemon1);
            mockedAxios.get.mockImplementation(() => Promise.resolve({ data: mockPokemons }));
            const mockEpicMiddleware = createEpicMiddleware();
            const store = createStore(
                reducers,
                compose(applyMiddleware(mockEpicMiddleware))
            );
            const mockAction = topTenPokemonsGetAction();
            mockEpicMiddleware.run(PokemonEpic[1]);

            store.dispatch(mockAction);

            await new Promise(resolve => setTimeout(resolve, 100));
            expect(store.getState().pokemon.topTenPokemons).toEqual(mockPokemons);
        });
    });

    describe('#pokemonVote', () => {
        it('should fetch 2 new random pokemons upon successfull voting and set them to state', async () => {
            const mockPokemons = [mockPokemon1, mockPokemon2];
            mockedAxios.post.mockImplementation(() => Promise.resolve({ status: 200 }));
            mockedAxios.get.mockImplementation(() => Promise.resolve({ data: mockPokemons }));
            const mockEpicMiddleware = createEpicMiddleware();
            const store = createStore(
                reducers,
                compose(applyMiddleware(mockEpicMiddleware))
            );
            const mockAction = voteForPokemonAction(1);
            mockEpicMiddleware.run(combineEpics(...PokemonEpic));

            store.dispatch(mockAction);

            await new Promise(resolve => setTimeout(resolve, 100));
            expect(store.getState().pokemon.randomPokemons).toEqual(mockPokemons);
        });
    });

    describe('#resetPokemonVotes', () => {
        it('should fetch 2 new random pokemons upon successfull vote reset and set them to state', async () => {
            const mockPokemons = [mockPokemon1, mockPokemon2];
            mockedAxios.post.mockImplementation(() => Promise.resolve({ status: 200 }));
            mockedAxios.get.mockImplementation(() => Promise.resolve({ data: mockPokemons }));
            const mockEpicMiddleware = createEpicMiddleware();
            const store = createStore(
                reducers,
                compose(applyMiddleware(mockEpicMiddleware))
            );
            const mockAction = resetPokemonVotesAction();
            mockEpicMiddleware.run(combineEpics(...PokemonEpic));

            store.dispatch(mockAction);

            await new Promise(resolve => setTimeout(resolve, 100));
            expect(store.getState().pokemon.randomPokemons).toEqual(mockPokemons);
        });
    });
});
