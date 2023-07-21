import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryDetail from "./components/CategoryDetail";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import SubCategories from "./components/SubCategories";

export default function CategoryDetailPage() {
  const params = useParams();
  const api = useApi();
  const [categoryDetailData, setCategoryDetailData] = useState(null);
  //   const [categoryBlogs, setCategoryBlogs] = useState(null);
  //   const [categoryServices, setCategoryServices] = useState(null);
  //   const [categoryChildren, setCategoryChildren] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `public/categories/getBySlug/${params.slug}`
      );
      setCategoryDetailData(response.data?.data);
      //   setCategoryServices(response.data.data?.services);
      //   setCategoryBlogs(response.data.data?.blogs);
      //   setCategoryChildren(response.data.category?.children);
      console.warn(response.data.data);
    })();
    setLoading(false);
  }, []);

  if (loading) return;
  return (
    <Container fluid="md" className="justify-content-center">
      <Row className="justify-content-center">
        <CategoryDetail categoryDetail={categoryDetailData} />
      </Row>
      <Row className="justify-content-center">
        <Services categoryDetail={categoryDetailData} />
      </Row>
      <Row className="justify-content-center">
        <Blogs categoryDetail={categoryDetailData} />
      </Row>
      <Row className="justify-content-center">
        <SubCategories categoryDetail={categoryDetailData} />
      </Row>
      <div className="row">detail slug:{params.slug}</div>;
    </Container>
  );
}
