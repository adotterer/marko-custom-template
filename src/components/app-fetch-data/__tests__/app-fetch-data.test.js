import { render, screen } from "@marko/testing-library";
import DataFetchExample from "./fixture.marko";
import debounce from "../../../utils/debounce";

describe("<app-fetch-data>", () => {
  test("Data fetch table displays headers", async () => {
    await render(DataFetchExample);
    await debounce(1000); // wait for resources to load

    expect(screen.getByText("Avatar")).toBeInTheDocument();
  });

  test("Data fetch table displays headers", async () => {
    const { container } = await render(DataFetchExample);
    await debounce(1000); // wait for resources to load

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class="container"><div class="app-fetch-data"><div class="table-container"><table><thead><tr><td>ID</td><td>Avatar</td><td>Name</td><td>Email</td></tr></thead><tbody><tr><td>1</td><td><img src="https://robohash.org/quinihilomnis.bmp?size=50x50&amp;set=set1" width="50" height="50"></td><td>Evelyn Patterson</td><td>epatterson0@ehow.com</td></tr><tr><td>2</td><td><img src="https://robohash.org/eaquemolestiasdistinctio.png?size=50x50&amp;set=set1" width="50" height="50"></td><td>Matthew Moore</td><td>mmoore1@squidoo.com</td></tr><tr><td>3</td><td><img src="https://robohash.org/corruptiipsumlabore.png?size=50x50&amp;set=set1" width="50" height="50"></td><td>Ryan Mendoza</td><td>rmendoza2@bloglines.com</td></tr><tr><td>4</td><td><img src="https://robohash.org/voluptatererumpariatur.bmp?size=50x50&amp;set=set1" width="50" height="50"></td><td>Matthew Rice</td><td>mrice3@cafepress.com</td></tr><tr><td>5</td><td><img src="https://robohash.org/inconsequaturtempora.bmp?size=50x50&amp;set=set1" width="50" height="50"></td><td>Ryan Bradley</td><td>rbradley4@yahoo.com</td></tr><tr><td>6</td><td><img src="https://robohash.org/iustoadest.jpg?size=50x50&amp;set=set1" width="50" height="50"></td><td>James Simmons</td><td>jsimmons5@nbcnews.com</td></tr><tr><td>7</td><td><img src="https://robohash.org/sitlaborumdolorem.png?size=50x50&amp;set=set1" width="50" height="50"></td><td>Heather Wagner</td><td>hwagner6@state.tx.us</td></tr><tr><td>8</td><td><img src="https://robohash.org/undeetducimus.bmp?size=50x50&amp;set=set1" width="50" height="50"></td><td>Norma Payne</td><td>npayne7@kickstarter.com</td></tr><tr><td>9</td><td><img src="https://robohash.org/quisutlaboriosam.png?size=50x50&amp;set=set1" width="50" height="50"></td><td>Jeremy Wilson</td><td>jwilson8@amazonaws.com</td></tr><tr><td>10</td><td><img src="https://robohash.org/quibusdamnullacorporis.jpg?size=50x50&amp;set=set1" width="50" height="50"></td><td>Sean Palmer</td><td>spalmer9@eepurl.com</td></tr></tbody></table></div><button class="app-button"><span>Load more users</span></button><span></span></div></div>"`
    );
  });
});
