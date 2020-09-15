import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const Pie = (props) => {
  return (
    <Col xs="12" sm="4">
      <Card>
        <CardBody>
          <CardTitle>{props.pie.nameOfPie}</CardTitle>

          <CardText>
            {props.pie.crust}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Pie;