import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards = () => {
  return (
    <div className="bienvenida">
      <h2>Beneficios</h2>
      <hr />
      <p>
        Duis tincidunt ipsum a risus elementum fringilla. Fusce congue mauris
        suscipit, porttitor felis eu, aliquet justo. Integer sit amet ligula nec
        dolor vestibulum suscipit vel eu lorem. Nam maximus nisi mauris. Ut nec
        blandit enim. Morbi pellentesque molestie lacinia. Vestibulum porttitor
        enim et eros feugiat, quis volutpat felis imperdiet. Donec risus quam,
        imperdiet nec magna in, cursus rutrum lorem. Etiam eu placerat est, eu
        aliquet augue. Suspendisse potenti. Phasellus convallis, purus sit amet
        tincidunt semper, diam augue facilisis ante, nec gravida metus mi in
        nunc. Praesent vel ullamcorper sem. Vivamus malesuada massa ac
        condimentum ultricies. Vivamus hendrerit mauris id dolor pellentesque,
        non sagittis risus dignissim.
      </p>
      <div className="d-flex justify-content-evenly mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
          />
          <Card.Body>
            <Card.Title>Calidad</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
          />
          <Card.Body>
            <Card.Title>Experiencia</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
          />
          <Card.Body>
            <Card.Title>Adaptabilidad</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
          />
          <Card.Body>
            <Card.Title>Vida Util</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
