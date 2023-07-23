import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import useApi from "../../../hooks/useApi";
import { useDispatch } from "react-redux";
import { isLogin } from "../../../features/redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

// for validation
const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(4, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginPage = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "admin@system.com",
      password: "123123",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, bag) => {
      const loginResponse = await api.post(`/auth/login`, values);
      console.log("alsddfslogin", loginResponse.data.data);
      dispatch(isLogin(loginResponse?.data?.data));
      bag.resetForm();
      navigate("/search");
    },
  });
  console.log(values);
  // console.log("touched", touched);
  return (
    <>
      <Row className="justify-content-center ">
        <Col sm="12" md="12" lg="6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                disabled={isSubmitting}
              />
              {errors.email && touched.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </Form.Group>

            <Form.Group controlId="loginForm.password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                disabled={isSubmitting}
              />
              {errors.password && touched.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </Form.Group>
            <Button
              disabled={isSubmitting}
              variant="primary "
              className="w-100 mt-3"
              type="submit"
            >
              <i className="fa-solid fa-right-to-bracket" />
              &nbsp;Login
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
