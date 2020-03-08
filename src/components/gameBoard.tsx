import * as React from 'react';
import { Row, Col } from 'antd';
import ImageAvatar from './avatar';
import { observer, inject } from 'mobx-react';

import { Form, Select, SubmitButton, ResetButton } from 'formik-antd';
import { Formik } from 'formik';

interface game {
  gameID: number;
  player1: string;
  score1: number;
  player2: string;
  score2: number;
}

interface RootProps {
  game?: any;
  gamesStore?: any;
}

interface RootState {
  submitState?: boolean;
}
@inject('gamesStore', 'playersStore')
@observer
export default class GameBoard extends React.Component<RootProps, RootState> {
  constructor(props: any) {
    super(props);
    this.state = {
      submitState: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit() {
    this.setState({ submitState: !this.state.submitState });
    // const { gameBoards } = this.props.gamesStore;
    // const game = gameBoards[0];
  }

  handleReset() {
    this.setState({ submitState: !this.state.submitState });
    // const { gameBoards } = this.props.gamesStore;
    // const game = gameBoards;
  }

  render() {
    const { game } = this.props;
    const { handleSubmitScore } = this.props.gamesStore;
    const { handleResetScore } = this.props.gamesStore;
    // console.log(game.player1)
    return (
      <div className="board-card">
        {/* TODO: add formik into  */}
        <Formik
          initialValues={{ score1: 0, score2: 0 }}
          onSubmit={(value: any, action: any) => {
            let gameScore = {
              gameID: game.gameID,
              player1: game.player1,
              score1: value.score1,
              score2: value.score2,
              player2: game.player2
            };
            // console.log(gameScore)
            handleSubmitScore(gameScore);
            this.setState({ submitState: !this.state.submitState });
            setTimeout(() => {
              action.setSubmitting(false);
            }, 500);
          }}
          onReset={() => {
            handleResetScore(game.gameID);
            this.setState({ submitState: !this.state.submitState });
          }}
        >
          <Form>
            <Row>
              <Col lg={4}>
                <ImageAvatar name={game.player1} hasButton={false} />
              </Col>
              <Col lg={4}>
                <Select name="score1">
                  <Select.Option value="0">0</Select.Option>
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                  <Select.Option value="4">4</Select.Option>
                </Select>
              </Col>
              <Col lg={4}>{`第 ${game.gameID} 场`}</Col>
              <Col lg={4}>
                <Select name="score2">
                  <Select.Option value="0">0</Select.Option>
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                  <Select.Option value="4">4</Select.Option>
                </Select>
              </Col>
              <Col lg={4}>
                <ImageAvatar name={game.player2} hasButton={false} />
              </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <SubmitButton disabled={this.state.submitState} type="primary">
                  Submit
                </SubmitButton>
              </Col>
              <Col lg={8}>
                <ResetButton disabled={!this.state.submitState} type="danger">
                  Reset
                </ResetButton>
              </Col>
            </Row>
          </Form>
        </Formik>
      </div>
    );
  }
}
