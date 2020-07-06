import React from 'react';
import renderer from 'react-test-renderer';
import {GameScreen} from './game-screen';
import {GameType} from '../../const';

const children = <div className="children-component"></div>;

describe(`GameScreen component should render correctly`, () => {
  test(`with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen type={GameType.ARTIST} mistakes={3}>
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen type={GameType.GENRE} mistakes={3}>
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
