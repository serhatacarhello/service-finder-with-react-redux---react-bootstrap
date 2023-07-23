import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./search.style.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useApi from "../../../../hooks/useApi";
import CategoryDetail from "./../../../category-detail-page/components/CategoryDetail";

const Search = () => {
  const api = useApi();
  const data = useSelector((state) => state);
  console.log(data);
  useEffect(() => {
    (async () => {
      const response = await api.get(
        `public/clientProjects/searchProjects?page=1&zipCode=75001&categoryId=1&search=${inputValue}`
      );
    })();
  }, []);

  return (
    <>
      <Row className="mt-5 d-flex justify-content-center">
        <Col md={8}>
          <Card className="p-3 border-0 bg-danger">
            <Form
              as={Row}
              className="d-flex align-items-center justify-content-center bg-dark"
            >
              <Form.Group as={Col} md="8" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Exmp: Peinture" />
              </Form.Group>
              <Col md={4}>
                <Button
                  type="submit"
                  className="text-uppercase mx-0 bg-warning "
                >
                  find a service
                </Button>
              </Col>
            </Form>

            <div className="list border-bottom">
              <i className="fa fa-fire"></i>
              <div className="d-flex flex-column ml-3">
                <span>Client communication policy</span>
                <small>#politics - may - @max</small>
              </div>
            </div>

            <div className="list border-bottom">
              <i className="fa fa-yelp"></i>
              <div className="d-flex flex-column ml-3">
                <span>Major activity done</span>
                <small>#news - nov - @settings</small>
              </div>
            </div>

            <div className="list border-bottom">
              <i className="fa fa-fire"></i>
              <div className="d-flex flex-column ml-3">
                <span>Calling to USA Clients</span>
                <small>#entertainment - dec - @tunes</small>
              </div>
            </div>

            <div className="list">
              <i className="fa fa-weibo"></i>
              <div className="d-flex flex-column ml-3">
                <span>Client communication policy</span>
                <small>#politics - may - @max</small>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Search;
