import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./beneficios.css";

export const Beneficios = () => {
  return (
    <div className="my-5">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Area informativa
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Soluciones
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Material y calibres
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Alcanse
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Maquinaria
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Rapidez
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1" className="px-5">
                <h2> Area informativa</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                  ligula, in sodales nibh quam fringilla nibh. Duis id rhoncus
                  eros. Donec lacinia leo nec nibh euismod, sit amet iaculis
                  sapien viverra. Duis rhoncus nulla arcu, finibus fringilla
                  massa sollicitudin ut. Donec libero urna, tincidunt eu lorem
                  quis, hendrerit tempus augue. Maecenas non posuere nibh.
                  Vestibulum sed efficitur enim. Donec mattis dolor ipsum, a
                  rutrum mi feugiat in. Sed id laoreet odio, vel varius est.
                  Phasellus euismod lacus felis, ut gravida urna tempor ut.
                  Pellentesque sed mauris eu purus laoreet varius sit amet ac
                  justo. In cursus elit eget ante convallis scelerisque. Fusce
                  ultrices, sapien vitae faucibus congue, nibh felis tincidunt
                  tortor, at blandit turpis sapien non lorem. Maecenas et mauris
                  at purus efficitur molestie. Nam maximus lacus quis venenatis
                  pellentesque. Suspendisse fermentum laoreet leo, et tempor
                  nulla dapibus vitae.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2" className="px-5">
                <h2>Soluciones</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                  ligula, in sodales nibh quam fringilla nibh. Duis id rhoncus
                  eros. Donec lacinia leo nec nibh euismod, sit amet iaculis
                  sapien viverra. Duis rhoncus nulla arcu, finibus fringilla
                  massa sollicitudin ut. Donec libero urna, tincidunt eu lorem
                  quis, hendrerit tempus augue. Maecenas non posuere nibh.
                  Vestibulum sed efficitur enim. Donec mattis dolor ipsum, a
                  rutrum mi feugiat in. Sed id laoreet odio, vel varius est.
                  Phasellus euismod lacus felis, ut gravida urna tempor ut.
                  Pellentesque sed mauris eu purus laoreet varius sit amet ac
                  justo. In cursus elit eget ante convallis scelerisque. Fusce
                  ultrices, sapien vitae faucibus congue, nibh felis tincidunt
                  tortor, at blandit turpis sapien non lorem. Maecenas et mauris
                  at purus efficitur molestie. Nam maximus lacus quis venenatis
                  pellentesque. Suspendisse fermentum laoreet leo, et tempor
                  nulla dapibus vitae.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3" className="px-5">
                <h2>Material y calibres</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                  ligula, in sodales nibh quam fringilla nibh. Duis id rhoncus
                  eros. Donec lacinia leo nec nibh euismod, sit amet iaculis
                  sapien viverra. Duis rhoncus nulla arcu, finibus fringilla
                  massa sollicitudin ut. Donec libero urna, tincidunt eu lorem
                  quis, hendrerit tempus augue. Maecenas non posuere nibh.
                  Vestibulum sed efficitur enim. Donec mattis dolor ipsum, a
                  rutrum mi feugiat in. Sed id laoreet odio, vel varius est.
                  Phasellus euismod lacus felis, ut gravida urna tempor ut.
                  Pellentesque sed mauris eu purus laoreet varius sit amet ac
                  justo. In cursus elit eget ante convallis scelerisque. Fusce
                  ultrices, sapien vitae faucibus congue, nibh felis tincidunt
                  tortor, at blandit turpis sapien non lorem. Maecenas et mauris
                  at purus efficitur molestie. Nam maximus lacus quis venenatis
                  pellentesque. Suspendisse fermentum laoreet leo, et tempor
                  nulla dapibus vitae.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4" className="px-5">
                <h2>Alcanse</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                  ligula, in sodales nibh quam fringilla nibh. Duis id rhoncus
                  eros. Donec lacinia leo nec nibh euismod, sit amet iaculis
                  sapien viverra. Duis rhoncus nulla arcu, finibus fringilla
                  massa sollicitudin ut. Donec libero urna, tincidunt eu lorem
                  quis, hendrerit tempus augue. Maecenas non posuere nibh.
                  Vestibulum sed efficitur enim. Donec mattis dolor ipsum, a
                  rutrum mi feugiat in. Sed id laoreet odio, vel varius est.
                  Phasellus euismod lacus felis, ut gravida urna tempor ut.
                  Pellentesque sed mauris eu purus laoreet varius sit amet ac
                  justo. In cursus elit eget ante convallis scelerisque. Fusce
                  ultrices, sapien vitae faucibus congue, nibh felis tincidunt
                  tortor, at blandit turpis sapien non lorem. Maecenas et mauris
                  at purus efficitur molestie. Nam maximus lacus quis venenatis
                  pellentesque. Suspendisse fermentum laoreet leo, et tempor
                  nulla dapibus vitae.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5" className="px-5">
                <h2>Maquinaria</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                  ligula, in sodales nibh quam fringilla nibh. Duis id rhoncus
                  eros. Donec lacinia leo nec nibh euismod, sit amet iaculis
                  sapien viverra. Duis rhoncus nulla arcu, finibus fringilla
                  massa sollicitudin ut. Donec libero urna, tincidunt eu lorem
                  quis, hendrerit tempus augue. Maecenas non posuere nibh.
                  Vestibulum sed efficitur enim. Donec mattis dolor ipsum, a
                  rutrum mi feugiat in. Sed id laoreet odio, vel varius est.
                  Phasellus euismod lacus felis, ut gravida urna tempor ut.
                  Pellentesque sed mauris eu purus laoreet varius sit amet ac
                  justo. In cursus elit eget ante convallis scelerisque. Fusce
                  ultrices, sapien vitae faucibus congue, nibh felis tincidunt
                  tortor, at blandit turpis sapien non lorem. Maecenas et mauris
                  at purus efficitur molestie. Nam maximus lacus quis venenatis
                  pellentesque. Suspendisse fermentum laoreet leo, et tempor
                  nulla dapibus vitae.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6" className="px-5">
                <h2>Rapidez</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                  ligula, in sodales nibh quam fringilla nibh. Duis id rhoncus
                  eros. Donec lacinia leo nec nibh euismod, sit amet iaculis
                  sapien viverra. Duis rhoncus nulla arcu, finibus fringilla
                  massa sollicitudin ut. Donec libero urna, tincidunt eu lorem
                  quis, hendrerit tempus augue. Maecenas non posuere nibh.
                  Vestibulum sed efficitur enim. Donec mattis dolor ipsum, a
                  rutrum mi feugiat in. Sed id laoreet odio, vel varius est.
                  Phasellus euismod lacus felis, ut gravida urna tempor ut.
                  Pellentesque sed mauris eu purus laoreet varius sit amet ac
                  justo. In cursus elit eget ante convallis scelerisque. Fusce
                  ultrices, sapien vitae faucibus congue, nibh felis tincidunt
                  tortor, at blandit turpis sapien non lorem. Maecenas et mauris
                  at purus efficitur molestie. Nam maximus lacus quis venenatis
                  pellentesque. Suspendisse fermentum laoreet leo, et tempor
                  nulla dapibus vitae.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
