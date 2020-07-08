import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes';

describe(`Mistakes should render correctly`, () => {
  test(`With one zero count`, () => {
    const tree = renderer.create(<Mistakes count={0} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`With one one count`, () => {
    const tree = renderer.create(<Mistakes count={1} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
