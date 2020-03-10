import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { Formik, ErrorMessage } from 'formik';
import { Form, Input, Select, SubmitButton } from 'formik-antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const ContentDiv = styled.div`
  margin: 0 auto;
  width: 80%;
`;

interface RootProps {
  competitionStore?: any;
}

interface Errors {
  name?: any;
}

@inject('competitionStore')
@observer
class Index extends React.Component<RootProps> {

  componentWillMount() {
    document.title = 'Welcome to Tornado Tennis Club';
  }

  render() {
    const { competition } = this.props.competitionStore;
    return (
      <div>
        <Header />
        <ContentDiv className="content-div">
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={{ backgroundColor: '#ccc', width: '100vh', height: '16vh', margin: '0 auto' }}>
                <Formik
                  initialValues={{ name: '', style: competition.style }}
                  validate={value => {
                    const errors: Errors = {};
                    if (value.name === '') {
                      errors.name = 'Please input a name to create competition first';
                    }
                    return errors;
                  }}
                  onSubmit={(value, action) => {
                    const { storeCompetitionInStore } = this.props.competitionStore;
                    let tempCompetition = {
                      name: value.name,
                      style: value.style
                    };
                    storeCompetitionInStore(tempCompetition);
                    setTimeout(() => {
                      // reset the button state and alert a message for user after 0.5 second
                      action.setSubmitting(false);
                      alert(`Competition ${value.name} has created successfully!`);
                    }, 500);
                  }}
                >
                  <Form>
                    <Row>
                      <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <label htmlFor="name">COMPETITION NAME </label>
                        <Input name="name" placeholder="Please input" />
                        <ErrorMessage name="name" component="div" />
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <label htmlFor="style">COMPETITION STYLE </label>
                        <br />
                        <Select defaultValue="single" name="style" onChange={() => {}}>
                          <Select.Option value="single">Single Circle</Select.Option>
                          <Select.Option value="double">Double Circle</Select.Option>
                        </Select>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
                    </Row>
                    <Row>
                      <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <SubmitButton type="primary" style={{marginTop:'1vh'}} >Create A Competition</SubmitButton>
                      </Col>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3}></Col>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Link to="/players/">
                          <Button type="danger" disabled={!competition.name} style={{marginTop:'1vh'}}>
                            Go to select players
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </ContentDiv>
        <Footer />
      </div>
    );
  }
}

export default Index;
