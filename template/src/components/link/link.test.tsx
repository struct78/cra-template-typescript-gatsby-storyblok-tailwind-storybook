import { Link } from "./link"
import { render } from "@testing-library/react"

it("matches snapshot", () => {
  const { getByText } = render(<Link to="/home">Home</Link>)
  expect(getByText("Home")).toBeInTheDocument()
});
