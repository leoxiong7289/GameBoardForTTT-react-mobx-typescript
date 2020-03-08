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
`;

interface RootProps {
  competitionStore?: any;
}

interface Errors {
  name?: any
}

@inject('competitionStore')
@observer
class Index extends React.Component<RootProps> {
  // constructor(props: any) {
  //   super(props);
  //   console.log(this.props);
  // }

  componentWillMount() {
    document.title = 'Welcome to Tornado Tennis Club'
    // history.go(0)
  }

  render() {
    const { competition } = this.props.competitionStore
    return (
      <div>
        <Header />
        <ContentDiv className="content-div">
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={{ backgroundColor: '#ccc', width: '100vh', height: '16vh', margin: '0 auto' }}>
                <Formik
                  initialValues={{ name: '', style: competition.style }}
                  validate={(value)=>{
                    const errors:Errors={}
                    if(value.name===''){
                      errors.name = "Please input a name to create competition first"
                    }
                    return errors
                  }}
                  onSubmit={(value, action) => {
                    // const { competition } = this.props.competitionStore;
                    const { storeCompetitionInStore } = this.props.competitionStore;
                    let tempCompetition = {
                      name: value.name,
                      style: value.style
                    };
                    storeCompetitionInStore(tempCompetition);
                    // console.log(storeCompetitionInStore)
                    setTimeout(() => {
                      action.setSubmitting(false);
                      // console.log(value.name)
                      alert(`Competition ${value.name} has created successfully!`);
                    }, 500); 
                  }}
                >
                  <Form>
                    <label htmlFor="name">COMPETITION NAME </label>
                    <Input name="name" placeholder="Please input a competition name" onChange={(e)=>e.target.value} />
                    <ErrorMessage name='name' component="div" />
                    <label htmlFor="style">COMPETITION STYLE </label>
                    <Select defaultValue="single" name="style" onChange={() => {}}>
                      <Select.Option value="single">Single Circle</Select.Option>
                      <Select.Option value="double">Double Circle</Select.Option>
                    </Select>
                    <SubmitButton type="primary" >Click To Create A Competition</SubmitButton>
                  </Form>
                </Formik>
                <Link to="/players/">
                  <Button type="danger" disabled={!competition.name}>Go</Button>
                </Link>
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