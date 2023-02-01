import renderer from 'react-test-renderer';
import Nav from "../nav";

test("renders nav component", () => {
  const tree = renderer
    .create(<Nav title="Test" subtitle="Subtest"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
